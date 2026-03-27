const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  if(nombre === "" || correo === ""){
    mensaje.textContent = "Error";
  } else {
    mensaje.textContent = "Enviado";
  }
});