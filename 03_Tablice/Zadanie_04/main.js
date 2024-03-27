const numbers = [1, 1000, 101, 11];

function compareNumbers(a, b) {
   return a - b;
}

const testNumbers = [4,2,3,1,5];
testNumbers.sort();
console.log(testNumbers);

numbers.sort(compareNumbers);
console.log(numbers);