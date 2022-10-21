//Metodo para eliminar
function eliminar(id) {
  lista = JSON.parse(localStorage.getItem("lista")) ?? [];
  lista = lista.filter(function (value) {
    return value.id != id;
  });
  // Guardar en el storage
  localStorage.setItem("lista", JSON.stringify(lista));
  //Obtener de nuevo la lista
  traerContenido();
}
