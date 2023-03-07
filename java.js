let currentOperation = null;
let operand = '';
let secondOperand = '';


const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equalsBtn = document.getElementById('equals');
const screen = document.getElementById('screen');
const decimal = document.getElementById('decimal');
const numberBtns = document.querySelectorAll(['number']);

clearBtn.addEventListener('click', refreshCalc);
deleteBtn.addEventListener('click', del);
equalsBtn.addEventListener('click', solve);


//Button functions

function refreshCalc(){
  screen.textContent = '0';
  operand.textContent = '';
  secondOperand.textContent = '';
  currentOperation = null;
}

function del(){
  screen.textContent = screen.textContent
    .toString()
    .slice(0, -1);
}

window.addEventListener('keydown', function (e) {
  screen.textContent = e.key;
});
numberBtns.forEach(button => {
  button.addEventListener('click', () => button.textContent)
})
//numberBtns.addEventListener('click', (e) => {
//    let screen = e.target.value;
//});

// numberBtns.addEventListener('click', function(button) {
//   screen.textContent = button.value;
// });


function solve() {
  if (currentOperation === '÷' && screen.textContent === '0') {
    alert("It's impossible to divide by 0")
    return
  }
  secondOperand = screen.textContent;
  screen.textContent = roundToTenth(
    operate(currentOperation, operand, secondOperand));
};

function roundToTenth(num) {
  return Math.round(num * 100) / 100
}

//key functions when pressed

function keyOperator(key) {
  if(key === '/') return '÷';
  if(key === 'x' || '*') return 'x';
  if(key === '-') return '-';
  if(key === '+') return '+';
}

// Operator functions

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
	return a - b;
};


function multiply(a, b) {
  return a * b;
};

function division(a, b) {
  return a / b;
};
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch(symbol) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '÷':
      if(b === 0){
        return null;
      } else {
        return division(a. b);
      };
    default:
      return null;
  };
};