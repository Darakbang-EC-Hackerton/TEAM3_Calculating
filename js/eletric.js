function calculateElectricityBill() {
  const usage = parseFloat(document.getElementById('usage').value);
  if (isNaN(usage) || usage < 0) {
    alert('올바른 전기 사용량을 입력하세요.');
    return;
  }

  // 기본요금 및 전력량요금 계산
  let basicCharge = 0;
  let energyCharge = 0;

  if (usage <= 200 && usage >0) {
    basicCharge = 910;
    energyCharge = Math.floor(usage * 93.3);
  } else if (usage <= 400) {
    basicCharge = 1600;
    energyCharge = Math.floor((200 * 93.3) + ((usage - 200) * 187.9));
  }
  else {
    basicCharge = 7300;
    energyCharge = Math.floor((200 * 93.3) + (200 * 187.9) + ((usage - 400) * 280.6));
  }

  // 기후환경요금 및 연료비조정요금 계산
  const climateEnvironmentCharge = Math.floor(usage * 7.3); // kWh당 7.3원
  const fuelAdjustmentCharge = Math.floor(usage * 5.0); // kWh당 5.0원

  // 총 전기요금 계산
  const totalCharge = basicCharge + energyCharge + climateEnvironmentCharge + fuelAdjustmentCharge;

  // 부가가치세 및 전력산업기반기금 계산
  const vat = Math.floor(totalCharge * 0.1);
  const electricPowerIndustryFund = Math.floor(totalCharge * 0.037);

  // 최종 청구금액
  const finalBill = totalCharge + vat + electricPowerIndustryFund;

  // 결과 표시
  document.getElementById('result').innerHTML = `
    <p>기본요금: ${basicCharge.toLocaleString()}원</p>
    <p>전력량요금: ${energyCharge.toLocaleString()}원</p>
    <p>기후환경요금: ${climateEnvironmentCharge.toLocaleString()}원</p>
    <p>연료비조정요금: ${fuelAdjustmentCharge.toLocaleString()}원</p>
    <p>부가가치세: ${vat.toLocaleString()}원</p>
    <p>전력산업기반기금: ${electricPowerIndustryFund.toLocaleString()}원</p>
    <h3>예상 전기요금: ${finalBill.toLocaleString()}원</h3>
  `;
}
