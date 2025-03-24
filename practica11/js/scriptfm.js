// Función para mostrar un mensaje al hacer clic en los botones
function showMessage(message) {
    alert(message);
}

// Efecto de desplazamiento suave para las secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Función para abrir el modal con la imagen ampliada
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
