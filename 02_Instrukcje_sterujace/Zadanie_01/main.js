//Jan: 30 points.
// Thomas: 10 points.
// Michael: 16 points.

const examResults = [
    {
        name: "Jan",
        score: 30
    },
    {
        name: "Thomas",
        score: 10
    },
    {
        name: "Michael",
        score: 16
    },
];

for (let i = 0; i < examResults.length; i++) {
    if (examResults[i].score >= 15) {
        console.log(`${examResults[i].name} passed exam with score ${examResults[i].score}.`);
    }
    else {
        console.log(`${examResults[i].name} didn't pass exam with score ${examResults[i].score}.`);
    }
}