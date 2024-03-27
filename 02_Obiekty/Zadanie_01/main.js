const car = {
    type: "sedan",
    color: "green",
    engine: 2.5
};

const carDescription = car.type + " " + car.color + " " + car.engine;
console.log(carDescription);

const carDescription2 = `${car.type} ${car.color} ${car.engine}`;
console.log(carDescription2);