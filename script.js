const targetDate = new Date('2024-02-11T00:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        document.getElementById('dias').innerText = '-';
        document.getElementById('horas').innerText = '-';
        document.getElementById('minutos').innerText = '-';
        document.getElementById('segundos').innerText = '-';
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText = days;
    document.getElementById('horas').innerText = hours;
    document.getElementById('minutos').innerText = minutes;
    document.getElementById('segundos').innerText = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();

document.getElementById('giftButton').addEventListener('click', function(event) {
    const link = event.target;
    const warningDiv = document.querySelector('.warning');
    const currentDate = new Date();

    if (currentDate < targetDate) {
        event.preventDefault();
        warningDiv.classList.remove('hidden');

        setTimeout(function() {
            warningDiv.classList.add('hidden');
        }, 10000);
    }
});