async function registrarPostulante(nombre, ci, correoElectronico, password, facultad) {
  const datosPostulante = { nombre, ci, correoElectronico, password, facultad };
  const resp = await conectarSupabase('POSTULANTES', 'POST', datosPostulante);
  
  return resp.data;
}

async function obtenerPostulantes() {
  const resp = await conectarSupabase('POSTULANTES', 'GET');
  return resp.data;
}

async function verificarCorreo(correo) {
  const filtro = `correoElectronico=eq.${encodeURIComponent(correo)}`;
  const resp = await conectarSupabase(`POSTULANTES?${filtro}`, 'GET');
  return Array.isArray(resp.data) && resp.data.length > 0;
}
async function verificarCI(ci) {
  const filtro = `ci=eq.${encodeURIComponent(ci)}`;
  const resp = await conectarSupabase(`POSTULANTES?${filtro}`, 'GET');
  return Array.isArray(resp.data) && resp.data.length > 0;
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
