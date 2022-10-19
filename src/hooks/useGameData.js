import {useState, useEffect, useRef} from 'react';

function useGameData () {
  const GAME_TIME = 3;
  
  const [text, setText] = useState('');
  const [time, setTime] = useState(GAME_TIME);
  const [gameRunning, setGameRunning] = useState(false);
  const [wordCount, setWordCount] = useState();
  const textAreaRef = useRef(null);
  
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
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  function resetGame() {
    setTime(GAME_TIME);
    setWordCount('');
    setText('');
  }

  return {text, handleChange, gameRunning, textAreaRef, wordCount, resetGame, time, startGame}
}

export default useGameData;
