document.querySelector('.click-count').textContent = localStorage.getItem('count')
let countClick = 1;
let expCount = 0;

const powerClick = document.querySelector('.power-count')
powerClick.textContent = countClick
const character = document.querySelector('.character')
character.addEventListener('click', (e) => {
    const countLogo = document.createElement('div')
    countLogo.className = 'count-logo'
    let localCount = Number(localStorage.getItem("count"))
    localCount = localCount + countClick
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

// RESET ALL
const resetCount = document.querySelector('.status-info button')
resetCount.addEventListener('click', () => {
    localStorage.removeItem('count')
    document.querySelector('.click-count').textContent = 0
    document.querySelector('.exp').textContent = 0
    countClick = 1
    powerClick.textContent = countClick
})


// SKILLS
const firefly = document.querySelector('.firefly')
const slime = document.querySelector('.slime')
const snail = document.querySelector('.snail')
const mushroom = document.querySelector('.mushroom')
const trunk = document.querySelector('.trunk')

snail.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 10) {
        localStorage.setItem('count', localStorage.getItem('count') - 10)
        countClick = countClick + 1
    }
    document.querySelector('.click-count').textContent = localStorage.getItem('count')
    powerClick.textContent = countClick
})

slime.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 50) {
        localStorage.setItem('count', localStorage.getItem('count')-50)
        countSlime();
        document.querySelector('.click-count').textContent = localStorage.getItem('count')
    }
})

mushroom.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 500) {
        localStorage.setItem('count', localStorage.getItem('count')-500)
        countMushroom();
        document.querySelector('.click-count').textContent = localStorage.getItem('count')
    }
})

trunk.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 500) {
        localStorage.setItem('count', localStorage.getItem('count')-500)
        countTrunk();
        document.querySelector('.click-count').textContent = localStorage.getItem('count')
    }
})

firefly.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 500) {
        localStorage.setItem('count', localStorage.getItem('count')-500)
        countFirefly();
        document.querySelector('.click-count').textContent = localStorage.getItem('count')
    }
})

function countSlime() {
    expCount = expCount + 1
    document.querySelector('.exp-count').textContent = expCount
    localStorage.setItem('exp', expCount)
    document.querySelector('.exp').textContent = localStorage.getItem('exp')
    setTimeout(countSlime, 1000);
}
function countMushroom() {
    expCount = expCount + 50
    document.querySelector('.exp-count').textContent = expCount
    localStorage.setItem('exp', expCount)
    document.querySelector('.exp').textContent = localStorage.getItem('exp')
    setTimeout(countMushroom, 1000);
}
function countTrunk() {
    expCount = expCount + 100
    document.querySelector('.exp-count').textContent = expCount
    localStorage.setItem('exp', expCount)
    document.querySelector('.exp').textContent = localStorage.getItem('exp')
    setTimeout(countTrunk, 1000);
}
function countFirefly() {
    expCount = expCount + 10000
    document.querySelector('.exp-count').textContent = expCount
    localStorage.setItem('exp', expCount)
    document.querySelector('.exp').textContent = localStorage.getItem('exp')
    setTimeout(countFirefly, 1000);
}

