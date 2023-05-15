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

  function mostrarOcultarTexto() {
    var textoElement = document.getElementById("textoMostrado");
    var botonElement = document.getElementById("botonMostrar");
      if (textoElement.style.display === "none") {
      textoElement.style.display = "block";
      botonElement.innerHTML = "Ocultar Texto";
    } else {
      textoElement.style.display = "none";
      botonElement.innerHTML = "Mostrar Texto";
    }
  }

  function mostrarOcultarDiv(button) {
    let div = button.parentElement.nextElementSibling;
    if (div.style.display == "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

  var rotation= 0;

  function rotate(){

  rotation = (rotation+60 > 360) ? 0 : rotation+60;

  document.getElementById("text").className = "rotation"+rotation;
  }


  window.setInterval("rotate()", 1000);

  var enlaceDescarga = document.getElementById('descargarPDF');

  enlaceDescarga.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = this.href;
  });