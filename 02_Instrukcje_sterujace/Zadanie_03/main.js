const cake = "🎂";
const year = new Date().getFullYear();
const birthday = 1986;
const age = year - birthday;

for (let i = 0; i < age; i++) {
    console.log(i+1 + " - " + cake);
}
