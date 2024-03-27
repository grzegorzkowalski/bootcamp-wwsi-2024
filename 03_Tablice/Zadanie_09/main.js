function multiply(array) {
    const mult = array.reduce((prev, cur) => prev * cur);
    console.log(mult);
    return mult;
}

multiply([1,2,3,4,5,6,7]); // => 5040
multiply([1,1,1,1]); // => 1
multiply([2,8,3,7]); // => 336