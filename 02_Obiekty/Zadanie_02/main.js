const color = {
    red: 100,
    green: 0,
    blue: 50
};

const referenceColor = color;

referenceColor.red = 50;
referenceColor.green = 50;

console.log(color);