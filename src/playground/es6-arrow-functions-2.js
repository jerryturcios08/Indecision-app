// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // No access to arguments in arrow functions
  // console.log(arguments);
  return a + b;
}
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Jerry',
  cities: [
    'Brentwood',
    'East Meadow',
    'Hempstead'
  ],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [
    1,
    2,
    3
  ],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
