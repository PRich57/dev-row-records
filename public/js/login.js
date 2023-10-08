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
    Swal.fire({
      title: "Success",
      text: "WELCOME BACK",
      icon: "success",
      confirmButtonText: "Okay",
      willClose: function () {
        location.reload();
      },
    });
  } else {
    console.log(response);
    Swal.fire("Error", "Login Failed", "error");
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
      Swal.fire(
        "Success",
        "SIGN UP SUCCESSFUL : WELCOME TO DEV ROW RECORDS",
        "success"
      );
    } else {
      const responseData = await response.json();
      // alert(`Signup failed: ${responseData.message}`);
      Swal.fire("Error", `Sign Up Failed: ${responseData.message}`, "error");
    }
  } catch (error) {
    Swal.fire("Error", `Sign Up Failed: ${responseData.message}`, "error");
  }
};

modalLoginSubmitDiv.on("click", "#modal-login-submit", loginHandler);
modalSignupSubmitDiv.on("click", "#modal-signup-submit", signupHandler);

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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Signed Out",
        showConfirmButton: false,
        timer: 1500,
        willClose: function () {
          window.location.replace(`/`);
        },
      });
    } else {
      Swal.fire("Error", "Error during signout. Please try again.", "error");
    }
  } catch (error) {
    alert("Error during signout. Please try again.");
  }
};

// Adding event listener to the signout button
$("#signout-button").on("click", signoutHandler);
$("#footer-signout").on("click", signoutHandler);
