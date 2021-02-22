var p = document.getElementById("parrafo");
var s = document.getElementById("submit");

function modificarP() {
  p.textContent = "Este es mi parrafo corregido";
}

s.addEventListener("click", modificarP, true);
