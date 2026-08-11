const character = document.querySelector('.character')
character.addEventListener('click', (e) => {
    const countLogo = document.createElement('div')
    countLogo.className = 'count-logo'
    let localCount = Number(localStorage.getItem("count"))
    localCount = localCount + 1
    if (localStorage.getItem("count")) {
        localStorage.setItem('count', localCount)
    } else {
        localStorage.setItem("count", 1)
    }
    document.querySelector('.click-count').textContent = localStorage.getItem('count')
})
character.addEventListener('mousedown', () => {
    document.querySelector('.character').src = './assets/char3.png'
})
character.addEventListener('mouseup', () => {
    document.querySelector('.character').src = './assets/char1.gif'
})
const skillDiv = document.querySelector('.skill-div')
skillDiv.addEventListener('click', () => {

})

// const fireflyImg = 'https://static.vecteezy.com/system/resources/thumbnails/070/959/373/small/pixel-art-firefly-with-glowing-abdomen-on-transparent-background-illustration-png.png'