//Metodo para traer los datos al form y editarlos
function buscar(id){
    lista = JSON.parse(localStorage.getItem('lista')) ?? []
    lista.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('nombre').value = value.nombre
           document.getElementById('numero').value = value.numero
        }
    })
}