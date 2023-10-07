console.log("TEST");
// variables
const loginUsernameInput = $("#loginUsernameInput");
const loginPasswordInput = $("#loginPasswordInput");
const modalLoginSubmitDiv = $("#modal-login-submit-div");
const modalSignupSubmitDiv = $("#modal-signup-submit-div");
const signupUsernameInput = $("#signup-username-input");
const signupPasswordInput = $("#signup-password-input");
const signupEmailInput = $("#signup-email-input");
console.log("");

const loginHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const username = await loginUsernameInput.val();
  const password = await loginPasswordInput.val();
  const login = {
    user_name: username,
    password: password,
  };
  console.log(username);
  console.log(password);
  const response = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  });
  if (response.ok) {
    console.log("bad boy")
    $('#signupSuccess-modal-message').text("WELCOME BACK")
    $("#signupSuccess-modal").modal("show");
  } else {
    console.log(response)
    $('#signupFail-modal-message').text(`Login Failed:`)
    $("#signupFail-modal").modal("show");
  }
};

const signupHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const username = await signupUsernameInput.val();
  const password = await signupPasswordInput.val();
  const email = await signupEmailInput.val();

  // Create a payload object
  const signupData = {
    user_name: username,
    email: email,
    password: password,
  };

  // Send a POST request to the server
  try {
    const response = await fetch("/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    if (response.ok) {
      $('#signupSuccess-modal-message').text("SIGN UP SUCCESSFUL: WELCOME TO DEV ROW RECORDS")
      $("#signupSuccess-modal").modal("show");
      // Redirect user to another page or provide further actions here if needed
    } else {
      const responseData = await response.json();
      // alert(`Signup failed: ${responseData.message}`);
      $('#signupFail-modal-message').text(`Sign Up Failed: ${responseData.message}`)
      $("#signupFail-modal").modal("show");
    }
  } catch (error) {
    $('#signupFail-modal-message').text(`Server Error Come Back Later: ${responseData.message}`)
    $("#signupFail-modal").modal("show");
  }
};

modalLoginSubmitDiv.on("click", "#modal-login-submit", loginHandler);
modalSignupSubmitDiv.on("click", "#modal-signup-submit", signupHandler);

// Signout handler
const signoutHandler = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch("/api/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Redirect to homepage or show a message. For now, we'll simply reload the page.
      location.reload();
    } else {
      alert("Failed to log out. Please try again.");
    }
  } catch (error) {
    alert("Error during signout. Please try again.");
  }
};

// Adding event listener to the signout button
$("#signout-button").on("click", signoutHandler);
