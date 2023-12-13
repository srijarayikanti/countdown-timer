let isPaused = false;
let countdownInterval;

function Minutes(){
    const Input=document.getElementById('countdown-duration');
    const minutes=parseInt(Input.value,10);
    if(!isNaN(minutes) && minutes>=0){
        startCountdown(minutes,true);
        updatePlayPauseIcon();
    }
}
function startCountdown(duration, reset) {
    let countdown = document.getElementById('countdown');
    if (reset) {
        clearInterval(countdownInterval);
        isPaused = false;
    }

    let startTime = new Date().getTime();
    let endTime = startTime + duration * 60 * 1000;

    countdownInterval = setInterval(function () {
        if (isPaused) return;

        let remainingTime = endTime - new Date().getTime();
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            countdown.innerHTML = 'Countdown completed!';
            return;
        }

        let hours = Math.floor(remainingTime / (60 * 60 * 1000));
        let minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        let seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
        
        countdown.innerHTML = hours.toString().padStart(2, '0') + ':' +
                               minutes.toString().padStart(2, '0') + ':' +
                               seconds.toString().padStart(2, '0');

        
    }, 1000);
}

function togglePlayPause() {
    isPaused = !isPaused;
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    const playPauseIcon = document.getElementById('playPauseIcon');
    playPauseIcon.className = isPaused ? 'fa-solid fa-pause' : 'fa-solid fa-play';
}