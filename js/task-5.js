const btn = document.querySelector(".change-color");
const myBody = document.querySelector("body");
const colorSpan = document.querySelector("span");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  myBody.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});