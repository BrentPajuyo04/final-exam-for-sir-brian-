document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Username: " + username + " Password: " + password);
  });
  function confirmation() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    
    if (username === "admin" && password === "password") {
      redirectMyFB();
    } else {
      alert("Wrong username and password. Please try again!");
    }
  }
  
  function redirectMyFB() {
    window.location.href = "https://www.facebook.com/brent.alexandrei";
  }