//Metodo para guardar
function guardar() {
  listaitem = JSON.parse(localStorage.getItem("lista")) ?? [];
  //Obtener ultimo id y guardarlo
  var id;
  listaitem.length != 0
    ? listaitem.findLast((item) => (id = item.id))
    : (id = 0);

  if (document.getElementById("id").value) {
    //Editar la matriz segun el valor
    listaitem.forEach((value) => {
      if (document.getElementById("id").value == value.id) {
        (value.nombre = document.getElementById("nombre").value),
          (value.numero = document.getElementById("numero").value);
      }
    });
    document.getElementById("id").value = "";
  } else {
    //Hacer el guardado
    var item = {
      id: id + 1,
      nombre: document.getElementById("nombre").value,
      numero: document.getElementById("numero").value,
    };
    //Agregar a la lista
    listaitem.push(item);
  }
  // Guardar en el localStorage
  localStorage.setItem("lista", JSON.stringify(listaitem));
  //Actualizar la tabla
  traerContenido();
  //Limpiar formulario
  document.getElementById("form").reset();
}
