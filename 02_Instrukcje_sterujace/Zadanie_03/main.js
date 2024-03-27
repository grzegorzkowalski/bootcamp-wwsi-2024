const cake = "🎂";
const currentYear = new Date().getFullYear();
const birthday = 1986;
const age = currentYear - birthday;

for (let i = 0; i < age; i++) {
    console.log(`Birthday ${i+1} - ${cake} `);
}
