import logo from './logo.svg';
import {login} from './api/fitness.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={login}>API 연동</button>  
    </div>
  );
}

export default App;
