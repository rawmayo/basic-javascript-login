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

export const checkNameErrors = (isInvalid = false, { firstName, lastName }) => {
  const error = document.getElementById("name-error");
  if (isInvalid) {
    firstName.classList.add("input-error");
    lastName.classList.add("input-error");
    error.classList.remove("hidden");
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Your complete name is required';
    return [firstName, lastName];
  } else if (firstName.value.length < 3 || lastName.value.length < 3) {
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Please enter your correct name';
    return [firstName, lastName];
  } else {
    firstName.classList.remove("input-error");
    lastName.classList.remove("input-error");
    error.classList.remove("add");
    error.textContent = "";
    return [];
  }
};

export const checkUsernameErrors = (
  isInvalid = false,
  { username },
  useInLogin = false
) => {
  const error = document.getElementById("username-error");
  if (isInvalid) {
    username.classList.add("input-error");
    error.classList.remove("hidden");
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Username is required';
    return [username];
  } else if (username.value.length < 5 && !useInLogin) {
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Username is too short';
    return [username];
  } else {
    username.classList.remove("input-error");
    error.classList.add("hidden");
    error.textContent = "";
    return [];
  }
};

export const checkPasswordErrors = (
  isInvalid = false,
  { password },
  useInLogin = false
) => {
  const error = document.getElementById("password-error");
  if (isInvalid) {
    password.classList.add("input-error");
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Password is required';
    error.classList.remove("hidden");
    return [password];
  } else if (password.value.length < 5 && !useInLogin) {
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Password is too short';
    return [password];
  } else {
    password.classList.remove("input-error");
    error.textContent = "";
    error.classList.add("hidden");
    return [];
  }
};

export const checkPasswordsMatched = ({ password, confirmPassword }) => {
  const error = document.getElementById("confirm-error");
  if (password.value !== confirmPassword.value) {
    password.classList.add("input-error");
    confirmPassword.classList.add("input-error");
    error.innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Passwords do not match';
    error.classList.remove("hidden");
    return false;
  } else {
    password.classList.remove("input-error");
    confirmPassword.classList.remove("input-error");
    error.textContent = "";
    error.classList.add("hidden");
    return true;
  }
};
