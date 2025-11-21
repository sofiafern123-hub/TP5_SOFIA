document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formExamen");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const materia = document.getElementById("materia").value;
    const respuesta = document.querySelector('input[name="pregunta1"]:checked').value;

    const esCorrecta = respuesta === "CSS";
    const resultado = esCorrecta ? "¡Respuesta correcta!" : "Respuesta incorrecta.";

    alert(`Gracias ${nombre} ${apellido} por rendir el examen de ${materia}.\n${resultado}`);
    form.reset();
  });
});
