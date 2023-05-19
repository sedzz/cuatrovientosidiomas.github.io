document.addEventListener("DOMContentLoaded", function() {
  var containers = document.querySelectorAll(".pyrContainer");
  containers.forEach(function(container) {
    container.querySelector(".clickable").addEventListener("click", toggle);
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
