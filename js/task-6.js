
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const myDiv = document.querySelector("#boxes");
const myInput = document.querySelector("input");

myInput.addEventListener("input", (event) => {
  event.target.value;
});

createBtn.addEventListener("click", () => {
  const amount = myInput.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    for (let i = 0; i < amount; i++) {
      const randomColor = getRandomHexColor();
      const div = document.createElement("div");
      div.style.backgroundColor = randomColor;
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      myDiv.appendChild(div);
    }
  }
  myInput.value = "";
}

function destroyBoxes() {
  myDiv.innerHTML = "";
  myInput.value = "";
}