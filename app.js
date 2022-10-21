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
                    <button class="btn btn-sm btn-success" onclick="buscar(${
                      valor.id
                    })">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="eliminar(${
                      valor.id
                    })">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`;
  });
}
