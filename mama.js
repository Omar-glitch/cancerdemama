var barras = document.querySelector('.barras');
var menu = document.querySelector('.header-list');
var hola = true;
var ostia = document.querySelector('.header-titulo img:nth-child(3)');
barras.addEventListener('click', () => {
    if (hola){
        menu.style.top = '0px';
        ostia.src = 'imgCancer/SignoX.svg';
        hola = false;
    }else{
        menu.style.top = '-1000px';
        ostia.src = 'imgCancer/Barras.svg';
        hola = true;
    }
})
let posicionAnterior = window.pageYOffset;
let header = document.querySelector('#header');
window.addEventListener('scroll', () => {
    let posicionActual = window.pageYOffset;
    if(posicionAnterior > posicionActual){
        header.style.top = "0";
        if (!hola){
            menu.style.top = '0';
        }
        // menu.style.top = '0';
    }else{
        header.style.top = "-100px";
        // menu.style.top = '100px';
        if (!hola){
            menu.style.top = '100px'
        }
    }
    posicionAnterior = posicionActual;
})
let bol = document.querySelectorAll('.header-list ul li a');
bol.forEach( (element) => {
    element.addEventListener('click', () => {
       menu.style.top = "-1000px";
       ostia.src = 'imgCancer/Barras.svg';
    //    buttones.src = 'ImgHonduras/Barras.svg';
       hola = true;
    });
});