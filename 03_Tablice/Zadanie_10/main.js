function getEvenAverage (tab) {
    const filtred = tab.filter(el => el % 2 === 0);
    if (!filtred.length) {
        return null;
    }
    const avg = tab.reduce((prev, cur) => prev + cur)/tab.length;

    return avg;
}

console.log(getEvenAverage([1,2,3,4,5,6,7])) //=> 4
console.log(getEvenAverage([1,1,1,1])) //=> null
console.log(getEvenAverage([2,8,3,7,4])) //=> 4.8