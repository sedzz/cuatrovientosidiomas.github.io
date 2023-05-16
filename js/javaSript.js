

/*UNAI*/

function ocultar(){
  document.getElementById('frmClaseGratis').style.display = 'none';
}
function mostrar(){
    document.getElementById('frmClaseGratis').style.display = 'block';
}


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


/*

  function mostrarOcultarDiv(button) {
    let div = button.parentElement.nextElementSibling;
    if (div.style.display == "none") {
    div.style.display = "block";
    } else {
    div.style.display = "none";
    }
    }



*/
/*function mostrarOcultarDiv() {
  let div = this.parentElement.parentElement.nextElementSibling;
  div.classList.toggle("mostrar");
}

const buttons = document.querySelectorAll('.mostrar-ocultar-button');
buttons.forEach((button) => {
  button.addEventListener('click', mostrarOcultarDiv);
}); */


/*function mostrarOcultarDiv() {
  let div = this.parentElement.nextElementSibling;
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

const buttons = document.querySelectorAll('.mostrar-ocultar-button');
const buttonsArray = Array.from(buttons); // Convertir a un array
buttonsArray.forEach((button) => {
  button.addEventListener('click', mostrarOcultarDiv);
});*/





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
    var nameInput = document.getElementById("name");
    var dniInput = document.getElementById("dni");
    var dobInput = document.getElementById("dob");
    var emailInput = document.getElementById("e");
    var phoneInput = document.getElementById("phone");
    var languageSelect = document.getElementById("language");
    var levelSelect = document.getElementById("level");
    var experienceInputs = document.getElementsByName("experience");
    var objectiveInput = document.getElementById("objective");

    // Validar que los campos no estén vacíos
    if (
      nameInput.value === "" ||
      dniInput.value === "" ||
      dobInput.value === "" ||
      emailInput.value === "" ||
      phoneInput.value === "" ||
      languageSelect.value === "" ||
      levelSelect.value === "" ||
      !isExperienceSelected(experienceInputs) ||
      objectiveInput.value === ""
    ) {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Por favor, ingrese una dirección de correo electrónico válida.");
      return false;
    }

    return true;
  }

  function isExperienceSelected(experienceInputs) {
    for (var i = 0; i < experienceInputs.length; i++) {
      if (experienceInputs[i].checked) {
        return true;
      }
    }
    return false;
  }

