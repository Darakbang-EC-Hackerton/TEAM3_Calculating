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
    // 이전 계산 결과가 있고 새로운 계산을 시작할 때
    if (!isNaN(value)) { // 숫자 입력 시 새 계산 시작
      input = value;
    } else { // 연산자 입력 시 이전 결과와 함께 시작
      input = lastResult + value;
    }
    output = ''; // output을 초기화
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
      lastResult = output; // 결과를 lastResult에 저장
      newCalculation = true; // 다음 입력 시 새로운 계산 시작
      document.getElementById('output').classList.remove('error');
    }
    updateDisplay();
  } catch (error) {
    output = "ERROR: 계산 오류";
    document.getElementById('output').classList.add('error');
    updateDisplay();
  }
}
