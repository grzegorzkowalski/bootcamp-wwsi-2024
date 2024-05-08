//Zadanie 1

const getSecondMaxNumber = (arr) => {
  arr.sort((a,b) => a-b);

  return arr[arr.length - 2];
};

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ]
console.log(getSecondMaxNumber(arr1));

//Zadanie 2

const runInterval = (n = 8) => {
    let x = 0;
    const intervalID = setInterval(() => {
        if (n > x) {
            console.log("Hello");
            x++;
        }
        else {
            clearInterval(intervalID);
        }
    }, 500);
}


runInterval();