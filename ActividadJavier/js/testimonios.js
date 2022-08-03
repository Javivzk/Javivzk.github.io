/* DECLARAMOS LAS VARIABLES*/
let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 2000;

/* LLAMAMOS AL EVENTLISTENER PARA REDIMENSIONAR */
window.addEventListener("resize", function(){
    let tamañoWidth = sliderInd[0].clientWidth;
})

/* ESTABLECEMOS EL TIEMPO EN EL QUE CAMBIAN LOS TESTIMONIOS */
setInterval(function tiempo(){
    slides();
}, intervalo);

/* DECLARAMOS LA FUNCION PARA LA ANIMACION DEL SLIDER*/
function slides(){
    slider.style.transform = 'translate(' + (- tamañoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';

    contador ++;

    if(contador === sliderInd.length) {
        contador = 0;
        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';            
        }, intervalo)
    }
}
