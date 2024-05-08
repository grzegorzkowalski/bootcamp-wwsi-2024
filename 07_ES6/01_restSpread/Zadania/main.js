//Zadanie 1

const namesA = ["Zosia", "Marcin", "Kamil"];
const namesB = ["Grzegorz", "Łukasz", ...namesA, "Jan", "Marcin"];

console.log(namesB);

//Zadanie 2

const getAverage = (...liczby) => {
    return liczby.reduce((prev, cur) => prev + cur)/liczby.length;
}

console.log(getAverage(12,4,5,44,66,55));


//Zadanie 3

console.log([..."Grzegorz"]);

// Zadanie 4

const fruits = ["wiśni", "czereśni"];
const vegetables = ["ziemniaki", "pomidory"];

const mix = [...fruits, ...vegetables];

console.log(mix);

// Zadanie 5

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};

const copyState = {
    ...state,
    isUserLogged: !state.isUserLogged,
    availableYears: state.availableYears.filter(el => el <= 1999)
};

console.log(copyState);
