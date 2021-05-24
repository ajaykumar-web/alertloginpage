let login = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "akumar04" && password == "Wpadmin123#") {
        alert("Login Sucessfully")
    }
    else {
        alert("Please enter correct username and password.")
    }
}
document.getElementById("login-button").addEventListener("click", login);