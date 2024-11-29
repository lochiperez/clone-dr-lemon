const buttonHeader = document.getElementById('button-menu-header')
const menuHeader = document.getElementById('menu-header')
const subMenu = document.getElementById('sub-menu-productos')
// const productos = document.getElementById('productos')
const arrow = document.getElementById('arrow')

buttonHeader.addEventListener('mouseover', ()=>{
    menuHeader.classList.add('mostrar-menu')
    // menuHeader.classList.remove('is-hidden')
    menuHeader.classList.remove('menu-class')
})

menuHeader.addEventListener('mouseleave', ()=>{
    menuHeader.classList.remove('mostrar-menu')
    // menuHeader.classList.add('is-hidden')
    menuHeader.classList.add('menu-class')
})

arrow.addEventListener('click', ()=>{
    if(subMenu.classList.contains('block')){
    arrow.style.transform = 'rotate(0deg)'
    arrow.style.transition = 'all ease-in-out .5s'
    subMenu.classList.remove('block')
    } else {
        subMenu.classList.add('block')
        arrow.style.transform = 'rotate(180deg)'
        arrow.style.transition = 'all ease-in-out .5s'
    }
})

// productos.addEventListener('')