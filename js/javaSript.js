
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


  /* ÁLEX*/
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
/*Álex fin*/ 
/*UNAI*/
  function mostrarClaseGratis() {
    document.getElementById('frmClaseGratis').style.display = 'block';
  }
  function ocultarClaseGratis() {
    document.getElementById('frmClaseGratis').style.display = 'none';
  }
document.getElementById("botonUA").addEventListener("click", mostrarClaseGratis);
document.getElementById("botonUB").addEventListener("click", ocultarClaseGratis);
