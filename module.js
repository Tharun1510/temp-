
const sayHi = (name) => {
    console.log(`Hello ${name}`);
}
const person = {
    name: 'Susan',
    age: 25
}
module.exports = sayHi;
module.exports.person = person;
module.exports.items = ['item1', 'item2'];