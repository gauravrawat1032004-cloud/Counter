let count = 0;

const counter = document.getElementById("count");

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

function updateCounter() {

    counter.textContent = count;

    if (count > 0) {
        counter.style.color = "#00c853";
    }
    else if (count < 0) {
        counter.style.color = "#ff1744";
    }
    else {
        counter.style.color = "#2575fc";
    }
}

increase.addEventListener("click", () => {
    count++;
    updateCounter();
});

decrease.addEventListener("click", () => {
    count--;
    updateCounter();
});

reset.addEventListener("click", () => {
    count = 0;
    updateCounter();
});

updateCounter();