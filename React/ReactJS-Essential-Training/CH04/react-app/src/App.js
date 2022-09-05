import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App({ training_course }) {
  const [emotion, setEmotion] = useState("happy");
  //console.log(useState());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {training_course}
        </a>
        <p>my current emotion is {emotion}</p>
        <button onClick={()=>setEmotion("sad")}>SAD</button>
        <button onClick={()=>setEmotion("excited")}>Excited</button>
      </header>
    </div>
  );
}

export default App;
