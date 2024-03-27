function generateRandom(min, max) {
    const random = Math.floor(Math.random()*(max-min+1)+min);
    console.log(random);
    return random;
}

generateRandom(1,100);