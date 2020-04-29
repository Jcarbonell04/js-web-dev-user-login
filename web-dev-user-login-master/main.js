// User Login Assignment

// Event listener
document.getElementById("loginBtn").addEventListener("click", login);

// Event Functions
function login() {
  // Input
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Sign In Successful
  if (username == "Jcarbonell04" && password == "HarryAinlayHS") {
    alert("Sign In Successful");

    // Sign In Unsuccessful
  } else {
    alert("Sign In Unsuccessful");
    document.getElementById("output").innerHTML = "Wrong Password, Try Again!";
    document.getElementById("output").style.color = "red";
    document.getElementById("output").style.fontWeight = "bold";
  }
}
