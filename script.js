$("#contactForm").on("submit", function (e) {
  e.preventDefault();
  const nombre = $("#nombre").val().trim();
  const email = $("#email").val().trim();
  const mensaje = $("#mensaje").val().trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
    this.reset();
  }
});


$(".test-btn").on("click", function () {
  const esCorrecta = $(this).data("answer") === "correct";
  alert(esCorrecta ? "¡Respuesta correcta!" : "Respuesta incorrecta. Intenta nuevamente.");
});