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
    //ahora voy a validar los usuarios, para que no guarde dos usuarios con el mismo nombre. Usando un filter. Con esto yo obtengo otro array, que puede ser con la misma o menor cantidad de elementos que el que estoy filtrando. 1ro creo una nueva variable para guardar los elementos filtrados, 2do filtro lo que necesito, 3ro lo hago con una funcion.
    let userExist = localSTG.filter((x) => x.user === user);
    // let passExist = localSTG.filter((x) => x.pass === pass);
    //console.log(userExist);
    //console.log(passExist);

    if (userExist.length === 0 || passExist.length === 0) {
      if (pass === validPass) {
        array.push({ id: localSTG.length++, user, pass, role: "user" });
        localStorage.setItem("usuario", JSON.stringify(array));
      } else {
        alert("las contraseñas no son iguales");
      }
    }
    // console.log(array);
  }
}
