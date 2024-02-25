const targetDate = new Date('2024-04-16T00:00:00').getTime();
let timeRemaining = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds

function updateCountdown() {
    timeRemaining -= 1000; // Subtract 1 second

    if (timeRemaining < 0) {
        timeRemaining = 10 * 24 * 60 * 60 * 1000; // This one is to Reset to 10 days in milliseconds
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

// Initial call and update every second
updateCountdown();
setInterval(updateCountdown, 1000);