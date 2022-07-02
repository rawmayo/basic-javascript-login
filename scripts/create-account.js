import { handleRegistration } from "./imports/register.js";
import {
  validateEmptyInputs,
  checkNameErrors,
  checkUsernameErrors,
  checkPasswordErrors,
} from "./imports/validate.js";

const initialize = () => {
  if (sessionStorage.getItem("is_logged_in")) {
    location.href = "home.html";
    return;
  }
  const registerForm = document.getElementById("register-form");
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm");

  // Check if user creates a new account
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = [firstName, lastName, username, password, confirmPassword];

    // If firstname and lastname are empty, show the error
    checkNameErrors({ firstName, lastName });

    // If username is empty, show the error
    checkUsernameErrors({ username }, false);

    // If password is empty, show the error
    checkPasswordErrors({ password, confirmPassword }, false);

    // If there are still errors, do not proceed
    if (document.querySelectorAll(".input-error").length > 0) return;

    // If everything else is valid, register a new account
    document.getElementById("create").innerHTML =
      '<i class="fa-solid fa-spinner fa-pulse"></i> Please wait . . .';

    // To simulate a server delay
    setTimeout(() => {
      // Register the user
      handleRegistration(inputs);

      // Clear textbox after registration
      inputs.push(confirmPassword);
      clearTextFields(inputs);

      // Redirect to login page
      location.href = "index.html";
    }, 3000);
  });
};

const clearTextFields = (inputArray = []) => {
  inputArray.forEach((input) => (input.value = ""));
};

// Run the app
initialize();
