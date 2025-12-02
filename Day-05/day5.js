// Day 5 Challenge: DOM Manipulation, Events, and Async

const button = document.querySelector('#action-button'); // DOM: Select the button element
const statusDisplay = document.querySelector('#status-display'); // DOM: Select the display area

// Events: Attach an event listener for a 'click'
button.addEventListener('click', () => {
    
    // DOM Manipulation: Update the UI state immediately
    statusDisplay.textContent = 'Status: Processing...';
    button.disabled = true; // Disable the button while processing

    // Async Operation: Use setTimeout to simulate a 3-second task
    setTimeout(() => {
        
        // DOM Manipulation: Update the UI after the task finishes
        statusDisplay.textContent = 'Status: ✅ Complete!';
        button.textContent = 'Process Finished';
        
        // Reset state
        setTimeout(() => {
            statusDisplay.textContent = 'Status: Ready';
            button.textContent = 'Click to Start Process';
            button.disabled = false;
        }, 1000);

    }, 3000); // The task delay (3 seconds)
});