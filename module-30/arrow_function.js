const add = (num1, num2) => num1 + num2;
const result = add(10, 30);
console.log(result);

const newString = () => console.log('hello world');
newString();

const multiLine = (n1, n2) => {
    const add = n1 + 10;
    const mul = n2 * 3;
    const total = add + mul;
    return total;
}

const result1 = multiLine(10, 10);
console.log(result1);
