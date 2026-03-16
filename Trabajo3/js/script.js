const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const modoOscuro = document.getElementById("modoOscuro");

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

const btnArriba = document.getElementById("btnArriba");

const abrirModal = document.getElementById("abrirModal");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");

const botonesFiltro = document.querySelectorAll(".filtros button");
const items = document.querySelectorAll(".galeria .item");

const input = document.getElementById("inputBusqueda");
const lista = document.getElementById("sugerencias");

const datos = [
    "JavaScript",
    "Java",
    "Python",
    "PHP",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "NodeJS"
];

hamburger.addEventListener("click", function() {
    nav.classList.toggle("activo");
});

modoOscuro.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

function validarCampo() {
    const valor = nombre.value.trim();

    if (valor.length < 3) {
        mensaje.textContent = "El nombre debe tener al menos 3 caracteres.";
        mensaje.classList.remove("ok");
        return false;
    }

    mensaje.textContent = "Nombre válido.";
    mensaje.classList.add("ok");
    return true;
}

nombre.addEventListener("input", validarCampo);

formulario.addEventListener("submit", function(e) {
    if (!validarCampo()) {
        e.preventDefault();
    }
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 250) {
        btnArriba.classList.add("mostrar");
    } else {
        btnArriba.classList.remove("mostrar");
    }
});

btnArriba.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

abrirModal.addEventListener("click", function() {
    modal.classList.add("abierto");
});

cerrarModal.addEventListener("click", function() {
    modal.classList.remove("abierto");
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.remove("abierto");
    }
});

window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        modal.classList.remove("abierto");
    }
});

botonesFiltro.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const categoria = boton.dataset.categoria;

        botonesFiltro.forEach(function(btn) {
            btn.classList.remove("activo");
        });
        boton.classList.add("activo");

        items.forEach(function(item) {
            if (categoria === "todos" || item.classList.contains(categoria)) {
                item.classList.remove("oculto");
            } else {
                item.classList.add("oculto");
            }
        });
    });
});

input.addEventListener("input", function() {
    const texto = input.value.toLowerCase().trim();
    lista.innerHTML = "";

    if (texto === "") {
        return;
    }

    datos.forEach(function(item) {
        if (item.toLowerCase().includes(texto)) {
            const li = document.createElement("li");
            li.textContent = item;
            lista.appendChild(li);

            li.addEventListener("click", function() {
                input.value = item;
                lista.innerHTML = "";
            });
        }
    });
});

document.addEventListener("click", function(e) {
    if (e.target !== input) {
        lista.innerHTML = "";
    }
});