const myForm = document.querySelector(".login-form");

myForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const userCredentials = {
    email: email,
    password: password,
  };

  console.log("User Credentials:", userCredentials);
  form.reset();
}