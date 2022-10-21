//Metodo para traer los datos
function traerContenido() {
  tabla.innerHTML = ``;
  //Cambiar a JSON
  listaitem = JSON.parse(localStorage.getItem("lista")) ?? [];
  //Mostrar datos en tabla
  listaitem.forEach(function (valor, i) {
    var tabla = document.getElementById("tabla");
    //Agregar mediante inner los elementos
    tabla.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${valor.nombre}</td>
                <td>${valor.numero}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="buscar(${
                      valor.id
                    })">
                        Editar
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="eliminar(${
                      valor.id
                    })">
                        Eliminar
                    </button>
                </td>
            </tr>`;
  });
}
