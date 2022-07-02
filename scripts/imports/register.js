export const handleRegistration = (inputArray = []) => {
  const fields = {};
  for (let i = 0; i < inputArray.length; i++) {
    fields[inputArray[i].getAttribute("name")] = inputArray[i].value;
  }
  saveToLocalStorage(fields);
};

const saveToLocalStorage = ({ firstname, lastname, username, password }) => {
  const id = Math.floor(Math.random() * Date.now());

  const firstName = firstname[0].toUpperCase() + firstname.substring(1);

  const lastName = lastname[0].toUpperCase() + lastname.substring(1);

  const userData = { id, firstName, lastName, password };

  localStorage.setItem(username, JSON.stringify(userData));
};
