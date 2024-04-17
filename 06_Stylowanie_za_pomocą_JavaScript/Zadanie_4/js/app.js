//Zadanie 4

const parents = document.querySelectorAll(".parent");

for (let i = 0; i < parents.length; i++) {
    console.log(parents[i]);
    parents[i].addEventListener("mouseenter", function (event) {
        console.log(this);
        this.children[0].style.display = "block";
    });
    parents[i].addEventListener("mouseleave", function (event) {
        console.log(this);
        this.children[0].style.display = "none";
    });
}

// Array.from(parents).forEach(function (element) {
//     console.log(element);
// });