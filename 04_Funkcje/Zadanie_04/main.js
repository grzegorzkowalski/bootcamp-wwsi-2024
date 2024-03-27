function checkPalindrom(txt) {
    return txt === txt.split("").reverse().join("");
}

console.log(checkPalindrom("kajak"));
console.log(checkPalindrom("pies"));