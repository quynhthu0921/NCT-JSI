// if already logged in, redirect to home page
if (localStorage.getItem("currentUser")) {
    location.href = "../Home page/web.html";
  }
  
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (!localStorage.getItem("users")) {
      alert("No user found");
    } else {
      let users = JSON.parse(localStorage.getItem("users"));
  
      let email = document.getElementById("email");
      let password = document.getElementById("password");
  
      let existingUser = users.find(
        (web) =>
          web.email === email.value.trim() &&
          web.password === password.value.trim()
      );
  
      if (existingUser) {
        localStorage.setItem("currentUser", JSON.stringify(existingUser));
  
        location.href = "../Home page/web.html";
      } else {
        alert("Email hoặc mật khẩu không đúng");
      }
    }
  });