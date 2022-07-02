import {
  validateEmptyInputs,
  checkUsernameErrors,
  checkPasswordErrors,
} from "./imports/validate.js";
import { handleLogin } from "./imports/login.js";

const initialize = () => {
  if (sessionStorage.getItem("is_logged_in")) {
    location.href = "home.html";
    return;
  }
  const loginForm = document.getElementById("login-form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  // Check if user logs in
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = [username, password];

    // Validate the inputs if they are empty or not
    const validation = validateEmptyInputs(inputs);

    // If username is empty, show the error
    checkUsernameErrors({ username }, true);

    // If password is empty, show the error
    checkPasswordErrors({ password, confirmPassword: null }, true);

    // If there are still errors, do not proceed
    if (validation.length > 0) return;

    // If everything else is valid, logged the user
    document.getElementById("login").innerHTML =
      '<i class="fa-solid fa-spinner fa-pulse"></i> Logging in . . .';
    setTimeout(() => {
      if (handleLogin(inputs)) {
        clearTextFields(inputs);
        // Redirect to home page
        location.href = "home.html";
      } else {
        clearTextFields(inputs);
        // If credentials are invalid, show error
        username.focus();
        document.getElementById("login").textContent = "Log In";
        document.querySelector(".login-error").classList.remove("hidden");
      }
    }, 3000);
  });
};

const clearTextFields = (inputArray = []) => {
  inputArray.forEach((input) => (input.value = ""));
};

// Run the app
initialize();
