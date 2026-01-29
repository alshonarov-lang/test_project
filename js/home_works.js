const mailInput = document.querySelector("#gmail_input");
const btn = document.querySelector("#gmail_button");
const result = document.querySelector("#gmail_result");

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

let position = 0;

const moveRight = () => {
    const maxPosition = parentBlock.clientWidth - childBlock.offsetWidth;

    if (position <= maxPosition) {
        childBlock.style.left = `${position}px`;
        position++;
        requestAnimationFrame(moveRight);
    }
};

moveRight();
