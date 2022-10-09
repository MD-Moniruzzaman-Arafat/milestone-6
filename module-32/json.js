const obj = { id: 1, name: 'arafat', job: 'web developer' };
console.log(obj);
const stringifyed = JSON.stringify(obj);
console.log(stringifyed);
const parsed = JSON.parse(stringifyed);
console.log(parsed);