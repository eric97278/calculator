let currentNumber = '';
let operator = '';
let previousNumber = '';

function appendNumber(number) {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
  document.getElementById('result').innerText = currentNumber;
}

function setOperator(op) {
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }
  document.getElementById('result').innerText = result;
  currentNumber = result.toString();
  operator = '';
  previousNumber = '';
}

function clearAll() {
  currentNumber = '';
  operator = '';
  previousNumber = '';
  document.getElementById('result').innerText = '0';
}