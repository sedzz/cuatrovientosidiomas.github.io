document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll("[id^='container']");
    containers.forEach(function(container) {
      container.querySelector("[id^='clickable']").addEventListener("click", toggle);
    });
  });

  function toggle() {
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    
}