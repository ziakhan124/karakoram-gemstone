/* =====================================
   KaraKoram Gems Website Scripts
===================================== */


document.addEventListener("DOMContentLoaded", function(){



/* Smooth scrolling */

const links = document.querySelectorAll('a[href^="#"]');


links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});





/* Card animation on scroll */


const cards = document.querySelectorAll(".card, .features div");


const observer = new IntersectionObserver(entries => {


entries.forEach(entry => {


if(entry.isIntersecting){


entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";


}


});


},


{

threshold:0.15

});




cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="all .7s ease";


observer.observe(card);


});







/* Contact Form Demo */


const form = document.querySelector(".contact-form");


if(form){


form.addEventListener("submit",function(e){


e.preventDefault();


alert(
"Thank you for contacting KaraKoram Gems. We will respond shortly."
);


form.reset();



});


}





});