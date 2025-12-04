document.addEventListener('DOMContentLoaded', function() {
    const navRegistroItem = document.getElementById('nav-registrarse-item');
    const navInicioItem = document.getElementById('nav-iniciarsesion-item');
    const navCerrarItem = document.getElementById('nav-cerrarsesion-item');
    const btnCerrarSesion = document.getElementById('btn-cerrarsesion');

    function cerrarSesion(event) {
        event.preventDefault();
        localStorage.removeItem('sesionActiva');
        alert('Sesión cerrada exitosamente.');
        window.location.href = 'index.html'; 
    }

    function actualizarNavbar() {
        const sesionActiva = localStorage.getItem('sesionActiva') === 'true';

        if (navRegistroItem && navInicioItem && navCerrarItem) {
            if (sesionActiva) {

                navRegistroItem.classList.add('d-none');
                navInicioItem.classList.add('d-none');
                navCerrarItem.classList.remove('d-none');
                
                if (btnCerrarSesion) {
                    btnCerrarSesion.removeEventListener('click', cerrarSesion); 
                    btnCerrarSesion.addEventListener('click', cerrarSesion);
                }

            } else {

                navRegistroItem.classList.remove('d-none');
                navInicioItem.classList.remove('d-none');
                navCerrarItem.classList.add('d-none');
            }
        }
    }

    actualizarNavbar();
});