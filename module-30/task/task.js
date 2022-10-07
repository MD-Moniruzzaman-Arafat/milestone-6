// practice problem 1
/* 1. write an arrow function that will take 3 parameters, will multiply the parameters and will return the result. */
/* const multiply = (n1, n2, n3) => n1 * n2 * n3;
const multiplyResult = multiply(5, 6, 7);
console.log(multiplyResult); */

/* 2. write the following sentence in three lines and print the result : I am a web developer. I love to code. I love to eat biryani. */
/* const newString = `I am a web developer.
I love to code.
I love to eat biryani.`;
console.log(newString); */

/* 3. write an arrow function that will take 2 parameters : one parameter will come from you and the other parameter will be a default parameter. add these two parameters and return the result. */
/* const defaultParameter = (n1, n2 = 10) => n1 + n2;
const defaultParameterResult = defaultParameter(10);
console.log(defaultParameterResult); */


// practice problem 2
/* write  an arrow function where it will do the following :
    a) It will take an array where the array elements will be the name of your friends.
    b) check if the length of each element is even, push elements with even length to a new array and return the result.
*/
/* const friends = arr => {
    const evenFriend = [];
    for (const friend of arr) {
        if (friend.length % 2 == 0) {
            evenFriend.push(friend);
        }
    }
    return evenFriend;
}
const evenFriendResult = friends(['arafat', 'monir', 'kamal', 'rofiq', 'salman']);
console.log(evenFriendResult); */


// practice problem 3
/* write an arrow function where it will do the following:
    a) square each array element
    b) calculate the sum of the squared elements
    c) return the average of the sum of the wquared elements
*/
/* const average = arr => {
    let sum = 0;
    let avg = 0
    for (const number of arr) {
        const sqr = Math.pow(number, 2)
        sum = sum + sqr;
        avg = sum / arr.length;
    }
    return avg;
}
const squareResult = average([3, 5, 8, 9, 7, 4]);
console.log(squareResult) */

// practice problem 4
/* write an arrow function where it will do the following :
    a) it will take two array inputs
    b) combine the two array and assign them in a new array
    c) find the maximum number from the new array and return the result
*/
/* const maxNumber = (arr1, arr2) => {
    const assignArray = [...arr1, ...arr2];
    let largeNumber = 0;
    for (const number of assignArray) {
        if (number > largeNumber) {
            largeNumber = number;
        }
    }
    return largeNumber;
}
const maxNumberResult = maxNumber([10, 200, 30, 40, 50], [60, 70, 80, 90, 100]);
console.log(maxNumberResult); */
