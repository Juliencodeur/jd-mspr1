document.addEventListener("DOMContentLoaded", function () {
    // Set the end date
    let countdownDate = new Date("Jul 18, 2025 12:00:00").getTime();

    // Update countdown every second
    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        // Time calculation for months, days, hours, minutes and seconds
        let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // Approximation des mois
        let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("months").innerHTML = months;
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is complete
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Événement terminé";
        }
    }, 1000);
});
    