/* LLAMAMOS AL EVENTLISTENER PASANDOLE LOS PARAMETROS QUE QUEREMOS QUE ESCUCHE */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contacto").addEventListener('submit', validarFormulario); 
  });
  /* DECLARAMOS LA FUNCION CON SUS TRES VARIABLES*/

  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var email = document.getElementById('email').value;
    if (email.length < 6) {
      alert('El email no es valido');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length < 25) {
      alert('El mensaje es demasiado corto');
      return;
    }
    this.submit();
  }
