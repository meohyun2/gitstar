import React, { useState } from 'react';
import Button from './button';

function Input() {

  const [inputString,setInputString] = useState('');

  const _inputTextEvent = (input) => {
    setInputString(input.target.value);
    console.log(inputString);
  }

  return (
    <div>
      <input type = "text" onChange={_inputTextEvent}/>
      <Button text={inputString}>Search</Button>
    </div>
  );
}

export default Input;