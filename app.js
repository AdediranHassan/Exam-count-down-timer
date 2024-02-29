document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    const countDownDate = new Date().getTime() + (23 * 24 * 60 * 60 * 1000);

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the HTML elements with the calculated values
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = '<h2>EXPIRED</h2>';
        }
    }, 1000);
});