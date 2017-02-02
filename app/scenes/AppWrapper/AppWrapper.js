import React, { Component } from 'react';

export default (props) => {
  return(
    <div id="navigation-bar">
      <h1>Top Bar</h1>
      {props.children}
      <h1>Down Bar</h1>
    </div>
  )
};
