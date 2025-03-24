function cargarPagina(url) {
    const contenido = document.getElementById('contenido');

    // Realiza la solicitud HTTP para obtener el contenido de la página solicitada
    fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar la página');
                }
                return response.text();
            })
            .then(data => {
                // Extraemos solo el contenido del cuerpo de la página para evitar recargar todo
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const bodyContent = doc.querySelector('body').innerHTML;
                contenido.innerHTML = bodyContent;
            })
            .catch(error => {
                // Si ocurre un error, mostramos el mensaje y la imagen
                contenido.innerHTML = `
                <div class="error-message">
                    <p>No se pudo cargar el contenido. Intenta nuevamente.</p>
                    <img src="images/error-image.png" alt="Error" class="error-image">
                </div>
            `;
                console.error('Error:', error);
            });
}


// Función para cambiar las imágenes automáticamente
let currentSlide = 0;
const slides = document.querySelectorAll('.image-slide'); // Selecciona todos los contenedores de las imágenes
const totalSlides = slides.length;

// Función para cambiar de imagen
function changeSlide() {
    // Remover la clase 'active' de la imagen actual
    slides[currentSlide].classList.remove('active');

    // Avanzar a la siguiente imagen (ciclo)
    currentSlide = (currentSlide + 1) % totalSlides;

    // Agregar la clase 'active' a la nueva imagen
    slides[currentSlide].classList.add('active');
}

// Iniciar el carrusel (cambiar de imagen cada 3 segundos)
setInterval(changeSlide, 3000);

// Mostrar la primera imagen al cargar la página
slides[currentSlide].classList.add('active');

/////////////////////// FUNCIÓN PARA MOSTRAR LOS DETALLES DE HERRAMIENTA
function toggleDetails() {
    var details = document.getElementById("details");
    var button = document.querySelector(".toggle-btn");

    // Verifica si el contenido está visible o no
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Muestra el contenido
        button.textContent = "Mostrar menos detalles"; // Cambia el texto del botón
    } else {
        details.style.display = "none"; // Oculta el contenido
        button.textContent = "Mostrar más detalles"; // Cambia el texto del botón
    }
}

///////////////////// PARA LAS DE JAVASCRIPT 

// Ejemplo 1: Mostrar alerta con alert()
function mostrarAlerta() {
    alert("¡Esta es una alerta!");
}
document.getElementById("alertButton").addEventListener("click", mostrarAlerta);

// Ejemplo 2: Mostrar fecha y hora actual
function mostrarFechaHora() {
    const fechaActual = new Date(); // Obtiene la fecha y hora actual
    const opciones = {
        weekday: 'long', // Día de la semana (ej: "lunes")
        year: 'numeric', // Año (ej: "2023")
        month: 'long', // Mes (ej: "octubre")
        day: 'numeric', // Día del mes (ej: "23")
        hour: '2-digit', // Hora (ej: "03")
        minute: '2-digit', // Minutos (ej: "45")
        second: '2-digit', // Segundos (ej: "12")
    };
    const fechaFormateada = fechaActual.toLocaleString('es-ES', opciones); // Formatea la fecha
    document.getElementById("fechaTexto").textContent = `Fecha y Hora: ${fechaFormateada}`;
}

// Asignar el evento al botón de fecha
document.getElementById("fechaButton").addEventListener("click", mostrarFechaHora);

// Ejemplo 3: Uso de Browser BOM - Mostrar un mensaje en el DOM en lugar de console.log
function mostrarInformacionWindow() {
    const divInfo = document.createElement("div");
    divInfo.innerHTML = `
        <h4>Información de Window</h4>
        <p>Propiedades de Window:</p>
        <ul>
            <li><strong>Location:</strong> ${window.location}</li>
            <li><strong>Navigator:</strong> ${navigator.userAgent}</li>
            <li><strong>Screen:</strong> ${screen.width}x${screen.height}</li>
        </ul>
    `;
    document.body.appendChild(divInfo);
}
document.getElementById("windowButton").addEventListener("click", mostrarInformacionWindow);

// Ejemplo 4: Manipular el DOM con getElementById()
function cambiarColorTexto() {
    document.getElementById("textToChange").style.color = "blue";
}
document.getElementById("changeColorButton").addEventListener("click", cambiarColorTexto);

// Ejemplo 5: Validar un campo numérico
function validarNumero() {
    const input = document.getElementById("numeroInput");
    const mensaje = document.getElementById("validacionMensaje");

    // Verifica si el valor es un número y no está vacío
    if (!isNaN(input.value) && input.value.trim() !== "") {
        mensaje.textContent = "¡Entrada válida!";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Por favor, ingresa un número válido.";
        mensaje.style.color = "red";
    }
}

// Asignar el evento al botón de validación
document.getElementById("validarNumeroButton").addEventListener("click", validarNumero);

// Ejemplo 6: Manejo de eventos con addEventListener()
function manejarEventoClick() {
    alert("¡Hiciste clic en el botón!");
}
document.getElementById("eventButton").addEventListener("click", manejarEventoClick);

// Ejemplo 7: Validación de formulario con mensaje de éxito
function validarFormulario(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        event.preventDefault();  // Evita el envío del formulario si no se completan los campos
        document.getElementById("formMessage").innerText = "Por favor completa todos los campos.";
    } else {
        event.preventDefault();  // Evita el envío para mostrar la alerta
        alert("¡Registro exitoso!");  // Alerta de éxito
        document.getElementById("formMessage").innerText = "¡Formulario enviado correctamente!";
    }
}
document.getElementById("contactForm").addEventListener("submit", validarFormulario);

