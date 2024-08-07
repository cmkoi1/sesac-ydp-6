import React, { useState } from 'react'

export default function HandlerEx3() {
  const [title, setTitle] = useState("안녕하세요");
  const [btnTxt,setBtnTxt] = useState("사라져라");

  const changeTxt=(e)=>{
    if(title === "안녕하세요"){
      setTitle("");
    }else if(title === ""){
      setTitle("안녕하세요");
    }

    if(btnTxt === "사라져라"){
      setBtnTxt("보여라")
    }else if(btnTxt === "보여라"){
      setBtnTxt("사라져라")
    }
  }
  
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={changeTxt}>{btnTxt}</button>
    </div>
  )
}
