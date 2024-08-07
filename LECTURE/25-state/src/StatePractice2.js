// state 실습 2
import React, { useState } from 'react'

export default function StatePractice2() {
  const [number, setNumber] = useState(0);
  const increase = ()=>{
    setNumber(number +1);
  }
  const decrease = ()=>{
    setNumber(number -2);
  }

  return (
    <div>
        {number}
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-2</button>
    </div>
  )
}
