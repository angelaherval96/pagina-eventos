function reservar(agendaId, mensaje) {
    document.getElementById(agendaId).textContent = mensaje;
}

function info(mensajeId) {
    const mensajes = document.querySelectorAll('.mensajeinfo');
    mensajes.forEach(mensaje => mensaje.style.display = 'none');

    document.getElementById('mensaje' + mensajeId).style.display = 'flex';
}

function cerrarMensaje(mensajeId) {
    document.getElementById(mensajeId).style.display = 'none';
}
