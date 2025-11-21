document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formInscripcion");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const curso = document.querySelector('input[name="curso"]:checked').value;

    alert(`Gracias por inscribirte, ${nombre} ${apellido}.\nCurso seleccionado: ${curso}`);
    form.reset();
  });
});
