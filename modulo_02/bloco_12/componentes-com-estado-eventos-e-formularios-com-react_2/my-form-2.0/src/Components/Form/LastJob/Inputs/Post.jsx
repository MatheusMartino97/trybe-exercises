import React, { Component } from 'react';

class PostInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='post-input'>Cargo: </label>
        <br />
        <textarea
          name='post'
          id=''
          cols='30'
          rows='10'
          maxLength='40'
          required
          onChange={this.props.onChange}
        ></textarea>
      </div>
    );
  }
}

export default PostInput;
