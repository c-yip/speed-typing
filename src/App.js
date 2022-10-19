import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const GAME_TIME = 15;
  
  const [text, setText] = useState('');
  const [time, setTime] = useState(GAME_TIME);
  const [gameRunning, setGameRunning] = useState(false);
  const [wordCount, setWordCount] = useState();
  
  function handleChange(e) {
    const {value} = e.target;
    setText(value);
  }

  // calculates the word count of text state
  function calculateWordCount() {
    const words = text.trim().split(" "); // removes spaces
    return words.filter(word => word !== "").length; // removes blank textarea
  }

  useEffect(() => {
    // decrements time every one second
    if (gameRunning && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) {
      setGameRunning(false);
      setWordCount(calculateWordCount());
    }
  }, [time, gameRunning, wordCount]);

  function startGame() {
    setText('');
    setGameRunning(true);
  }

  function resetGame() {
    setTime(GAME_TIME);
    setGameRunning(false);
    setWordCount('');
    setText('');
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
      <button className='start-button' onClick={time === 0 ? resetGame : startGame}>{time === 0 ? 'Reset' : 'Start'}</button>
      <h1 className='word-count'>Word Count: { time === 0 ? wordCount : ''}</h1>
    </div>
  );
}

export default App;
