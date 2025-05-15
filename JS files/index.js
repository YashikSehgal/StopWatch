let timer; // Variable to hold the timer
let seconds = 0; // Counter for seconds
let isRunning = false; // To track if the stopwatch is running

// Get elements from the HTML
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const getTimeBtn = document.getElementById("getTimeBtn");
const clearTimeBtn = document.getElementById("clearTimeBtn");
const savedTimesContainer = document.getElementById("savedTimes");

// Function to update the display with the current time
const updateDisplay = () => {
    const minutes = Math.floor(seconds / 60); // Calculate minutes
    const secs = seconds % 60; // Calculate remaining seconds
    timeDisplay.innerText = `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format and display time
};

// Start button functionality
startBtn.addEventListener("click", () => {
    if (!isRunning) { // Check if the stopwatch is not running
        isRunning = true; // Set running state to true
        timer = setInterval(() => { // Start the timer
            seconds++; // Increase seconds
            updateDisplay(); // Update the displayed time
        }, 1000); // Update every second
    }
});

// Stop button functionality
stopBtn.addEventListener("click", () => {
    clearInterval(timer); // Stop the timer
    isRunning = false; // Set running state to false
});

// Reset button functionality
resetBtn.addEventListener("click", () => {
    clearInterval(timer); // Stop the timer
    isRunning = false; // Set running state to false
    seconds = 0; // Reset seconds
    updateDisplay(); // Update the display to show 0:00
    savedTimesContainer.innerHTML = ""; // Clear saved times
});


// Get Time button functionality
getTimeBtn.addEventListener("click", () => {
    const timeEntry = document.createElement("div"); // Create a new div for saved time
    timeEntry.classList.add("time-entry"); // Add class for styling

    // Create a span for the time display
    const timeDisplaySpan = document.createElement("span");
    timeDisplaySpan.innerText = timeDisplay.innerText; // Set the text to the current time

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn"); // Add class for styling

    // Add event listener to the delete button
    deleteBtn.addEventListener("click", () => {
        savedTimesContainer.removeChild(timeEntry); // Remove the time entry when delete button is clicked
    });

    // Append time display and delete button to the time entry
    timeEntry.appendChild(timeDisplaySpan);
    timeEntry.appendChild(deleteBtn);
    savedTimesContainer.appendChild(timeEntry); // Add the new time entry to the saved times
});




// Clear Time button functionality
clearTimeBtn.addEventListener("click", () => {
    savedTimesContainer.innerHTML = ""; // Clear all saved times
});
