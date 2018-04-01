var animal = 'dog'

function myAnimal() {
  var animal();
  return animal;
}

function yourAnimal() {
  return myAnimal();
}

function add2(n) {
  const two = 2;
  return n + two;
  
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}

var theFunk = funkyFunction()



