import React, { Component } from 'react';

import DescriptionInput from './Inputs/Description';
import PostInput from './Inputs/Post';
import ResumeInput from './Inputs/Resume';

class LastJobFieldset extends Component {
  render() {
    return (
      <fieldset className='last-job-fieldset'>
        <legend>Informações do último emprego</legend>
        <ResumeInput />
        <PostInput />
        <DescriptionInput />
      </fieldset>
    );
  }
}

export default LastJobFieldset;
