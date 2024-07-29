import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Button from './Button';

function App() {
  return (
    <div className="App">
        <ClassComponent />
        <ClassComponent name="SeSAC 6기"/>
        <hr />

        <FunctionComponent />
        <FunctionComponent name="SeSAC 6기"/>
        <hr/>

        <Button></Button>
    </div>
  );
}

export default App;