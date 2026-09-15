const header = document.querySelector('header')

document.addEventListener('scroll', e => {
    if (window.scrolly > 100) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})

//---------------------------------------------------//
const sliderContent = document.getElementById('slider-content')
const sliderTitle = document.getElementById('slider-title')
const sliderDescrption = document.getElementById('slider-descrption')
const sliderBack = document.getElementById('slider-back')
const sliderNext = document.getElementById('slider-next')
const slider = [
    {title: 'the 1st title' , description: 'Lorem ipsum dolor sit amet' , image: 'https://i.pinimg.com/236x/8b/46/e4/8b46e432a664901c427b690f55817c26.jpg'},
    {title: 'the 2nd title' , description: 'Lorem ipsum dolor sit amet' , image: 'https://images.pexels.com/photos/29027021/pexels-photo-29027021.jpeg?cs=srgb&dl=pexels-mostafa-ft-shots-98391-29027021.jpg&fm=jpg'},
    {title: 'the 3th title' , description: 'Lorem ipsum dolor sit amet' , image: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwNGt8ZW58MHx8MHx8fDA%3D'},
    {title: 'the 4th title' , description: 'Lorem ipsum dolor sit amet' , image: 'https://images.pexels.com/photos/15697234/pexels-photo-15697234.jpeg'},
]

sliderContent.style = `backgorund-image: url("${slider[0].image}")`
sliderTitle.innerText = slider[0],title
sliderDescrption.innerText = slider[0].description

let count = 0

sliderNext.addEventListener('click', e => {
    if  (count => slider.lenght -1){
        count = 0
    } else {
        count++
    }
    sliderContent.style = `backgorund-image: url("${slider[0].image}")`
    sliderTitle.innerText = slider[0],title
    sliderDescrption.innerText = slider[0].description

})
sliderBack.addEventListener('click', e => {
    if  (count <= 0){
        count = slider.length -1
    } else {
        count--
    }
    sliderContent.style = `backgorund-image: url("${slider[0].image}")`
    sliderTitle.innerText = slider[0],title
    sliderDescrption.innerText = slider[0].description

})