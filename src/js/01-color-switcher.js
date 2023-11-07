function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.body;
let intervalId;

function changeBackgroundColor() {
    body.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
        if (!intervalId) {
        intervalId = setInterval(changeBackgroundColor, 1000); 
        startButton.disabled = true;
        stopButton.disabled = false;
    }
});

stopButton.addEventListener('click', () => {
        if (intervalId) {
        clearInterval(intervalId); 
        intervalId = null;
        startButton.disabled = false;
        stopButton.disabled = true;
    }
});

