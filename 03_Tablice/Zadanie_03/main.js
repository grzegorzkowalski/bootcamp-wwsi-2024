const africanAnimals = ["Zebra", "Wildebeest", "Lion", "Hippopotamus", "Gorilla", "Giraffe"];

function showArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], arr[i].length);
        sum += arr[i].length;
    }
    console.log(`Długość wszystkich znaków to: ${sum}`);
    console.log("*******************");
    for (let arrElement of arr) {
        console.log(arrElement, arrElement.length);
    }
    console.log("*******************");
    arr.forEach(function (el) {console.log(el, el.length)});
    console.log("*******************");
    console.log(arr.reduce((a,b) => a+b).length);
    console.log(arr.join("").length);
}

showArray(africanAnimals);


//Różne rodzaje funkcji strzałkowych
(() => console.log("test"))();
((a) => console.log(a))(5);
(b => console.log(b))(2);
((a,b) => console.log(a,b))(5,2);

const aib = (a,b) => console.log(a,b);
aib(2,5);