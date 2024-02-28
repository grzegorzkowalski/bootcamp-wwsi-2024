//Jan: 30 pkt.
// Tomasz: 10 pkt.
// Michał: 16 pkt.

const students = [
    {
        name: "Jan",
        score: 30
    },
    {
        name: "Tomasz",
        score: 10
    },
    {
        name: "Michał",
        score: 16
    },
];

for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 15) {
        console.log(students[i].name + " zaliczył egzamin.");
    }
    else {
        console.log(students[i].name + " nie zaliczył egzaminu.");
    }
}