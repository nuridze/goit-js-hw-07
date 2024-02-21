
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const userInput = event.target.value.trim();

  if (userInput === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = userInput;
  }
});