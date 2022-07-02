const initialize = () => {
  if (!sessionStorage.getItem("is_logged_in")) {
    history.back();
    return;
  }

  const { firstName, lastName, id } = JSON.parse(
    sessionStorage.getItem("is_logged_in")
  );

  document.getElementById(
    "profile"
  ).textContent = `Hello ${firstName} ${lastName}, you have successfully logged in!`;

  document.getElementById("user-id").textContent = `Your Unique ID is ${id}`;

  document.getElementById("logout").onclick = () => {
    sessionStorage.removeItem("is_logged_in");
    location.href = "index.html";
    return;
  };
};

// Run the app
initialize();
