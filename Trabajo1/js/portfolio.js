document.addEventListener("DOMContentLoaded", function () {
  var tabletBreakpoint = 768;

  document.body.classList.add("js-enabled");

  var menuToggle = document.getElementById("menu-toggle");
  var mainMenu = document.getElementById("main-menu");
  var themeToggle = document.getElementById("theme-toggle");
  var scrollTopButton = document.getElementById("scroll-top");

  var filterButtons = document.querySelectorAll(".filter-btn");
  var projectCards = document.querySelectorAll(".project-card");

  var contactForm = document.getElementById("contact-form");
  var contactNombre = document.getElementById("nombre");
  var contactEmail = document.getElementById("email");
  var contactMensaje = document.getElementById("mensaje-contacto");
  var contactFeedback = document.getElementById("contact-feedback");

  var quoteService = document.getElementById("service-type");
  var quoteDelivery = document.getElementById("delivery-speed");
  var quoteExtras = document.querySelectorAll(".quote-extra");
  var quoteTerms = document.getElementById("quote-terms");
  var quoteTotal = document.getElementById("quote-total");
  var quoteFeedback = document.getElementById("quote-feedback");
  var serviceError = document.getElementById("service-error");
  var termsError = document.getElementById("terms-error");

  function updateThemeButtonLabel() {
    if (!themeToggle) {
      return;
    }

    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "Modo claro";
    } else {
      themeToggle.textContent = "Modo oscuro";
    }
  }

  function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function setFieldState(field, errorElement, isValid, errorMessage) {
    if (isValid) {
      field.classList.remove("input-error");
      field.classList.add("input-ok");
      errorElement.textContent = "";
      return true;
    }

    field.classList.remove("input-ok");
    field.classList.add("input-error");
    errorElement.textContent = errorMessage;
    return false;
  }

  function formatCurrency(value) {
    return "$" + value.toFixed(0);
  }

  function calculateQuote() {
    var baseService = Number(quoteService.value || 0);
    var deliveryFactor = Number(quoteDelivery.value || 1);
    var extrasTotal = 0;

    quoteExtras.forEach(function (extra) {
      if (extra.checked) {
        extrasTotal += Number(extra.value);
      }
    });

    var total = baseService * deliveryFactor + extrasTotal;
    quoteTotal.textContent = formatCurrency(total);
    return total;
  }

  function validateQuote() {
    var isServiceValid = quoteService.value !== "";
    var isTermsValid = quoteTerms.checked;

    if (isServiceValid) {
      quoteService.classList.remove("input-error");
      quoteService.classList.add("input-ok");
      serviceError.textContent = "";
    } else {
      quoteService.classList.remove("input-ok");
      quoteService.classList.add("input-error");
      serviceError.textContent = "Selecciona un servicio para calcular la cotización.";
    }

    if (isTermsValid) {
      termsError.textContent = "";
    } else {
      termsError.textContent = "Debes aceptar los términos para continuar.";
    }

    quoteFeedback.classList.remove("ok", "error");

    if (isServiceValid && isTermsValid) {
      quoteFeedback.classList.add("ok");
      quoteFeedback.textContent = "Cotización lista. Puedes usar este total como referencia inicial.";
      return true;
    }

    quoteFeedback.classList.add("error");
    quoteFeedback.textContent = "Completa los campos requeridos para validar la cotización.";
    return false;
  }

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mainMenu.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < tabletBreakpoint) {
          mainMenu.classList.remove("menu-open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  if (themeToggle) {
    var storedTheme = localStorage.getItem("portfolio-theme");

    if (storedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }

    updateThemeButtonLabel();

    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("portfolio-theme", "dark");
      } else {
        localStorage.setItem("portfolio-theme", "light");
      }

      updateThemeButtonLabel();
    });
  }

  if (scrollTopButton) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollTopButton.classList.add("visible");
      } else {
        scrollTopButton.classList.remove("visible");
      }
    });

    scrollTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.dataset.filter;

        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");

        projectCards.forEach(function (card) {
          var categories = (card.dataset.category || "").split(" ");
          var isVisible = filter === "all" || categories.includes(filter);

          if (isVisible) {
            card.classList.remove("is-hidden");
          } else {
            card.classList.add("is-hidden");
          }
        });
      });
    });
  }

  if (contactForm && contactNombre && contactEmail && contactMensaje && contactFeedback) {
    var nombreError = document.getElementById("nombre-error");
    var emailError = document.getElementById("email-error");
    var mensajeError = document.getElementById("mensaje-contacto-error");

    function validateContactForm() {
      var isNombreValid = setFieldState(
        contactNombre,
        nombreError,
        contactNombre.value.trim().length >= 3,
        "Ingresa al menos 3 caracteres en el nombre."
      );

      var isEmailValid = setFieldState(
        contactEmail,
        emailError,
        validateEmail(contactEmail.value.trim()),
        "Ingresa un correo electrónico válido."
      );

      var isMensajeValid = setFieldState(
        contactMensaje,
        mensajeError,
        contactMensaje.value.trim().length >= 15,
        "El mensaje debe tener al menos 15 caracteres."
      );

      return isNombreValid && isEmailValid && isMensajeValid;
    }

    [contactNombre, contactEmail, contactMensaje].forEach(function (field) {
      field.addEventListener("input", function () {
        validateContactForm();
      });
    });

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var isFormValid = validateContactForm();
      contactFeedback.classList.remove("ok", "error");

      if (isFormValid) {
        contactFeedback.classList.add("ok");
        contactFeedback.textContent = "Mensaje enviado correctamente. Gracias por contactarte.";
        contactForm.reset();

        [contactNombre, contactEmail, contactMensaje].forEach(function (field) {
          field.classList.remove("input-ok", "input-error");
        });

        nombreError.textContent = "";
        emailError.textContent = "";
        mensajeError.textContent = "";
      } else {
        contactFeedback.classList.add("error");
        contactFeedback.textContent = "Revisa los campos marcados y corrige los errores.";
      }
    });
  }

  if (quoteService && quoteDelivery && quoteTotal && quoteFeedback && quoteTerms) {
    function refreshQuote(shouldValidate) {
      calculateQuote();

      if (shouldValidate) {
        validateQuote();
      }
    }

    quoteService.addEventListener("change", function () {
      refreshQuote(true);
    });

    quoteDelivery.addEventListener("change", function () {
      refreshQuote(true);
    });

    quoteTerms.addEventListener("change", function () {
      refreshQuote(true);
    });

    quoteExtras.forEach(function (extra) {
      extra.addEventListener("change", function () {
        refreshQuote(true);
      });
    });

    refreshQuote(false);
  }
});
