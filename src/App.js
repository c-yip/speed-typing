import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [text, setText] = useState('');
  const [time, setTime] = useState(5);
  const [gameRunning, setGameRunning] = useState(false);
  
  function handleChange(e) {
    const {value} = e.target;
    setText(value);
  }

  // calculates the word count of text state
  function calculateWordCount() {
    return text.split(/\s+\b/).length || 0; // return length without empty spaces
  }

  // decrements time every one second
  useEffect(() => {
    if (gameRunning && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) {
      setGameRunning(false);
    }
  }, [time, gameRunning]);

  function handleClick() {
    setGameRunning(true);
  }
  
  return (
    <div className="App">
      <h1 className='title'>Speed Typing</h1>
      <textarea
        name='text'
        value={text}
        onChange={handleChange}
      ></textarea>
      <h4 className='time-remaining'>Time Remaining: {time} seconds</h4>
      <button className='start-button' onClick={handleClick}>Start</button>
      <h1 className='word-count'>Word Count:</h1>
    </div>
  );
}

export default App;
