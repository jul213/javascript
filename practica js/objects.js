const person = {
    firstname: "Juan",
    lastname: "carlos",
    age: 40,
    eyeColor: "blue"
};

let text = Object.values(person);
const keys = Object.keys(person);
Object.defineProperty(person, "year", {value: 2020});
