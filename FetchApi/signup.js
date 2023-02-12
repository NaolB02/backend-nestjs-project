const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordAgainInput = document.getElementById("password-again");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("signup-btn")
const url = "http://localhost:3000/auth/signup"

function validatePassword(pass, passagain) {
    return pass == passagain;
}

function signUp() {
    console.log("here");
    username = usernameInput.value;
    password = passwordInput.value;
    passwordAgain = passwordAgainInput.value;
    email = emailInput.value;

    if (!validatePassword(password, passwordAgain)) {
        alert("Password and validated password must be the same!");
    } else {
        sendRequest(username, password, email);
    }
}

async function sendRequest(username, pass, email) {
    const sendReq = { username: username, password: pass, email: email, photo: "asdfasd" };
    console.log("heyy")
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendReq)

        });

        if (!response.ok) {
            throw new Error(response.message);

        }
        window.location.href = "login.html";
        alert("Account created. Log into your account")
    } catch (error) {
        alert(error.message)
        console.error(response);
    } finally {
        setTimeout(() => {
            submitButton.disabled = false;
        }, 2000);
    }


}