const nombreInput = document.getElementById('name');
nombreInput.addEventListener('input', validarNombre);

function validarNombre() {
  const nombre = nombreInput.value;
  const regex = /^[a-zA-Z][a-zA-Z\s]*$/;
  if (!regex.test(nombre)) {
    nombreInput.setCustomValidity('El nombre solo puede contener letras');
    nombreInput.reportValidity();
    document.querySelector('button[type="submit"]').disabled = true;
  } else {
    nombreInput.setCustomValidity('');
    document.querySelector('button[type="submit"]').disabled = false;
  }
}

  const dniInput = document.getElementById('dni');
  dniInput.addEventListener('input', validarDNI);

  function validarDNI() {
    const dni = dniInput.value.trim().toUpperCase();
    const regex = /^[0-9]{8}[A-Z]$/;
    if (!regex.test(dni)) {
      dniInput.setCustomValidity('El DNI debe contener 8 números seguidos de una letra mayúscula.');
      dniInput.reportValidity();
      document.querySelector('button[type="submit"]').disabled = true;
    } else {
      dniInput.setCustomValidity('');
      document.querySelector('button[type="submit"]').disabled= false;
    }
  }

  const fechaInput = document.getElementById('fecha');
  fechaInput.addEventListener('input', validarFecha);

  function validarFecha() {
    const fecha = new Date(fechaInput.value);
    const hoy = new Date();
    if (fecha > hoy) {
      fechaInput.setCustomValidity('La fecha debe ser menor o igual a hoy.');
      fechaInput.reportValidity();
      document.querySelector('button[type="submit"]').disabled = true;
    } else {
      fechaInput.setCustomValidity('');
      document.querySelector('button[type="submit"]').disabled = false;
    }
  }

  const emailInput = document.getElementById('email');
  emailInput.addEventListener('input', validarEmail);

  function validarEmail() {
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      emailInput.setCustomValidity('El correo electrónico debe tener un formato válido.');
      emailInput.reportValidity();
      document.querySelector('button[type="submit"]').disabled = true;
    } else {
      emailInput.setCustomValidity('');
      document.querySelector('button[type="submit"]').disabled = false;
    }
  }
  const idiomaSelect = document.getElementById('language');
  idiomaSelect.addEventListener('change', deshabilitarOpcionSinValor);
  
  const nivelSelect = document.getElementById('level');
  nivelSelect.addEventListener('change', deshabilitarOpcionSinValor);
  
  function deshabilitarOpcionSinValor() {
    const opcionSeleccionadaIdioma = idiomaSelect.value;
    const opcionSeleccionadaNivel = nivelSelect.value;
  
    // Deshabilitar la opción "Seleccionar idioma" si no tiene valor
    idiomaSelect.options[0].disabled = opcionSeleccionadaIdioma === '';
  
    // Deshabilitar la opción "Seleccionar nivel" si no tiene valor
    nivelSelect.options[0].disabled = opcionSeleccionadaNivel === '';
  }

  const telefonoInput = document.getElementById('phone');
  telefonoInput.addEventListener('input', validarTelefono);
  
  function validarTelefono() {
    const telefono = telefonoInput.value.trim();
    const regex = /^[0-9]{9}$/;
    
    if (!regex.test(telefono)) {
      telefonoInput.setCustomValidity('El número de teléfono debe contener solo números y tener una longitud de 9 dígitos.');
      telefonoInput.reportValidity();
      document.querySelector('button[type="submit"]').disabled = true;
    } else {
      telefonoInput.setCustomValidity('');
      document.querySelector('button[type="submit"]').disabled = false;
    }
  }


// Obtener referencias a los elementos del formulario
const levelSelect = document.getElementById('level');
const experienceRadios = document.getElementsByName('experience');
const objectiveTextarea = document.getElementById('objective');

// Función para validar el nivel de conocimiento
function validarNivel() {
  if (levelSelect.value === '') {
    levelSelect.classList.add('is-invalid');
  } else {
    levelSelect.classList.remove('is-invalid');
  }
}

function validarExperiencia() {
  let experienciaSeleccionada = false;
  for (let i = 0; i < experienceRadios.length; i++) {
    if (experienceRadios[i].checked) {
      experienciaSeleccionada = true;
      break;
    }
  }
  if (!experienciaSeleccionada) {
    for (let i = 0; i < experienceRadios.length; i++) {
      experienceRadios[i].classList.add('is-invalid');
    }
  } else {
    for (let i = 0; i < experienceRadios.length; i++) {
      experienceRadios[i].classList.remove('is-invalid');
    }
  }
}

// Función para validar el objetivo
function validarObjetivo() {
  if (objectiveTextarea.value.trim() === '') {
    objectiveTextarea.classList.add('is-invalid');
  } else {
    objectiveTextarea.classList.remove('is-invalid');
  }
}

// Agregar eventos de escucha para validar los campos
levelSelect.addEventListener('input', validarNivel);
for (let i = 0; i < experienceRadios.length; i++) {
  experienceRadios[i].addEventListener('input', validarExperiencia);
}
objectiveTextarea.addEventListener('input', validarObjetivo);