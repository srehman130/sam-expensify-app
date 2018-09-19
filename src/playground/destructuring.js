const person = {
    name: "Sam",
    age: "24",
    location: {
        city: "Melbourne",
        state: "VIC"
    }
};

const { name = 'default-name', age } = person;
const { city, state: st } = person.location;   

// const name = person.name;
// const age = person.age;
// const city = person.location.city;

console.log(`${name} is ${age} years old and lives in ${city}, ${st}.`);

const array = ["Queen st", "Geelong", "Victoria", "Australia", "3000"];

const [ , myCity = 'Melbs' ] = array;

console.log(`I live in ${myCity}.`);

const item = ["Coffee", "$3.50", "$4.50", "$5.50"];

const [coffee, , price] = item;

console.log(`The ${coffee} is ${price}.`)