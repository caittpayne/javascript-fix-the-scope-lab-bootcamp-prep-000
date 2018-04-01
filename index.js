var animal = 'dog'

function myAnimal() {
  return animal;
}

function yourAnimal() {
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;
  
}

var funkyFunction = function outerfunction() {
  return function innerfunction() {
    return "FUNKY!";
  }
}

console.log funkyfunction()

var theFunk = funkyFunction()



