// function square(x) {
//   return x * x;
// }

// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

//####################
// Challenge solution
//####################

// Regular arrow function
const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));

// Shorthand arrow function
const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Jerry Turcios'));
