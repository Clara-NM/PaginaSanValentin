document.addEventListener("DOMContentLoaded", function () {
    const bonsai = document.getElementById("bonsai");
    const contador = document.getElementById("contador");
    const frontRain = document.querySelector('.rain.front-row');
    const backRain = document.querySelector('.rain.back-row');

    // Fecha de inicio (27 de diciembre de 2021)
    const fechaInicio = new Date(2021, 11, 27);
    const fechaActual = new Date();

    // Calcula la diferencia en días
    const diferenciaDias = Math.floor((fechaActual - fechaInicio) / (1000 * 60 * 60 * 24));

    // Mostrar el contador de días
    contador.textContent = `${diferenciaDias} días juntos`;

    // Fecha de inicio del crecimiento del bonsái (14 de febrero de 2025)
    const fechaInicioBonsai = new Date(2025, 1, 14);
    const diasDesdeInicioBonsai = Math.floor((fechaActual - fechaInicioBonsai) / (1000 * 60 * 60 * 24));

    // Determinar la imagen del bonsái basada en los días transcurridos
    let imagenNumero = Math.min(diasDesdeInicioBonsai + 1);
    bonsai.src = `bonsai${imagenNumero}.png`;

    // Función para generar la lluvia al hacer clic (excepto en checkboxes)
    function makeItRain(event) {
        if (event.target.classList.contains("tarea-checkbox")) return; // Evita la lluvia si se hace clic en un checkbox

        if (!frontRain || !backRain) return;

        // Limpiar cualquier lluvia previa
        frontRain.innerHTML = "";
        backRain.innerHTML = "";

        let increment = 0;
        let drops = "";
        let backDrops = "";

        while (increment < 100) {
            let randoHundo = Math.floor(Math.random() * 98) + 1;
            let randoFiver = Math.floor(Math.random() * 4) + 2;
            increment += randoFiver;

            drops += `<div class="drop" style="left: ${increment}%; animation-delay: 0.${randoHundo}s; animation-duration: ${0.5 + Math.random()}s;">
                        <div class="stem"></div>
                        <div class="splat"></div>
                      </div>`;

            backDrops += `<div class="drop" style="right: ${increment}%; animation-delay: 0.${randoHundo}s; animation-duration: ${0.5 + Math.random()}s;">
                            <div class="stem"></div>
                            <div class="splat"></div>
                          </div>`;
        }

        frontRain.innerHTML = drops;
        backRain.innerHTML = backDrops;

        // **Después de 5 segundos, limpiar la lluvia**
        setTimeout(() => {
            frontRain.innerHTML = "";
            backRain.innerHTML = "";
        }, 5000); // 5000 milisegundos = 5 segundos
    }

    // Escuchar clics en el cuerpo de la página para activar la lluvia
    document.body.addEventListener("click", makeItRain);
});
