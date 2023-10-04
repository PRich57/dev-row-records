console.log("TEST")
// variables
const loginUsernameInput = $("#loginUsernameInput");
const loginPasswordInput = $("#loginPasswordInput")
const modalLoginSubmitDiv = $("#modal-login-submit-div");
const modalSignupSubmitDiv = $("#modal-signup-submit-div");
const signupUsernameInput = $("#signup-username-input");
const signupPasswordInput = $("#signup-password-input");
console.log("")

const loginHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const username = await loginUsernameInput.val();
    const password = await loginPasswordInput.val();
    const login = {
        username: username,
        password: password
    }
    console.log(username);
    console.log(password);
    const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login),
    })
    if (response.ok) {
        console.log("Successful POST request")
    }
}

const signupHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const username = await signupUsernameInput.val();
    const password = await signupPasswordInput.val();
    console.log(username);
    console.log(password);
    
}

modalLoginSubmitDiv.on('click', '#modal-login-submit', loginHandler);
modalSignupSubmitDiv.on('click', '#modal-signup-submit', signupHandler)


