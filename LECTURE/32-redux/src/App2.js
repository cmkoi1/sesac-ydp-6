import './styles/Box.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App2() {
  // 7. useSelector 훅 사용하여, redux store에서 상태 읽어오기
  // redux상태에서 number값을 선택
  const number0 = useSelector((state)=>state);
  const number = useSelector((state)=>state.number);
  console.log(number0); // {number: 100}
  console.log(number); //100
  
  return (
    <div className="App">
      <h1>React Redux Ex2</h1>
      <h2>Redux를 사용!</h2>
      <h2>number : {number}</h2>
      <Box1/>
    </div>
  );
}


const Box1 = ()=>{
  return(
    <div className="Box">
      <h2>Box1 : </h2>
      <Box2/>
    </div>
  );
}
const Box2 = ()=>{
  return(
    <div className="Box2">
      <h2>Box2 : </h2>
      <Box3/>
    </div>
  );
}
const Box3 = ()=>{
  return(
    <div className="Box3">
      <h2>Box3 : </h2>
      <Box4/>
    </div>
  );
}
const Box4 = ()=>{
  // 8. useDispatch 훅 사용하여 액션을 디스패치하는 함수 가져오기
  // 이 함수를 사용하여 상태 업데이트!
  // redux상태에서 number값을 선택하고, 액션을 디스패치 할 준비
  const number = useSelector((state)=>state.number);
  const dispatch = useDispatch();
  return(
    <div className="Box4">
      <h2>Box4 : </h2>
      <button onClick={()=>dispatch({type:'counter/PLUS'})}>+1</button>
      <button onClick={()=>dispatch({type:'counter/MINUS'})}>-1</button>
    </div>
  );
}

export default App2;