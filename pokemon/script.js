const pokedex = document.querySelector('#pokedex')
const btn = document.querySelector('button')

btn.addEventListener('click', async () => {
    if(pokedex.children.length >= 1) {
        document.querySelector('.pokeDiv').remove();
    }
    const randomNum = Math.floor(Math.random() * 1000) + 1
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    const result = await response.json()

    console.log(result)
    const div = document.createElement('div')
    div.className = 'pokeDiv'
    const pokeImg = document.createElement('img')
    pokeImg.className = 'poke-img'
    const pokeName = document.createElement('h2')
    pokeName.className = 'poke-h2'
    const pokeDetail = document.createElement('p')
    pokeDetail.className = 'poke-p'
    pokeDetail.innerHTML = `Base Experience: <span>${result.base_experience}</span>`
    pokeImg.src = result.sprites.front_default
    pokeName.textContent = result.species.name

    div.append(pokeName)
    div.append(pokeImg)
    div.append(pokeDetail)
    pokedex.append(div)
})