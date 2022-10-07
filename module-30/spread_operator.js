const max = Math.max(10, 53, 98, 87, 55, 66);
console.log(max);

const numbers = [10, 89, 78, 99, 68, 135, 996];
const max2 = Math.max(numbers);
console.log(max2);

const numbers1 = [10, 89, 78, 99, 68, 135, 996];
const max3 = Math.max(...numbers1);
console.log(max3);

// copy array
const number3 = [10, ...numbers, 66, 89, 78];
console.log(number3)
