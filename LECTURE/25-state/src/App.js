import './App.css';
import Counter from './Counter';
import CounterFunction from './CounterFunction';
import SayFunction from './SayFunction';
import StatePractice1 from './StatePractice1';
import StatePractice2 from './StatePractice2';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr />

      <SayFunction/>
      <hr />

      <CounterFunction value={"Plus 1"}/>
      <hr />

      <StatePractice1></StatePractice1>
      <hr />

      <StatePractice2></StatePractice2>
      <hr />
    </div>
  );
}

export default App;
