let localSTG = JSON.parse(localStorage.getItem("usuario"));

const tBody = document.getElementById("tBody");
tBody.innerHTML = localSTG.map(
  (usuarioLocalSTG) => `<tr>
    <th scope="row"> ${usuarioLocalSTG.id} </th>
    <td> ${usuarioLocalSTG.user} </td>
    <td>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-success" data-bs-toggle="modal"
            data-bs-target="#modalModificar${usuarioLocalSTG.id} ">
            Modificar
        </button>
    
        <!-- Modal -->
        <div class="modal fade" id="modalModificar${usuarioLocalSTG.id}" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modificar usuario</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" class="form">
                            <label for="">Usuario</label>
                            <input type="text" value="${usuarioLocalSTG.user}" id="userModal${usuarioLocalSTG.id}">
                            <label for="">Contraseña</label>
                            <input type="password" value="${usuarioLocalSTG.pass}" id="passModal${usuarioLocalSTG.id}">
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onclick="modificarUsuario(${usuarioLocalSTG.id})">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- boton eliminar -->
    
         <!-- Button trigger modal -->
        <button type="button" class="btn btn-danger" data-bs-toggle="modal"
            data-bs-target="#exampleModal2${usuarioLocalSTG.id}">
            Eliminar
        </button>
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModal2${usuarioLocalSTG.id}" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">¿Estas Seguro de que
                            quieres eliminar este Usuario?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">NO</button>
                        <button type="button" class="btn btn-primary" onclick="borrarUsuario(${usuarioLocalSTG.id})">SI</button>
                    </div>
                </div>
            </div>
        </div>
    </td>
    <td>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-warning" data-bs-toggle="modal"
            data-bs-target="#exampleModal3${usuarioLocalSTG.id}">
            Cambiar Role
        </button>
    
        <!-- Modal -->
        <div class="modal fade" id="exampleModal3${usuarioLocalSTG.id}" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">¿Estas Seguro de Cambiar
                            de Role (Role Actual: ${usuarioLocalSTG.role}) a este usuario?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">NO</button>
                        <button type="button" class="btn btn-primary" onclick="cambiarRole(${usuarioLocalSTG.id})">SI</button>
                    </div>
                </div>
            </div>
        </div>
    </td>
    </tr>`
);

//FUNCIONES

const modificarUsuario = (id) => {
  let userModal = document.getElementById(`userModal${id}`).value;
  let userPass = document.getElementById(`userPass${id}`).value;

  console.log(id);
  console.log(userModal);
  console.log(userPass);
};
