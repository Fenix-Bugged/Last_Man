document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    const form = document.getElementById('inicioSesionForm');

    if (!form) {
        console.error("Formulario de inicio de sesión (ID: inicioSesionForm) no encontrado.");
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        form.classList.add('was-validated');

        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        const nombreInput = document.getElementById('nombre').value.trim();
        const emailInput = document.getElementById('email').value.trim();

        const usuarioRegistradoJSON = localStorage.getItem('usuarioRegistrado');
        
        if (!usuarioRegistradoJSON) {
            alert('Error: No hay datos de registro guardados. Por favor, regístrate primero.');
            return;
        }

        const usuarioRegistrado = JSON.parse(usuarioRegistradoJSON);

        if (nombreInput.toLowerCase() === usuarioRegistrado.nombre.toLowerCase() && 
            emailInput.toLowerCase() === usuarioRegistrado.correo.toLowerCase()) {

            localStorage.setItem('sesionActiva', 'true');
            
            alert(`¡Bienvenido de vuelta, ${usuarioRegistrado.nombre}!`);
            
            window.location.href = 'index.html'; 
            
        } else {
            alert('Error al iniciar sesión: Nombre o Correo incorrectos.');
            form.classList.remove('was-validated');
            form.reset();
        }
    });
});