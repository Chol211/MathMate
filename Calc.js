// Reference to the display element
const display = document.getElementById('display');

// Append numbers to the display
function appendNumber(number) {
    display.value += number;
}

// Append operators to the display
function appendOperator(operator) {
    // Prevent consecutive operators
    if (display.value && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

// Calculate the result
function calculate() {
    try {
        // Evaluate the expression
        display.value = eval(display.value);
    } catch {
        // Handle invalid expressions
        display.value = 'Error';
    }
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Backspace functionality
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate percentage
function calculatePercentage() {
    if (display.value) {
        display.value = parseFloat(display.value) / 100;
    }
}

// Calculate square root
function calculateSquareRoot() {
    if (display.value) {
        display.value = Math.sqrt(parseFloat(display.value));
    }
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace(); // Use the backspace function
    } else if (key === 'Escape') {
        clearDisplay();
    }
});