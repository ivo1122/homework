const form = document.getElementById("form");
const username = document.getElementById("username");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const details = document.getElementById("details");
const checkbox = document.getElementById("checkbox");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const detailsValue = details.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Name is required");
  } else {
    setSuccessFor(username);
  }

  if (surnameValue === "") {
    setErrorFor(surname, "Last name is required");
  } else {
    setSuccessFor(surname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } 

  if(detailsValue === "") {
    setErrorFor(details, "This field is required")
  }
};

const setErrorFor = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;

};

const setSuccessFor = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  
};

btn.addEventListener("click", (e) => {
  let username = document.getElementById("username");
  username = username.value;
  localStorage.setItem("username", username);

  let surname = document.getElementById("surname");
  surname = surname.value;
  localStorage.setItem("surname", surname);

  let email = document.getElementById("email");
  email = email.value;
  localStorage.setItem("email", email);
});
