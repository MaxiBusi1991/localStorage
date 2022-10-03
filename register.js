// let register = document
//   .getElementById("register")
//   .addEventListener("click", () => {
//     let user = document.getElementById("user").value;
//     let pass = document.getElementById("pass").value;
//     let validPass = document.getElementById("validPass").value;

//   });

function validarPass() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let validPass = document.getElementById("validPass").value;
  let localSTG = JSON.parse(localStorage.getItem("usuario")) || [];
  //   console.log(localSTG);
  //   console.log(typeof localSTG);
  const array = [];

  if (user === "" || pass === "" || validPass === "") {
    alert("campo vacio!");
  } else {
    for (let i = 0; i < localSTG.length; i++) {
      const usuarioEnLocalSTG = localSTG[i];
      array.push(usuarioEnLocalSTG);
    }
    array.push({ id: localSTG.length++, user, pass, role: "admin" });
    localStorage.setItem("usuario", JSON.stringify(array));
    console.log(array);
  }
}
