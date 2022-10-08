const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((previous, current) => {
    return previous + current
}, 0)

const result1 = arr.reduce((previous, current) => previous + current, 0)
console.log(result)
console.log(result1)