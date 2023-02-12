import React, { useState } from 'react';
import "./ToDo.css"

const ToDo = () => {
    const [enteredValue, setEnteredValue] = useState("");
    const todoChanger = (event) => {
        setEnteredValue(event.target.value);
        console.log(enteredValue);
    }
    

  return (
    <div className='button'>
        <div>
        <input 
        type="text"
        id='button-input'
        onChange={todoChanger}
        value={enteredValue}
        />
        </div>
        

        <button onSubmit={todoChanger}>add Todo</button>
    </div>
  )
}

export default ToDo
