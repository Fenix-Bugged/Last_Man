const btnAbrirContacto = document.getElementById('btnAbrirContacto');
const modalContacto = document.getElementById('modalContacto');
const btnCerrarContacto = document.getElementById('btnCerrarContacto');


function mostrarModalContacto() {
    modalContacto.classList.add('activo');
}

function ocultarModalContacto() {
    modalContacto.classList.remove('activo');
}


if (btnAbrirContacto) {
    btnAbrirContacto.addEventListener('click', (event) => {
        event.preventDefault(); 
        mostrarModalContacto();
    });
}


if (btnCerrarContacto) {
    btnCerrarContacto.addEventListener('click', ocultarModalContacto);
}


window.addEventListener('click', (event) => {
    if (event.target === modalContacto) {
        ocultarModalContacto();
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalContacto.classList.contains('activo')) {
        ocultarModalContacto();
    }
});