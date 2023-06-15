const add = function(x, y) {
	let add = x + y;
  return add;
  
};

const subtract = function(x, y) {
	let sub = x - y;
  return sub;
};

const sum = function([...n]) {
  let total = n.reduce((x, y) => x + y, 0);
  return total;
};

const multiply = function([...n]) {
  let total = n.reduce((x, y) => x * y, 1);
  return total;
};

const power = function(x, y) {
  let product = 1;
  for (let i = 0; i < y; i++) {
    product *= x;
  };
  return product;
};

const factorial = function(x) {
  let product = 1;
  for (let i = 0; i < x; i++) {
    product *= (i + 1);
  };
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
