usernameInput = document.getElementById("username")
passwordInput = document.getElementById("password")
submitButton = document.getElementById("login-btn")
url = 'http://localhost:3000/auth/login'
function login(){
    const username = usernameInput.value;
    const password = passwordInput.value;
    sendLoginRequest(username, password);
}

async function sendLoginRequest(username, pass){
    const sendReq = {username: username, password: pass};
    try{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendReq)

    });
    
    if (!response.ok) {
        throw new Error(response.statusText);
      }
    
      data = await response.json();
      myJwtToken = data.accessToken;

      localStorage.setItem('jwtToken', myJwtToken);
      console.log(localStorage.getItem('jwtToken'));

      window.location.href = "index.html"
      alert("You've been logged in successfully")

    } catch (error) {
      console.error(error);
      alert("Error. Couldn't log in");
    } finally {
      setTimeout(() => {
        submitButton.disabled = false;
      }, 2000);
    }

}