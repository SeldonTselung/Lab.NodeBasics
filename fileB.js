//first object.

module.exports.foo = 'hello world';
module.exports.bar = 'goodbye world';

//second function
let number = 5;

module.exports = () => {
  console.log(number);
}

//bonus section
console.log('fileB is being run!');
