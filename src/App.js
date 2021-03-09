import logo from './logo.svg';
import './App.css';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name='kirankumar'/>
      <HoverCounter/>
    </div>
  );
}

export default App;
