import React from 'react';

import classes from './Button.css'

const button = (props) =>{
  return <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')}>
      {props.children.toUpperCase()}
  </button>
};

export default  button;