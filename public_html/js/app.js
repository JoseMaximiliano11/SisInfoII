
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
    const resultado = await conectarSupabase(`POSTULANTES?correoElectronico =eq.${correo}`, 'GET');
    return resultado;
}



