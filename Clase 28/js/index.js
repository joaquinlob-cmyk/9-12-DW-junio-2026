fetch('https://hp-api.onrender.com/api/characters')
.then(response => response.json())
.then(data => {
    data.forEach(character => {
        const gridContainer = document.getElementById('hp-grid')
        const newCharacter = document.createElement ('div') 
        newCharacter.classList.add('grid__card', character.house)
        newCharacter.innerHTML = `
            <img  src="${character.image}">
            <h4>${character.name}</h4>
            <span>${2026 - character.yearOfBirth}</span>
        `
        gridContainer.appendChild(newCharacter)
    })
})