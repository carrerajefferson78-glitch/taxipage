document.addEventListener("DOMContentLoaded", function(){


const slides = document.querySelectorAll(".hero-slide");

let actual = 0;


function cambiarImagen(){


slides[actual].classList.remove("activo");


actual++;


if(actual >= slides.length){

actual = 0;

}


slides[actual].classList.add("activo");


}



if(slides.length > 1){

setInterval(cambiarImagen,5000);

}


});