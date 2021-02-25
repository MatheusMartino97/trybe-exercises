import React, { Component } from 'react';

import DescriptionInput from './Inputs/Description';
import PostInput from './Inputs/Post';
import ResumeInput from './Inputs/Resume';

class LastJobFieldset extends Component {
  updateFieldProperties({ target }) {
    const { name, value } = target;
    const lastJobFieldset = document.querySelector('.last-job-fieldset');

    lastJobFieldset[name] = value;

    console.log(lastJobFieldset);
  }

  render() {
    return (
      <fieldset className='last-job-fieldset' onChange={this.props.onChange}>
        <legend>Informações do último emprego</legend>
        <ResumeInput onChange={this.updateFieldProperties} />
        <PostInput onChange={this.updateFieldProperties} />
        <DescriptionInput onChange={this.updateFieldProperties} />
      </fieldset>
    );
  }
}

export default LastJobFieldset;
