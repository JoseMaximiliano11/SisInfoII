document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const nombre = document.getElementById("nombre").value.trim();
  const ci = document.getElementById("ci").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (nombre === "" || ci === "" || email === "" || password === "") {
    alert("Por favor, llena todos los campos.");
    return;
  }

  alert("Registro exitoso ✅");
});
