//Zadanie 1

const formularz = document.querySelector("form");
console.log(formularz);

const link = document.querySelector(".e-mail a");
console.log(link);

const naglowek = document.querySelector(".about-blog__content-title");
console.log(naglowek);

const logo = document.querySelector(".navigation-menu img");
console.dir(logo);

//Zadanie 2

const galleryEl = document.querySelectorAll(".gallery-main-photo");
const tab = Array.from(galleryEl);
console.log(galleryEl, tab);


//Zadanie 4

//Pkt. 3
const pikachu = "https://assetsio.gnwcdn.com/pikachu-headline-kapitam.jpg";
console.log(logo.src);
//logo.src = pikachu;
console.log(logo.getAttribute("src"));
logo.setAttribute("src", pikachu);