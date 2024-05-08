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

//Zadanie 3
const tab = ["google", "twitter", "facebook"];

const generateLinks = (arr) => {
    return arr.map(el => "https://" + el + ".com" );
}

console.log(generateLinks(tab));

const insertLinks = (container, arr) => {
    arr.forEach(el => {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        newA.innerText = el;
        newA.href = el;
        newLi.append(newA)
        container.append(newLi);
    })
};

insertLinks(document.querySelector("#menu"), generateLinks(tab));