import React, { useState } from 'react'

function HandlerEx2() {
  const [color, setColor] = useState("검정색");

  const changeRed=(e)=>{
    console.log(e.target.previousSibling);
    setColor("빨간색")
    e.target.previousSibling.style.color ='red';
  }

  const changeBlue=(e)=>{
    console.log(e.target.previousSibling);
    setColor("파란색")
    e.target.previousSibling.previousSibling.style.color ='blue';
  }

  return (
    <div>
      <h2>{color}</h2>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  )
}

export default HandlerEx2