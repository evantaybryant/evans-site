import React, { useState } from "react";

const CustomForm = () => {

 const [ name, setName ] = useState('')

 const sayHello = () => {
//should only say hello if user provides a name
    if(name){
        alert(`Hey there ${name}!!`)
    } else {
        alert(`Please enter your name.`)
    }
 }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <label>What is your name?</label>
      <input onChange={(e) => setName(e.currentTarget.value)} />
      <code style={{fontSize: '14px', margin: 20}}>
          { name }
      </code>
      <button onClick={sayHello}>Say Hi!</button>
    </div>
  );
};

export default CustomForm;
