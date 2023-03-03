const add = function(first, next) {
  return first + next;
};

const subtract = function(first, next) {
	return first - next;
};

const sum = function(number) {
  return number.reduce((total, currentTotal) => total + currentTotal, 0);
};

const multiply = function(number) {
  return number.reduce((total, currentTotal) => total * currentTotal);

};

const power = function(number, power) {
return number ** power;
};

const factorial = function(number, factor) {
	if (number === 0 || number === 1) {
    return 1;
  }
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number
};
