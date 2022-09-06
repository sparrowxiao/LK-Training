import logo from './logo.svg';
import './App.css';
import {useState,useEffect,useReducer} from 'react';


function App({ training_course }) {
  const [emotion, setEmotion] = useState("happy");
  const [secdEmotion,setSecdEmotion] = useState("tired");

  useEffect(()=>{
    console.log(`it is first emotion changed into ${emotion}`);
  },[emotion]);
  useEffect(()=>{
    console.log(`it is second emotion changed into ${secdEmotion}`);
  },[secdEmotion]);
  //console.log(useState());

  const [checked,setChecked] = useReducer((checked)=> !checked,false);
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
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
        <p>my current another emotion is {secdEmotion}</p>
        <button onClick={()=>setSecdEmotion("greatful")}>GreatFul</button>
        <button onClick={()=>setSecdEmotion("fine")}>Fine</button>
      </header>
      <input type="checkbox" value={checked} onChange={setChecked}/>
        <label>{checked ? "checked!":"not checked!"}</label>
    </div>
  );
}

export default App;
