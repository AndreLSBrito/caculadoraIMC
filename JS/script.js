function start() {
  const buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  const buttonResetImc = document.querySelector('#button-reset-imc');
  buttonResetImc.addEventListener('click', handleButtonLimpar);
}

// calculate IMC value
function calculateImc(weight, hight) {
  return weight / (hight * hight);
}

// Calculate IMC Range
function calculateImcRange(imc) {
  let messageRange;
  if (imc < 18.5) {
    messageRange = 'Abaixo do Peso';
  } else if (imc >= 18.5 && imc < 25) {
    messageRange = 'Peso Normal';
  } else if (imc >= 25 && imc < 30) {
    messageRange = 'Sobrepeso';
  } else if (imc >= 30 && imc < 35) {
    messageRange = 'Obesidade Grau I';
  } else if (imc >= 35 && imc < 40) {
    messageRange = 'Obesidade Grau II';
  } else {
    messageRange = 'Obesidade Grau III (Obesidade mórbida)';
  }

  return messageRange;
}
// function when push the button calculate
function handleButtonClick() {
  // search the values inputed on the DOM
  const inputWeight = document.querySelector('#input-weight');
  const inputHight = document.querySelector('#input-hight');
  const weight = Number(inputWeight.value);
  const hight = Number(inputHight.value);

  // calculate the IMC and the range from the result
  const imc = calculateImc(weight, hight).toFixed(2).replace('.', ',');
  const imcRange = calculateImcRange(calculateImc(weight, hight).toFixed(2));

  // Add at the DOM the result of IMC when the user clicks calculate
  const dynamicImcResult = document.querySelector('#paragraph-result');
  dynamicImcResult.innerHTML = '';
  const boldImc = document.createElement('STRONG');
  boldImc.textContent = imc;
  dynamicImcResult.textContent = 'O IMC desses dados é ';
  dynamicImcResult.appendChild(boldImc);

  // Add at the DOM the result of rannge from IMC when the user clicks calculate
  const dynamicImcRangeResult = document.querySelector(
    '#paragraph-result-range'
  );
  dynamicImcRangeResult.innerHTML = '';
  const boldImcRange = document.createElement('STRONG');
  boldImcRange.textContent = imcRange;
  dynamicImcRangeResult.textContent =
    'Este valor considera que você está na faixa ';
  dynamicImcRangeResult.appendChild(boldImcRange);
}

// function when push the button reset
function handleButtonLimpar() {
  const resetWeight = (document.querySelector('#input-weight').value = '');
  const resetHight = (document.querySelector('#input-hight').value = '');
  let resetImc = document.querySelector('#paragraph-result');
  resetImc.textContent = '';
  let resetImcRange = document.querySelector('#paragraph-result-range');
  resetImcRange.textContent = '';
}
start();
