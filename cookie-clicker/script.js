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
    localStorage.removeItem('exp')
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

let countSkillSnail = 0;
let countSkillSlime = 0;
let countSkillMushroom = 0;
let countSkillTrunk = 0;
let countSkillFirefly = 0;

snail.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 10) {
        localStorage.setItem('count', localStorage.getItem('count') - 10)
        countSkillSnail++
        countClick = countClick + 1
        document.querySelector('.skill-snail').classList.remove('hidden')
        document.querySelector('.count-skill-1').textContent = countSkillSnail
        document.querySelector('.click-count').textContent = localStorage.getItem('count')
        powerClick.textContent = countClick
    }
})

slime.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 100) {
        localStorage.setItem('count', localStorage.getItem('count')-100)
        countSlime();
        countSkillSlime++
        document.querySelector('.skill-slime').classList.remove('hidden')
        document.querySelector('.count-skill-2').textContent = countSkillSlime
        document.querySelector('.click-count').textContent = localStorage.getItem('count')
    }
})

mushroom.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 500) {
        localStorage.setItem('count', localStorage.getItem('count')-500)
        countMushroom();
        countSkillMushroom++
        document.querySelector('.skill-mushroom').classList.remove('hidden')
        document.querySelector('.count-skill-3').textContent = countSkillMushroom
        document.querySelector('.click-count').textContent = localStorage.getItem('count')
    }
})

trunk.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 5000) {
        localStorage.setItem('count', localStorage.getItem('count')-5000)
        countTrunk();
        countSkillTrunk++
        document.querySelector('.skill-trunk').classList.remove('hidden')
        document.querySelector('.count-skill-4').textContent = countSkillTrunk
        document.querySelector('.click-count').textContent = localStorage.getItem('count')
    }
})

firefly.addEventListener('click', () => {
    if(localStorage.getItem('count') >= 10000) {
        localStorage.setItem('count', localStorage.getItem('count')-10000)
        countFirefly();
        countSkillFirefly++
        document.querySelector('.skill-firefly').classList.remove('hidden')
        document.querySelector('.count-skill-5').textContent = countSkillFirefly
        document.querySelector('.click-count').textContent = localStorage.getItem('count')
    }
})

let lvl = 1;
let lvlScale = 1.25
let baseExp = 120;
setInterval(() => {
    if(localStorage.getItem('exp') >= baseExp) {
        localStorage.setItem('exp', localStorage.getItem('exp') - 1)
        lvl++
        baseExp = baseExp * lvlScale
        document.querySelector('.lvl').textContent = lvl
    }
}, 1000);

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
