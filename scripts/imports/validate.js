export const validateEmptyInputs = (inputArray = []) => {
  if (inputArray.length < 1) return false;

  let errors = [];
  inputArray.forEach((input) => {
    if (input.value.trim().length < 1) {
      errors.push(input.getAttribute("name"));
    }
  });
  return errors;
};

export const checkNameErrors = ({ firstName, lastName }) => {
  const error = document.getElementById("name-error");
  if (firstName.value.trim().length < 1 || lastName.value.trim().length < 1) {
    firstName.classList.add("input-error");
    lastName.classList.add("input-error");
    error.classList.remove("hidden");
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Your complete name is required';
  } else if (firstName.value.length < 3 || lastName.value.length < 3) {
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Please enter your correct name';
  } else {
    firstName.classList.remove("input-error");
    lastName.classList.remove("input-error");
    error.classList.remove("add");
    error.textContent = "";
  }
};

export const checkUsernameErrors = ({ username }, useInLogin = false) => {
  const error = document.getElementById("username-error");
  if (username.value.trim().length < 1) {
    username.classList.add("input-error");
    error.classList.remove("hidden");
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Username is required';
  } else if (username.value.length < 5 && !useInLogin) {
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Username is too short';
  } else {
    username.classList.remove("input-error");
    error.classList.add("hidden");
    error.textContent = "";
  }
};

export const checkPasswordErrors = (
  { password, confirmPassword },
  useInLogin = false
) => {
  const error = document.getElementById("password-error");
  if (password.value.trim().length < 1) {
    password.classList.add("input-error");
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Password is required';
    error.classList.remove("hidden");
  } else if (password.value.length < 5 && !useInLogin) {
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Password is too short';
  } else if (
    confirmPassword !== null &&
    password.value !== confirmPassword.value &&
    !useInLogin
  ) {
    password.classList.add("input-error");
    confirmPassword.classList.add("input-error");
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Passwords do not match';
    error.classList.remove("hidden");
  } else {
    password.classList.remove("input-error");
    if (confirmPassword !== null) {
      confirmPassword.classList.remove("input-error");
    }
    error.textContent = "";
    error.classList.add("hidden");
  }
};
