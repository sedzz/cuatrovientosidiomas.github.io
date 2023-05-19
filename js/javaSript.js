

/*UNAI*/


function mostrarClaseGratis(){
      document.getElementById('frmClaseGratis').style.display = 'block';
}
function ocultarClaseGratis(){
  document.getElementById('frmClaseGratis').style.display = 'none';
}

function reloj() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  document.getElementById("hour").textContent = hour;
  document.getElementById("minute").textContent = minute;
  document.getElementById("second").textContent = second;
}

setInterval(reloj, 1000);

/* TERMINÓ LO DE UNAI */



document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });
  
  function mostrarOcultarTexto(boton) {
    var textoElement = boton.nextElementSibling;
    
    if (textoElement.style.display === "none") {
      textoElement.style.display = "block";
      boton.innerHTML = "Ocultar Información";
    } else {
      textoElement.style.display = "none";
      boton.innerHTML = "Mostrar más información";
    }
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    var botones = document.getElementsByClassName("botonMostrar");
  
    for (var i = 0; i < botones.length; i++) {
      var boton = botones[i];
      
      boton.addEventListener("click", function() {
        mostrarOcultarTexto(this);
      });
    }
  });
  var enlaceDescarga = document.getElementById('descargarPDF');

  enlaceDescarga.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = this.href;
  });


    /*VALIDACIÓN FORMULARIO*/
  
    window.addEventListener("DOMContentLoaded", function() {
      var form = document.getElementById("myForm");
      form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        if (validateForm()) {
          form.submit(); // Envía el formulario si pasa la validación
        }
      });
    });
  
    function validateForm() {
      // Obtener los valores de los campos
      var name = document.getElementById("name").value;
      var dni = document.getElementById("dni").value;
      var dob = document.getElementById("dob").value;
      var email = document.getElementById("e").value;
      var phone = document.getElementById("phone").value;
      var language = document.getElementById("language").value;
      var level = document.getElementById("level").value;
      var experience = document.querySelector('input[name="experience"]:checked');
      var objective = document.getElementById("objective").value;
      
      // Validar que todos los campos estén completos
      if (name === "" || dni === "" || dob === "" || email === "" || phone === "" || language === "" || level === "" || experience === null || objective === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
      }
      
      // Validar que el nombre solo tenga letras y un mínimo de 3 letras
      var nameRegex = /^[a-zA-Z]{3,}$/;
      if (!name.match(nameRegex)) {
        alert("Por favor, ingresa un nombre válido con un mínimo de 3 letras y sin caracteres especiales.");
        return false;
      }
      
      // Validar que el formato del DNI sea 8 números y una letra
      var dniRegex = /^\d{8}[a-zA-Z]$/;
      if (!dni.match(dniRegex)) {
        alert("Por favor, ingresa un DNI válido en el formato 12345678X.");
        return false;
      }
      
      // Validar que la fecha de nacimiento no sea superior a hoy ni hoy tampoco
      var today = new Date();
      var selectedDate = new Date(dob);
      if (selectedDate >= today) {
        alert("Por favor, ingresa una fecha de nacimiento válida.");
        return false;
      }
      
      // Validar el formato del correo electrónico (mismo código del ejemplo anterior)
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailRegex)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
      }
      
      // Validar que el teléfono tenga 9 números
      var phoneRegex = /^\d{9}$/;
      if (!phone.match(phoneRegex)) {
        alert("Por favor, ingresa un número de teléfono válido de 9 dígitos.");
        return false;
      }
      
      // Validar que se haya seleccionado un idioma de interés (mismo código del ejemplo anterior)
      if (language === "") {
        alert("Por favor, selecciona un idioma de interés.");
        return false;
      }
      
      // Validar que se haya seleccionado un nivel de conocimiento (mismo código del ejemplo anterior)
      if (level === "") {
        alert("Por favor, selecciona un nivel de conocimiento.");
        return false;
      }
      
      // Si todos los campos son válidos, el formulario se puede enviar
      return true;
    }
