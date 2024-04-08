import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import './App.css'; 

function App() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const countWords = () => {
        const words = text.trim().split(/\s+/);
        setWordCount(words.length);
    };

    const countCharacters = () => {
        setCharCount(text.length);
    };

    const convertToUppercase = () => {
        setText(text.toUpperCase());
    };

    const convertToLowercase = () => {
        setText(text.toLowerCase());
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <div className="head" style={{ textAlign: 'center' }}>
                <p>Our Typing Platform</p>
            </div>
            <div className="toggle-dark-mode">
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                        label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    />
                </FormGroup>
            </div>

            <div className="text-container" style={{ textAlign: 'center' }}>
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Enter your text here..."
                    rows={10}
                    
                />
            </div>
            <div className="button-container">
                <button onClick={countWords}>Count Words</button>
                <button onClick={countCharacters}>Count Characters</button>
                <button onClick={convertToUppercase}>Convert to Uppercase</button>
                <button onClick={convertToLowercase}>Convert to Lowercase</button>
            </div>
           
            <div className="result-container">
                <p>Total Words: {wordCount}</p>
                <p>Total Characters: {charCount}</p>
            </div>
        </div>
    );
}

export default App;
