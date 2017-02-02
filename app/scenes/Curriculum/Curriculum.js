import React, { Component } from 'react';
import Flowchart from '../../modules/flowchart/containers/index'

export default (props) => {
  return(
    <div>
      <h1>Flowchart Scene</h1>
      <Flowchart curricula_id={props.match.params.id}/>
    </div>
  )
};

