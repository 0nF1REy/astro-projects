document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletterForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  if (form && confirmationMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      form.style.transition = "opacity 0.5s ease-out";
      form.style.opacity = "0";

      setTimeout(() => {
        form.style.display = "none";
        confirmationMessage.style.display = "block";
        confirmationMessage.style.opacity = "0";

        setTimeout(() => {
          confirmationMessage.style.transition = "opacity 0.5s ease-in";
          confirmationMessage.style.opacity = "1";
        }, 50);
      }, 500);
    });
  }
});
