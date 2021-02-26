import React, { Component } from 'react';

class ResumeInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='resume-input'>Resumo do curriculo: </label>
        <br />
        <textarea
          name='resume'
          id=''
          cols='30'
          rows='10'
          maxLength='1000'
          required
          onChange={this.props.onChange}
        ></textarea>
      </div>
    );
  }
}

export default ResumeInput;
