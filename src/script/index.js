var indice = 1;
mostrarSlides(indice);

function avanzaSlide(n) {
    mostrarSlides(indice+=n);
}

function posicionSlide(n) {
    mostrarSlides(indice=n);
}


setInterval(function time() {
    mostrarSlides(indice+=1);
}, 5000)

function mostrarSlides(n) {
    let slides = document.getElementsByClassName('myProyects__slider');
    let circulos = document.getElementsByClassName('myProyects__circulos-circles');
    
    if (n > slides.length) {
        indice = 1;
    }
    if (n < 1) {
        indice = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (let i = 0; i < circulos.length; i++) {
        circulos[i].className = circulos[i].className.replace('active', '');
    }
    
    slides[indice - 1].style.display = 'block';
    circulos[indice -1].className += 'active';
}
