document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });
  
  function validarFormulario() {
    // Obtener los valores ingresados por el usuario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    var dni = document.getElementById("dni").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var telefono = document.getElementById("telefono").value;
    
    // Validar que los campos no estén vacíos
    if (nombre === "" || apellido === "" || email === "" || contrasena === "" || dni === "" || fechaNacimiento === "" || telefono === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }
    
    // Validar que nombre y apellido solo contengan letras
    var letrasRegex = /^[A-Za-zÁáÉéÍíÓóÚúÜüñÑ\s]+$/;
    if (!letrasRegex.test(nombre) || !letrasRegex.test(apellido)) {
      alert("El nombre y el apellido solo deben contener letras.");
      return false;
    }
    
    // Validar el formato del correo electrónico utilizando una expresión regular
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }
    
    // Validar el formato del DNI utilizando una expresión regular
    var dniRegex = /^\d{8}[a-zA-Z]$/;
    if (!dniRegex.test(dni)) {
      alert("Por favor, ingrese un DNI válido (8 dígitos seguidos de una letra).");
      return false;
    }
    
    // Validar que la fecha de nacimiento sea una fecha válida y mayor a 10 años
    var fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(fechaNacimiento)) {
      alert("Por favor, ingrese una fecha de nacimiento válida.");
      return false;
    }
    var fechaActual = new Date();
    var fechaNac = new Date(fechaNacimiento);
    var edadMinima = 10; // Edad mínima permitida (en años)
    var diferenciaTiempo = fechaActual - fechaNac;
    var edadEnAnios = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));
    if (edadEnAnios < edadMinima) {
      alert("Debe tener al menos " + edadMinima + " años para registrarse.");
      return false;
    }
    
    // Validar que el número de teléfono tenga 9 dígitos
    var telefonoRegex = /^\d{9}$/;
    if (!telefonoRegex.test(telefono)) {
      alert("Por favor, ingrese un número de teléfono válido (9 dígitos).");
      return false;
    }
    
    // Validación exitosa
    alert("Formulario enviado correctamente.");
    return true;
  }