let input = '';
let output = '';
let lastResult = null; // 마지막 계산 결과를 저장하는 변수
let newCalculation = false; // 새로운 연산 여부를 나타내는 플래그

function updateDisplay() {
  document.getElementById('inputField').innerText = input || '0';
  document.getElementById('output').innerText = output;
}

function clearDisplay() {
  input = '';
  output = '';
  lastResult = null; // 이전 결과 초기화
  newCalculation = false; // 새로운 연산 플래그 초기화
  document.getElementById('output').classList.remove('error');
  updateDisplay();
}

function appendToInput(value) {
  if (newCalculation) {
    if (!isNaN(value)) { // 숫자 입력 시 새 계산 시작
      input = value;
    } else { // 연산자 입력 시 이전 결과와 함께 시작
      input = lastResult + value;
    }
    output = '';
    newCalculation = false;
  } else {
    input += value;
  }
  updateDisplay();
}

function calculate() {
  try {
    if (input.includes('/0')) {
      output = "ERROR: 0으로 나눌 수 없음";
      document.getElementById('output').classList.add('error');
      document.getElementById('output').style.fontSize = '0.8rem';
    } else {
      output = eval(input); // 계산 수행
      lastResult = output;
      newCalculation = true;
      document.getElementById('output').classList.remove('error');
    }
    updateDisplay();
  } catch (error) {
    output = "ERROR: 계산 오류";
    document.getElementById('output').classList.add('error');
    updateDisplay();
  }
}

// 각도 기반 삼각 함수 계산
function calculateTrigonometry(func) {
  const angle = parseFloat(input);
  if (isNaN(angle)) {
    output = "ERROR: 유효한 숫자가 아님";
    document.getElementById('output').classList.add('error');
    updateDisplay();
    return;
  }

  const radians = angle * (Math.PI / 180); // 각도를 라디안으로 변환
  let result;

  switch (func) {
    case 'sin':
      result = Math.sin(radians);
      break;
    case 'cos':
      result = Math.cos(radians);
      break;
    case 'tan':
      result = Math.tan(radians);
      break;
    default:
      result = "ERROR";
  }

  output = result.toFixed(6); // 결과를 소수점 6자리로 표시
  lastResult = output;
  input = ''; // 삼각 함수 계산 후 input을 초기화
  newCalculation = true;
  document.getElementById('output').classList.remove('error');
  updateDisplay();
}
