function actualizarReloj() {
    const ahora = new Date();

    // Formato de hora
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    document.querySelector('.tiempo').textContent = `${horas}:${minutos}:${segundos}`;

    // Formato de fecha
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const diaSemana = dias[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];

    document.getElementById('fecha').textContent = `${diaSemana}, ${dia} de ${mes}`;
}

// Actualizar al cargar y cada segundo
actualizarReloj();
setInterval(actualizarReloj, 1000);

// --- Comportamiento de la cruz farmacéutica ---
document.addEventListener('DOMContentLoaded', function () {
    const cross = document.getElementById('pharmacy-cross');
    if (!cross) return;

    function activateCross() {
        cross.classList.remove('blink');
        cross.classList.add('clicked');
        cross.setAttribute('aria-pressed', 'true');
        // opcional: aquí podrías disparar alguna acción
    }

    cross.addEventListener('click', activateCross);
    cross.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activateCross();
        }
    });
});
