document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletterForm");
  const confirmationMessage = document.getElementById("confirmationMessage");
  const copyright = document.querySelector(".newsletter__copyright");

  if (form && confirmationMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

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
  }
});
