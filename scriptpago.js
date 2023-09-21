window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const submitBtn = document.querySelector(".submit-btn");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitBtn.classList.add("loading");

      setTimeout(() => {
          submitBtn.classList.remove("loading");
          submitBtn.classList.add("sent");
          submitBtn.value = "Pago enviado";

          const messageContainer = document.createElement("div");
          messageContainer.classList.add("message-container");
          messageContainer.textContent = "¡Gracias por su compra!";
          form.appendChild(messageContainer);
      }, 3000);
  });
});