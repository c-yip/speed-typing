import './App.css';
import React, {useState} from 'react';

function App() {
  const [text, setText] = useState('');
  
  function handleChange(e) {
    const {value} = e.target;
    setText(value);
  }

  return (
    <div className="App">
      <h1 className='title'>Speed Typing</h1>
      <textarea
        name='text'
        value={text}
        onChange={handleChange}
      ></textarea>
      <h4 className='time-remaining'>Time Remaining:</h4>
      <button className='start-button'>Start</button>
      <h1 className='word-count'>Word Count:</h1>
    </div>
  );
}

export default App;
