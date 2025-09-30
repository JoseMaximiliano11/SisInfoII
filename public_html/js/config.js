const SUPABASE_CONFIG = {
    URL: 'https://sfgdvyagceyptwhlvukg.supabase.co',  
    API_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZ2R2eWFnY2V5cHR3aGx2dWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1OTMwMjIsImV4cCI6MjA3NDE2OTAyMn0.9idTplKHaMnw59kMRsF9URMF_-JE6ifivFZeKrzYPys'  // CAMBIA por tu API Key
};

async function conectarSupabase(tabla, metodo = 'GET', datos = null) {
    const url = `${SUPABASE_CONFIG.URL}/rest/v1/${tabla}`;
    
    const opciones = {
        method: metodo,
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_CONFIG.API_KEY,
            'Authorization': `Bearer ${SUPABASE_CONFIG.API_KEY}`,
             'Prefer': 'return=representation'
        }
    };

    if (datos) opciones.body = JSON.stringify(datos);
  try {
    const respuesta = await fetch(url, opciones);
    let resultado = null;
    try { resultado = await respuesta.json(); } catch (e) { resultado = null; }

    if (!respuesta.ok) {
    
      const error = new Error(resultado?.message || 'Error en Supabase');
      error.status = respuesta.status;
      error.server = resultado;
      throw error;
    }

    return { ok: true, status: respuesta.status, data: resultado };
  } catch (error) {
    throw error;
  }
}