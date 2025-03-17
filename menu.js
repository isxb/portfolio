let botaoMenu = document.getElementById('botao-abrir')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

botaoMenu.addEventListener('click', ()=>{
    menu.classList.add('menu-abrir')
})


menu.addEventListener('click', ()=>{
    menu.classList.remove('menu-abrir')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('menu-abrir')
})