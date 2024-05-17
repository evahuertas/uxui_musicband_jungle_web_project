// Función para abrir el modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}