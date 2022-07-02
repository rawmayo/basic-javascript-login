export const handleLogin = (inputArray = []) => {
  const fields = {};
  for (let i = 0; i < inputArray.length; i++) {
    fields[inputArray[i].getAttribute("name")] = inputArray[i].value;
  }
  return getUserCredentials(fields);
};

const getUserCredentials = ({ username, password }) => {
  const credentials = JSON.parse(localStorage.getItem(username));
  if (credentials === null) return false;
  if (credentials.password === password) {
    sessionStorage.setItem("is_logged_in", JSON.stringify(credentials));
    return true;
  }

  return false;
};
