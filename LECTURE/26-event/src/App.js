import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandlerEx from './HandlerEx';
import HandlerEx2 from './HandlerEx2';
import HandlerEx3 from './HandlerEx3';
import SyntheticEvent from './SyntheticEvent';

function App() {
  return (
    <div className="App">
      <SyntheticEvent/>
      <hr />

      <ClassBind/>
      <hr />

      <Counter/>
      <hr />

      <HandlerEx/>
      <hr />

      <HandlerEx2/>
      <hr />

      <HandlerEx3/>

    </div>
  );
}

export default App;
