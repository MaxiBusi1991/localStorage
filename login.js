function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let localSTG = JSON.parse(localStorage.getItem("usuario")) || [];

  let userExist = localSTG.filter((x) => x.user === user);
  //   console.log(userExist);

  if (userExist.length > 0) {
    if (userExist[0].pass === pass) {
      setTimeout(() => {
        userExist[0].role === "admin"
          ? (location.href = "./homeAdmin.html")
          : (location.href = "./homeUser.html");
      }, 1000);
    }
  } else {
    location.href = "./register.html";
  }
}
