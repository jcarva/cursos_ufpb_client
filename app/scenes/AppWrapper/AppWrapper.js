import React from 'react';

export default (props) => {
  return(
    <div id="navigation-bar">
      <h4>Top Bar</h4>
      {props.children}
      <h4>Down Bar</h4>
    </div>
  )
};
