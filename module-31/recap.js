// 1. let const
let x = 10;
const y = 30;

// 2. default parameter
function add(n1, n2 = 10) {
    return n1 + n2;
}

// 3. template string
const name = 'arafat';
const newString = `hello how are you.
my name is ${name}`;

// 4. arrow function
const sum = () => console.log('hello');
const result = sum()

// 5. destructuring
const obj1 = {
    name: 'arafat',
    id: 20212203007,
    intake: 38
}
const { id } = obj1;

// 6. spread operator
const numbers1 = [10, 89, 78, 99, 68, 135, 996];
const max3 = Math.max(...numbers1);
console.log(max3);