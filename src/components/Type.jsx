import React, { useState } from 'react';

const Type = () => {
     // List of random words for the typing test
     const words = ["hello", "world", "openai", "typing", "react", "javascript", "developer"];

     // State to track user input, current word index, typing speed, and accuracy
     const [input, setInput] = useState('');
     const [wordIndex, setWordIndex] = useState(0);
     const [startTime, setStartTime] = useState(null);
     const [endTime, setEndTime] = useState(null);
     const [typingSpeed, setTypingSpeed] = useState(0);
     const [accuracy, setAccuracy] = useState(0);

     // Function to handle user input change
     const handleInputChange = (e) => {
          const inputValue = e.target.value;
          setInput(inputValue);

          // If user starts typing, set start time
          if (!startTime) {
               setStartTime(new Date());
          }

          // Check if user has completed the word
          if (inputValue.endsWith(' ') && wordIndex < words.length - 1) {
               setWordIndex(wordIndex + 1);
               setInput('');
          }

          // If user has completed the test, calculate typing speed and accuracy
          if (wordIndex === words.length - 1 && inputValue.trim() === words[wordIndex]) {
               setEndTime(new Date());
               const elapsedTime = (endTime - startTime) / 1000; // in seconds
               const typedWords = input.trim().split(' ').length;
               const speed = Math.round((typedWords / elapsedTime) * 60); // words per minute
               const accuracy = Math.round((typedWords / words.length) * 100); // in percentage
               setTypingSpeed(speed);
               setAccuracy(accuracy);
          }
     };

     return (
          <div>
               <p>Type the following:</p>
               <div>{words.map((word, index) => <span key={index} className={index === wordIndex ? 'current-word' : ''}>{word} </span>)}</div>
               <input type="text" value={input} onChange={handleInputChange} />
               <p>Typing Speed: {typingSpeed} WPM</p>
               <p>Accuracy: {accuracy}%</p>
          </div>
     );
};

export default Type;
