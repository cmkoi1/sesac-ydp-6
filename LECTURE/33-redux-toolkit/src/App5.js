// 리덕스 실습 1
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus } from './store/money';

export default function App5() {
  const [number,setNumber] = useState(0);
  const money = useSelector((state)=>state.money.cash);
  const dispatch = useDispatch();
  const inputValue=(e)=>{
    setNumber(e.target.value);
  }
  
  return (
    <div>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {money}</h2>
      <input 
      type='number'
      value={number} 
      onChange={inputValue}/>
      <button onClick={()=>dispatch (plus(Number(number)))}>입금</button>
      <button onClick={()=>dispatch (minus(Number(number)))}>출금</button>
    </div>
  )
}
