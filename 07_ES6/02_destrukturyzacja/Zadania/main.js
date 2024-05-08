// Zadanie 1

const weather = [ "snow", "rain", "sun" ];

const [snieg,,slonko] = weather;

console.log(snieg, slonko);

// Zadanie 2

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

const {type, autoStart} = slider;

console.log(type, autoStart);

// Zadanie 3

const [name1, name2, name3] = ["Grzegorz", "Marcin", "Karol"];

console.log(name1, name2, name3);

// Zadanie 4

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

const randomNumbers = [];

for (let i = 0; i < 6; i++) {
    randomNumbers.push(getRandomInt(0,5))
}

console.log(randomNumbers);

const [pierwsza,,,,,ostatnia] = randomNumbers;

console.log(pierwsza, ostatnia);
