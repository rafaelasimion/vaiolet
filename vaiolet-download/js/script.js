// BOTÃO MENU

let btnMenu = document.getElementById('btn-menu')
let indexMenu = 0

let menu = document.querySelector('.menu')
let menuText = document.querySelectorAll('.icon-text')
let menuSubtitle = document.querySelector('.subtitle')
let menuHistory = document.querySelector('.history')

btnMenu.addEventListener('click', () => {

    if (indexMenu === 0) {
        // fecha menu
        menu.style.transform = 'translate(-180px)'

        setTimeout(() => {
            menuText.forEach((item) => {
                item.style.display = 'none'
            })
            menuSubtitle.style.display = 'none'
            menuHistory.style.display = 'none'
            btnIcon.style.display = 'none'
        }, 300)

        indexMenu = 1
    }
    else if (indexMenu === 1) {
        // abre menu
        menu.style.transform = 'translate(0)'

        setTimeout(() => {
            menuText.forEach((item) => {
                item.style.display = 'block'
            })
            menuSubtitle.style.display = 'block'
            menuHistory.style.display = 'block'
            btnIcon.style.display = 'block'
        }, 100)

        indexMenu = 0
    }
})

// BOTÃO SOBRE

let btnAbout = document.getElementById('btn-about')
let aboutArea = document.querySelector('.about-area')
let aboutText = document.querySelector('.hide')
let btnIcon = document.querySelector('#btn-about .fa-solid')
let indexAbout = 0

btnAbout.addEventListener('click', () => {

    if (indexAbout === 0) {
        // abre sobre
        setTimeout(() => {
            aboutText.style.display = 'block'

            btnIcon.classList.remove('fa-chevron-up')
            btnIcon.classList.add('fa-chevron-down')
        }, 100)

        indexAbout = 1
    }
    else if (indexAbout === 1) {
        // fecha sobre
        setTimeout(() => {
            aboutText.style.display = 'none'

            btnIcon.classList.remove('fa-chevron-down')
            btnIcon.classList.add('fa-chevron-up')
        }, 100)

        indexAbout = 0
    }
})