let $= document.querySelector.bind(document)

let btnMenu = $('[data-btn-menu]')
let menu = $('[data-menu]')

btnMenu.addEventListener('click',()=>{
    menu.classList.toggle('menu__ativo')
    btnMenu.classList.toggle('cabecalho__menu-ativo')
})

let btnMenuTablet = $('[data-btn-menu-tablet]')
let menuTablet = $('[data-menu-tablet]')

btnMenuTablet.addEventListener('click', ()=>{
    menuTablet.classList.toggle('menu__lista-ativo')
    btnMenuTablet.classList.toggle('menu__tablet-ativo')
})