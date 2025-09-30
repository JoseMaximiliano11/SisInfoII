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




