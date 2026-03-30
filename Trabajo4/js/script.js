const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");

function validarNombre() {
  const nombre = nombreInput.value.trim();
  return nombre.length >= 3;
}

function validarCorreo() {
  const correo = correoInput.value.trim();
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patronCorreo.test(correo);
}

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.classList.remove("ok", "error");
  mensaje.classList.add(tipo);
}

function actualizarEstadoCampo(campo, valido) {
  if (valido) {
    campo.classList.remove("campo-error");
    campo.setAttribute("aria-invalid", "false");
  } else {
    campo.classList.add("campo-error");
    campo.setAttribute("aria-invalid", "true");
  }
}

nombreInput.addEventListener("input", function () {
  const valido = validarNombre();
  actualizarEstadoCampo(nombreInput, valido);

  if (!valido) {
    mostrarMensaje("El nombre debe tener al menos 3 caracteres.", "error");
  } else {
    mensaje.textContent = "";
    mensaje.classList.remove("ok", "error");
  }
});

correoInput.addEventListener("input", function () {
  const valido = validarCorreo();
  actualizarEstadoCampo(correoInput, valido);

  if (!valido && correoInput.value.trim() !== "") {
    mostrarMensaje("Ingresa un correo electrónico válido.", "error");
  } else if (valido) {
    mensaje.textContent = "";
    mensaje.classList.remove("ok", "error");
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombreValido = validarNombre();
  const correoValido = validarCorreo();

  actualizarEstadoCampo(nombreInput, nombreValido);
  actualizarEstadoCampo(correoInput, correoValido);

  if (!nombreValido && !correoValido) {
    mostrarMensaje("Completa correctamente nombre y correo para enviar.", "error");
  } else if (!nombreValido) {
    mostrarMensaje("El nombre debe tener al menos 3 caracteres.", "error");
  } else if (!correoValido) {
    mostrarMensaje("Ingresa un correo electrónico válido.", "error");
  } else {
    mostrarMensaje("Formulario enviado correctamente.", "ok");
    form.reset();
    nombreInput.setAttribute("aria-invalid", "false");
    correoInput.setAttribute("aria-invalid", "false");
  }
});