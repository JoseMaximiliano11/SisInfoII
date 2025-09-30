
async function registrarPostulante(nombre,ci, correoElectronico, password, facultad) {
    const datosPostulante = {
        
        nombre: nombre,
        ci: ci ,
        correoElectronico: correoElectronico,      
        password: password,
        facultad: facultad  
    };
    const resultado = await conectarSupabase('POSTULANTES', 'POST', datosPostulante);
    return resultado;
}

async function obtenerPostulantes() {
    const resultado = await conectarSupabase('POSTULANTES', 'GET');
    return resultado;
}


async function verificarCorreo(correo) {
const resultado = await conectarSupabase(`POSTULANTES?correoElectronico=eq.${correo}`, 'GET');
    return resultado;
}







async function mostrarPostulantes() {
  const contenedor = document.getElementById('contenedor-postulantes');
  contenedor.innerHTML = "Cargando...";

  const postulantes = await obtenerPostulantes();

  if (!postulantes || postulantes.length === 0) {
    contenedor.innerHTML = "<p>No hay postulantes registrados.</p>";
    return;
  }

  // Construir tabla
  let tabla = `<table class="postulantes">
                  <tr>
                    <th>Nombre</th>
                    <th>CI</th>
                    <th>Correo</th>
                    <th>Facultad</th>
                  </tr>`;

  postulantes.forEach(p => {
    tabla += `<tr>
                <td>${p.nombre}</td>
                <td>${p.ci}</td>
                <td>${p.correoElectronico}</td>
                <td>${p.facultad}</td>
              </tr>`;
  });

  tabla += "</table>";
  contenedor.innerHTML = tabla;
}


async function obtenerPostulantes() {
    return await conectarSupabase('POSTULANTES', 'GET');
}


