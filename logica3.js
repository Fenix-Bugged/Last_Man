document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const form = document.getElementById('registroForm');


    function guardarRegistroEnLocalStorage(datos) {
        const nombre = datos.get('nombre');
        const email = datos.get('email');

        const usuario = {
            nombre: nombre,
            correo: email,

        };

  
        localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
        
        console.log(`Usuario registrado y guardado en LocalStorage: ${nombre} (${email})`);
    }


    if (form) {
        form.addEventListener('submit', function (event) {
            
 
            if (form.checkValidity() === false) {

                event.preventDefault();
                event.stopPropagation();
            } else {

                event.preventDefault(); 
                
                const datosFormulario = new FormData(form);
                guardarRegistroEnLocalStorage(datosFormulario);
                

                alert("¡Registro exitoso! Tus datos han sido guardados para iniciar sesión.");
                form.classList.remove('was-validated'); 
                form.reset();
            }


            form.classList.add('was-validated');
        }, false);
    }
});