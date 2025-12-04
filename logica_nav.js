document.addEventListener('DOMContentLoaded', function() {

    const registrarseItem = document.getElementById('nav-registrarse-item');
    const iniciarSesionItem = document.getElementById('nav-iniciarsesion-item');
    const cerrarSesionItem = document.getElementById('nav-cerrarsesion-item');
    const btnCerrarSesion = document.getElementById('btn-cerrarsesion');
    

    function actualizarEstadoSesion() {

        const sesionActiva = localStorage.getItem('sesionActiva') === 'true';


        if (registrarseItem && iniciarSesionItem && cerrarSesionItem) {
            if (sesionActiva) {

                registrarseItem.classList.add('d-none');
                iniciarSesionItem.classList.add('d-none');
                cerrarSesionItem.classList.remove('d-none');
            } else {
                registrarseItem.classList.remove('d-none');
                iniciarSesionItem.classList.remove('d-none');
                cerrarSesionItem.classList.add('d-none'); 
            }
        }
    }

    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            localStorage.removeItem('sesionActiva');
            
            window.location.href = 'index.html'; 
        });
    }

    actualizarEstadoSesion();
});