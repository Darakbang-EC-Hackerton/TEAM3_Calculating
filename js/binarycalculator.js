let input = '';
let output = '';

function updateDisplay() {
  document.getElementById('inputField').innerText = input || '0';
  document.getElementById('output').innerText = output;
}

function clearDisplay() {
  input = '';
  output = '';
  document.getElementById('output').classList.remove('error');
  updateDisplay();
}

function appendToInput(value) {
  input += value;
  updateDisplay();
}

function calculateBinary() {
  try {
    // 이진법 계산을 위해, input을 10진수로 변환하여 eval()로 계산 후 다시 2진수로 변환
    const decimalResult = eval(parseBinaryExpression(input));
    output = decimalResult.toString(2); // 결과를 이진수로 변환하여 출력
    updateDisplay();
  } catch (error) {
    output = "ERROR";
    document.getElementById('output').classList.add('error');
    updateDisplay();
  }
}

// 이진수를 십진수로 변환하기 위해 문자열을 변환
function parseBinaryExpression(expression) {
  return expression.replace(/[01]+/g, match => parseInt(match, 2));
}

// 2진수를 10진수로 변환
function convertBinaryToDecimal() {
  try {
    const binaryValue = document.getElementById('output').innerText;
    if (binaryValue.match(/^[01]+$/)) { // 이진수 형식 확인
      const decimalValue = parseInt(binaryValue, 2); // 2진수 → 10진수 변환
      output = decimalValue.toString(); // 10진수 출력
      updateDisplay();
    } else {
      output = "ERROR";
      document.getElementById('output').classList.add('error');
      updateDisplay();
    }
  } catch (error) {
    output = "ERROR";
    document.getElementById('output').classList.add('error');
    updateDisplay();
  }
}

// 10진수를 2진수로 변환
function convertDecimalToBinary() {
  try {
    const decimalValue = document.getElementById('output').innerText;
    if (!isNaN(decimalValue) && decimalValue.trim() !== '') { // 10진수 형식 확인
      const binaryValue = parseInt(decimalValue).toString(2); // 10진수 → 2진수 변환
      output = binaryValue;
      updateDisplay();
    } else {
      output = "ERROR";
      document.getElementById('output').classList.add('error');
      updateDisplay();
    }
  } catch (error) {
    output = "ERROR";
    document.getElementById('output').classList.add('error');
    updateDisplay();
  }
}
