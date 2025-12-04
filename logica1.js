const btnAbrirRegistro = document.getElementById('btnAbrirRegistro');
const modalRegistro = document.getElementById('modalRegistro');
const btnCerrarRegistro = modalRegistro.querySelector('.cerrar-btn');


const formRegistro = document.getElementById('formRegistro');
const regCorreo = document.getElementById('regCorreo'); 
const customFileInput = document.querySelector('.custom-file-input'); 


function mostrarModal(modalElement) {
    modalElement.classList.add('activo');

    formRegistro.classList.remove('was-validated'); 
}

function ocultarModal(modalElement) {
    modalElement.classList.remove('activo');
    formRegistro.reset();

    formRegistro.classList.remove('was-validated'); 
    if (customFileInput) customFileInput.value = 'Cargar Archivo...';
}


function validarFormulario(event) {
    event.preventDefault(); 
    event.stopPropagation();

    if (formRegistro.checkValidity() === false) {

        console.log("Validación fallida según Bootstrap.");
    } else {

        alert("¡Registro exitoso! (Los datos NO se están guardando en LocalStorage).");
        ocultarModal(modalRegistro);
    }

  
    formRegistro.classList.add('was-validated');
}


btnAbrirRegistro.addEventListener('click', (event) => {
    event.preventDefault(); 
    mostrarModal(modalRegistro);
});

btnCerrarRegistro.addEventListener('click', () => {
    ocultarModal(modalRegistro);
});

window.addEventListener('click', (event) => {
    if (event.target === modalRegistro) {
        ocultarModal(modalRegistro);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalRegistro.classList.contains('activo')) {
        ocultarModal(modalRegistro);
    }
});


formRegistro.addEventListener('submit', validarFormulario);


if (customFileInput) {
    customFileInput.addEventListener('click', () => {
        const fileInput = document.getElementById('file-upload-input');
        if (fileInput) fileInput.click();
    });

    const fileInput = document.getElementById('file-upload-input');
    if (fileInput) {
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                customFileInput.value = fileInput.files[0].name;
            } else {
                customFileInput.value = 'Cargar Archivo...';
            }
        });
    }
}