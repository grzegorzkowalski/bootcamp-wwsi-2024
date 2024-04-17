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


//Zadanie 3

//Pkt. 3
const pikachu = "https://assetsio.gnwcdn.com/pikachu-headline-kapitam.jpg";
console.log(logo.src);
//logo.src = pikachu;
console.log(logo.getAttribute("src"));
logo.setAttribute("src", pikachu);

//Text nagłówek pkt. 1
console.log(naglowek.innerText);
console.log(naglowek.textContent);

naglowek.textContent = "Lubie pączki."

//Pkt. 2
console.log(logo.tagName);

//Pkt. 4
console.log(formularz);
console.log(formularz.innerHTML);

//Pkt. 5
console.log(link);
console.log(link.href);
console.log(link.getAttribute("href"));
link.href = "mailto:test@wp.pl";
link.setAttribute("href", "mailto:test2@wp.pl");

//Pkt. 6
console.log(naglowek);
console.log(naglowek.className);
console.log(naglowek.classList);

const headerClass = naglowek.className;

//Pkt. 7
//naglowek.className = "";
naglowek.classList.remove(headerClass);
console.log(naglowek);

//Pkt. 8
const el = document.querySelector(".about-me-signature");
el.classList.add(headerClass);

//Zadanie 4

const newLi = document.createElement("li");
const newA = document.createElement("a");
newA.href="https://wwsi.edu.pl";
newA.innerText = "Link do uczelni";
newLi.append(newA);

const menu = document.querySelector("ul");
menu.append(newLi);
menu.style.width = "90%";

//Zadanie 5
const dot = document.querySelector(".dot").cloneNode(true);
menu.append(dot);
const copy = newLi.cloneNode(true);
copy.textContent = "Klon uczelnia";
menu.append(copy);

//Zadanie 6

const elementToDelete = document.querySelector(".about-me-title");
console.log(elementToDelete);
elementToDelete.remove();


//Style i zdarzenia

//Zadanie 1
const naglowek2 = document.querySelector(".promo-article-title");
console.log(naglowek2);

naglowek2.style.color = "deeppink";
naglowek2.style.fontSize = "64px";
naglowek2.style.textDecoration = "underline";

//Zadanie 2

const btn = document.querySelector(".form-button");
btn.addEventListener("click", function (e) {
    console.log("Nasz pierwszy event");
    formularz.classList.add("hide");

    const header = document.createElement("h3");
    header.innerText = "Wiadomość została wysłana.";
    formularz.after(header);
});

//Zadanie 3

const laos = document.querySelector(".first-article__text-title");
laos.addEventListener("mouseenter", function (e) {
    console.log(this);
    this.style.color = "magenta";
    console.log(this.parentElement.previousElementSibling);
    const imageChange = this.parentElement.previousElementSibling;
    imageChange.style.backgroundImage = `url(${pikachu})`;
});

laos.addEventListener("mouseleave", function (e) {
    console.log(this);
    this.style.color = "black";
    console.log(this.parentElement.previousElementSibling);
    const imageChange = this.parentElement.previousElementSibling;
    imageChange.style.backgroundImage = "url(./img/mainArticlePhoto.png)";
});