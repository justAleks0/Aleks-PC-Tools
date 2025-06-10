document.addEventListener('DOMContentLoaded', () => {
    const activeKeysDisplay = document.getElementById('active-keys');
    const mousePositionDisplay = document.getElementById('mouse-position');
    const mouseClicksDisplay = document.getElementById('mouse-clicks');
    const scrollInfoDisplay = document.getElementById('scroll-info');
    const keyLogDisplay = document.getElementById('key-log');
    const typingArea = document.getElementById('typing-area');
    const charCount = document.getElementById('char-count');
    const wordCount = document.getElementById('word-count');

    // Store active keys
    const activeKeys = new Set();

    // Keyboard event handlers
    document.addEventListener('keydown', (e) => {
        if (e.target !== typingArea) {
            e.preventDefault();
        }
        activeKeys.add(e.code);
        updateKeyboardDisplay();
        
        // Log key press
        const time = new Date().toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.textContent = `${time} | ${e.key} (${e.code})`;
        keyLogDisplay.insertBefore(logEntry, keyLogDisplay.firstChild);
        
        // Keep log size manageable
        while (keyLogDisplay.children.length > 50) {
            keyLogDisplay.removeChild(keyLogDisplay.lastChild);
        }
    });

    document.addEventListener('keyup', (e) => {
        activeKeys.delete(e.code);
        updateKeyboardDisplay();
    });

    // Typing tester handlers
    typingArea.addEventListener('input', () => {
        const text = typingArea.value;
        charCount.textContent = `Characters: ${text.length}`;
        
        // Count words (split by whitespace and filter empty strings)
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = `Words: ${words.length}`;
    });

    function updateKeyboardDisplay() {
        if (activeKeys.size === 0) {
            activeKeysDisplay.textContent = 'No keys pressed';
            return;
        }

        const keyList = Array.from(activeKeys).map(key => {
            return `${key}`;
        }).join(', ');
        
        activeKeysDisplay.textContent = keyList;
    }

    // Mouse position tracking
    document.addEventListener('mousemove', (e) => {
        mousePositionDisplay.textContent = `Position: X: ${e.clientX}, Y: ${e.clientY}`;
    });

    // Mouse click tracking
    document.addEventListener('mousedown', (e) => {
        const button = ['Left', 'Middle', 'Right'][e.button];
        const time = new Date().toLocaleTimeString();
        const newClick = document.createElement('div');
        newClick.textContent = `${button} click at ${time}`;
        mouseClicksDisplay.prepend(newClick);
        
        // Keep only last 5 clicks
        while (mouseClicksDisplay.children.length > 5) {
            mouseClicksDisplay.removeChild(mouseClicksDisplay.lastChild);
        }
    });

    // Scroll tracking
    let scrollTimeout;
    document.addEventListener('wheel', (e) => {
        const direction = e.deltaY > 0 ? 'down' : 'up';
        scrollInfoDisplay.textContent = `Scrolling ${direction}`;
        
        // Clear previous timeout
        clearTimeout(scrollTimeout);
        
        // Reset scroll info after 1 second of no scrolling
        scrollTimeout = setTimeout(() => {
            scrollInfoDisplay.textContent = 'No scrolling';
        }, 1000);
    });

    // Initial scroll state
    scrollInfoDisplay.textContent = 'No scrolling';
});