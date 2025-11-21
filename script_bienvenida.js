document.addEventListener("DOMContentLoaded", () => {
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let mensaje = `¡Bienvenido/a ${nombre} ${apellido}!`;
  document.getElementById("bienvenida").innerText = mensaje;
});
