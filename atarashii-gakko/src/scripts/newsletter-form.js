document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletterForm");
  const confirmationMessage = document.getElementById("confirmationMessage");
  const copyright = document.querySelector(".newsletter__copyright");
  const errorMessage = document.getElementById("checkboxError");

  if (form && confirmationMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Verificar se pelo menos um checkbox está marcado
      const checkboxes = form.querySelectorAll('input[type="checkbox"]');
      const isAnyChecked = Array.from(checkboxes).some(
        (checkbox) => checkbox.checked
      );

      if (!isAnyChecked) {
        // Mostrar mensagem de erro
        if (errorMessage) {
          errorMessage.style.display = "block";
          errorMessage.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      // Esconder mensagem de erro se estava visível
      if (errorMessage) {
        errorMessage.style.display = "none";
      }

      form.style.transition = "opacity 0.5s ease-out";
      form.style.opacity = "0";

      setTimeout(() => {
        form.style.display = "none";
        confirmationMessage.style.display = "block";
        confirmationMessage.style.opacity = "0";

        // Remove a borda superior do copyright
        if (copyright) {
          copyright.style.borderTop = "none";
        }

        setTimeout(() => {
          confirmationMessage.style.transition = "opacity 0.5s ease-in";
          confirmationMessage.style.opacity = "1";
        }, 50);
      }, 500);
    });

    // Esconder mensagem de erro quando um checkbox for marcado
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const isAnyChecked = Array.from(checkboxes).some((cb) => cb.checked);
        if (isAnyChecked && errorMessage) {
          errorMessage.style.display = "none";
        }
      });
    });
  }
});
