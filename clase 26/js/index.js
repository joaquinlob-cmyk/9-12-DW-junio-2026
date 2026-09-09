const btn = document.getElementById('createElement')
const contenedor = document.getElementById('contenedorTitulo')
const newTitle = document.getElementById('title')
const selectColor = document.getElementById('titleColor')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (newTitle.value != '') {
        const newElement = document.createElement('h1')
        newElement.classList.add('titulo')
        newElement.innerText = newTitle.value
        newElement.style.color = selectColor.value
        contenedor.appendChild(newElement)
    } else {
        alert('Rellenar campo.')
    }   
})

