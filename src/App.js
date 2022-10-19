import './App.css';
import React from 'react';
import useGameData from './hooks/useGameData';

function App() {
  const {text, handleChange, gameRunning, textAreaRef, wordCount, resetGame, time, startGame} = useGameData();
  
  return (
    <div className="App">
      <h1 className='title'>Speed Typing</h1>
      <textarea
        name='text'
        value={text}
        onChange={handleChange}
        disabled={!gameRunning}
        ref={textAreaRef}
      ></textarea>
      <h4 className='time-remaining'>Time Remaining: {time} seconds</h4>
      <button disabled={gameRunning} className='start-button' onClick={time === 0 ? resetGame : startGame}>{time === 0 ? 'Reset' : 'Start'}</button>
      <h1 className='word-count'>Word Count: { time === 0 ? wordCount : ''}</h1>
    </div>
  );
}

export default App;
