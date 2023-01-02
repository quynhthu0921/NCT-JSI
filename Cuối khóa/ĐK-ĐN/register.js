// if already logged in, redirect to home page
if (localStorage.getItem("currentUser")) {
    location.href = "../Home page/web.html";
  }
  
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
  
    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;
  
    if (username.length < 6) {
      alert("Tên đăng nhập phải ít nhất 6 kí tự");
    } else if (password.length < 8) {
      alert("Mật khẩu phải ít nhất 8 kí tự");
    } else if (!password.match(lowerCaseLetter)) {
      alert("Mật khẩu phải chứa một chữ thường");
    } else if (!password.match(upperCaseLetter)) {
      alert("Mật khẩu phải bao gồm một kí tự in hoa");
    } else if (!password.match(numbers)) {
      alert("Mật khẩu phải chứa số hoặc ký tự đặc biệtr");
    } else {
      if (localStorage.getItem("users")) {
        let users = JSON.parse(localStorage.getItem("users"));
  
        users.push({
          email,
          password,
          username,
        });
  
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        localStorage.setItem(
          "users",
          JSON.stringify([
            {
              email,
              password,
              username,
            },
          ])
        );
      }
      location.href = "./login.html";
    }
  });
  