function checkFemale(name) {
    const letter = name[name.length - 1];
    return letter === "a";
}

console.log(checkFemale("Ania"));
console.log(checkFemale("Marcin"));