document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= 16; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = ('Imagen Galeria')
        console.log(imagen)

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}


function mostrarImagen(i) {
    // Generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //agreagr al html
    const body = document.querySelector('body')
    body.appendChild(modal)
}

function cerrarModal () {
    const modal = document.querySelector('.modal')

    modal?.remove()
}

