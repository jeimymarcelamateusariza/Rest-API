let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //Revisar si hay campos vacios
    const camposVacios = [mesa, hora].some(campo => campo === '');

    if (camposVacios) {
        const existeAlerta = document.querySelector('.invalid-feedback')
        if (!existeAlerta) {
            const alerta = document.createElement('DIV');
            alerta.classList.add('d-block', 'text-center', 'invalid-feedback');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove()
            }, 3000);
        } return;
    }
    //Asignar datos del pedido al cliente
    cliente = {...cliente, mesa, hora};

    console.log(cliente);

    //Ocultar Modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    //Mostrar las secciones
    mostrarSecciones();
}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');
    console.log(seccionesOcultas);
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}