const log= console.log;

var slideIndex=0;  //controla o slide a ser mostrado


showSlides(slideIndex);


// controladores anterior/proximo
function moveSlides(n){
    showSlides(slideIndex+=n); //+1
}

// controlador de imagem pelo thumbnail
function currentSlide(n){
    showSlides(slideIndex=n);
}


// informa qual slide mostrar
function showSlides(n){
    var i;
    // poe todos os slides aqui
    var slides = document.getElementsByClassName("mySlides");

    // após o ultimo vai pro primeiro
    if(n > slides.length-1) slideIndex=0;
    // antes do primeiro vem o ultimo
    if(n<0) slideIndex=slides.length-1;

    // oculta todos os slides
    slides.forEach((slide) => {
        slide.style.display='none'
    });
    // mostra somente o ativo 
    slides[slideIndex].style.display = "block";

}
//