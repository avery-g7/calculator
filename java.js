let currentOperation = null;
let operand = '';
let secondOperand = '';
let refreshScreen = false;

const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equalsBtn = document.getElementById('equals');
const screen = document.getElementById('screen');
const decimal = document.getElementById('decimal');
const numberBtns = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.op');

clearBtn.addEventListener('click', refreshCalc);
deleteBtn.addEventListener('click', del);
equalsBtn.addEventListener('click', solve);
window.addEventListener('keydown', keyInput);
decimal.addEventListener('click', getDecimal);

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

numberBtns.forEach(button => {
  button.addEventListener('click', () => getNumber(button.textContent));
})

function getNumber(num) {
  if(screen.textContent === '0' || refreshScreen) {
    refresh();
  };
  screen.textContent += num;
};

opButtons.forEach(button => {
  button.addEventListener('click', () => getOperator(button.textContent));
})

function getOperator(op) {
  if (currentOperation !== null) solve();
  operand = screen.textContent;
  currentOperation = op;
  refreshScreen = true;
};

function solve() {
  if (currentOperation === null || refreshScreen) return;
  if (currentOperation === '÷' || '/' && screen.textContent === '0') {
    alert("It's impossible to divide by 0")
    return
  }
  secondOperand = screen.textContent;
  screen.textContent = roundToTenth(
    operate(currentOperation, operand, secondOperand));
  currentOperation = null;
  
};


//key functions when pressed

function keyOperator(key) {
  if(key === '/') return '÷';
  if(key === '*') return 'x';
  if(key === '-') return '-';
  if(key === '+') return '+';
}

function keyInput(e) {
  if (e.key >= 0 && e.key <= 9) getNumber(e.key)
  if (e.key === '-' || e.key === '+' || e.key === '/' || e.key === '*') {
    getOperator(keyOperator(e.key));
  };
  if (e.key === '=') solve();
  if (e.key === 'Backspace') del();
  if (e.key === '.') getDecimal();
};

function getDecimal() {
  if (screen.textContent === '') screen.textContent = '0';
  if (screen.textContent.includes('.')) return
  screen.textContent += '.';
  if (refreshScreen) refresh();
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
  switch(operator) {
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

//random functions

function refresh() {
  screen.textContent = '';
  refreshScreen = false;
}

function roundToTenth(num) {
  return Math.round(num * 100) / 100
}
