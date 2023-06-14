import React from 'react';

function Greet(props) {
  // props.name = "John"; // This is not allowed
  return <h1>Hello World from greet.js {props.name}</h1>
}

export {
    Greet
} 