import { Component } from 'react';
import Button from './Button';
import BreedInput from './BreedInput';
import LoadingElement from './LoadingElement'

class Display extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.randomDog = this.randomDog.bind(this)

    this.state = {
      breed: '',
      imagePath: '',
      loading: false,
    };
  }

  handleChange(event) {
    const { target } = event;

    const valueWithoutNumbersAndSpaces = target.value
      .split('')
      .map((char) => {
        if (char.match(/[^0-9]/) && char.match(/\w/)) {
          return char;
        } else {
          return '';
        }
      })
      .join('');

    this.setState({
      breed: valueWithoutNumbersAndSpaces,
    });

    if (event.keyCode === 13) {
      this.handleClick();
    }
  }

  async handleClick() {
    const endPoind = `https://dog.ceo/api/breed/${this.state.breed}/images/random`;

    if (this.state.breed === '') {
      this.randomDog()
      return
    }

    this.setState({ loading: true });

    try {
      const response = await fetch(endPoind);
      const dogObject = await response.json();
      const imagePath = dogObject.message;

      this.setState({
        imagePath,
      });

      if (dogObject.status !== 'success') {
        this.setState({imagePath: 'https://www.pngkey.com/png/detail/395-3958023_sad-puppy-drawing-dog.png'})
        throw(Error)
      }
  
    } catch (error) {
      
      window.alert('Breed not found')
    }

    this.setState({ loading: false });
  }

  async randomDog() {
    const endPoind = `https://dog.ceo/api/breeds/image/random`;

    this.setState({ loading: true });

    try {
      const response = await fetch(endPoind);
      const dogObject = await response.json();
      const imagePath = dogObject.message;
  
      this.setState({
        imagePath,
      });

      if (dogObject.status !== 'success') {
        throw(Error)
      }

    } catch (error) {
      window.alert('Dog not found')
    }

    this.setState({ loading: false });
  }

  componentDidMount() {
    this.randomDog()
  }

  render() {
    return (
      <div className='display'>
        <div className='image-container'>
          {this.state.loading === true ? (
            <LoadingElement />
          ) : (
            <img src={this.state.imagePath} alt='' />
          )}
        </div>

        <BreedInput onchange={this.handleChange} value={this.state.breed} />
        <Button onclick={this.handleClick} />
      </div>
    );
  }
}

export default Display;
