import CssModuleComponets from './CssModuleComponets';
import SassComponent from './SassComponent';
import SassPractice from './SassPractice';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <h1>React Styling</h1>
            <hr />
            <CssModuleComponets />
            <hr />
            <SassComponent />
            <hr />
            <StyledComponent />
            <hr />
            <SassPractice />
        </div>
    );
}

export default App;