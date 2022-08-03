/* DECLARACION DE CONSTANTES */
const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

/* REGISTRAMOS UN EVENTLISTENER QUE ESCUCHE EL EVENTO DE HACER CLICK EN EL MENU*/
hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
/* REGISTREAMOS UN EVENTLISTENER QUE ESCUCHE EL EVENTO DE HACER CLICK Y ABRE O CIERRA*/
window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})