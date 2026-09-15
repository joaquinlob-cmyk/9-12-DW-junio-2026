const btnAdd = document.getElementById('btn')
const input = document.getElementById('inputUrl')
const gallery = document.getElementById('imageGallery')

btnAdd.addEventListener('click', (e) => {
    e.preventDefault

    if(input.value != '') {
        const newImage = document.createElement('img')
        newImage.classList.add('imageGallery')
        newImage.src = input.value

        gallery.appendChild(newImage)
    }

})