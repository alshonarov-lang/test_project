const mailInput = document.querySelector("#gmail_input");
const btn = document.querySelector("#gmail_button");
const result = document.querySelector("#gmail_result");

const regex = /^[^\s@]+@[^\s@]+\.[a-z]{2,4}$/i;

btn.addEventListener("click", () => {
    const email = mailInput.value;

    if (regex.test(email)) {
        result.textContent = " Email is valid";
        result.style.color = "green";
    } else {
        result.textContent = " Email is not valid";
        result.style.color = "red";
    }
});

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let x = 0;
let y = 0;
let speed = 7;
let direction = 0;

const moveSquare = () => {
    const maxX = parentBlock.clientWidth - childBlock.offsetWidth;
    const maxY = parentBlock.clientHeight - childBlock.offsetHeight;

    if (direction === 0) {
        x += speed;
        if (x >= maxX) direction = 1;
    } else if (direction === 1) {
        y += speed;
        if (y >= maxY) direction = 2;
    } else if (direction === 2) {
        x -= speed;
        if (x <= 0) direction = 3;
    } else if (direction === 3) {
        y -= speed;
        if (y <= 0) direction = 0;
    }

    childBlock.style.left = `${x}px`;
    childBlock.style.top = `${y}px`;

    requestAnimationFrame(moveSquare);
};

moveSquare();

const secondsBlock = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let timerId = null;
startBtn.addEventListener("click", () => {
    if (timerId !== null) return;

    timerId = setInterval(() => {
        seconds++;
        secondsBlock.textContent = seconds;
    }, 1000);
});
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
});
resetBtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;

    seconds = 0;
    secondsBlock.textContent = seconds;
});
