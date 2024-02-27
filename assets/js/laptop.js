let targetDate = localStorage.getItem('targetDate');
let timeRemaining = parseInt(localStorage.getItem('timeRemaining')) || 10 * 24 * 60 * 60 * 1000; // This one is 10 days in milliseconds

if (!targetDate) {
    targetDate = Date.now(); // Set the target date to the current timestamp if it's not already set
    localStorage.setItem('targetDate', targetDate);
} else {
    targetDate = parseInt(targetDate);
}

function updateCountdown() {
    timeRemaining -= 1000; // Subtract 1 second

    if (timeRemaining < 0) {
        timeRemaining = 10 * 24 * 60 * 60 * 1000; // Reset to 10 days in milliseconds
        localStorage.setItem('timeRemaining', timeRemaining);
    } else {
        localStorage.setItem('timeRemaining', timeRemaining);
    }

    const finalDate = new Date(targetDate);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function updateEndDate() {
    const currentDate = Date.now();
    const endDate = new Date(currentDate + timeRemaining);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const endDateString = endDate.toLocaleDateString('en-US', options);
    document.getElementById('end-date').textContent = `The Giveaway ends on ${endDateString}`;
}


// Initial call and update every second
updateCountdown();
updateEndDate();
setInterval(() => {
    updateCountdown();
    updateEndDate();
}, 1000);
