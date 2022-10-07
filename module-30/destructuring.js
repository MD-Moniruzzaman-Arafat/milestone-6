// object destructuring
const obj1 = {
    name: 'arafat',
    id: 20212203007,
    intake: 38
}
console.log(obj1.name);
const { name, id, intake } = obj1;
console.log(name);

// array destructuring
const arr = [10, 65, 98, 85];
console.log(arr[0]);
const [number1, number2, number3, number4] = arr;
console.log(number2)
