function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var buttonResetImc = document.querySelector('#button-reset-imc');
  buttonResetImc.addEventListener('click', handleButtonLimpar);
}

function calculateImc(weight, hight) {
  return weight / (hight * hight);
}

function calculateImcRange(imc) {
  var messageRange;
  if (imc < 16) {
    messageRange = 'Inválido';
  } else if (imc >= 16 && imc < 18.5) {
    messageRange = 'Muito abaixo do Peso';
  } else if (imc >= 18.5 && imc < 25) {
    messageRange = 'Peso Normal';
  } else if (imc >= 25 && imc < 30) {
    messageRange = 'Acima do peso';
  } else if (imc >= 30 && imc < 35) {
    messageRange = 'Obesidade Grau I';
  } else if (imc >= 35 && imc < 40) {
    messageRange = 'Obesidade Grau II';
  } else if (imc < 40) {
    messageRange = 'Obesidade Grau II';
  } else {
    messageRange = 'Inválido';
  }

  return messageRange;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHight = document.querySelector('#input-hight');
  var weight = Number(inputWeight.value);
  var hight = Number(inputHight.value);
  var imcResult = document.querySelector('#imc-result');
  var imcResultRange = document.querySelector('#imc-result-range');

  var imc = calculateImc(weight, hight).toFixed(2).replace('.', ',');
  imcResult.textContent = imc;
  imcResultRange.textContent = calculateImcRange(
    calculateImc(weight, hight).toFixed(2)
  );

  var dynamicResult = document.querySelector('#test');
  dynamicResult.innerHTML = '';
  var boldImc = document
    .createElement('b')
    .appendChild(document.createTextNode('aaaaa'));
  //boldImc.innerHTML = '';
  dynamicResult.textContent = 'O IMC desses dados é ';
  dynamicResult.appendChild(boldImc); //.appendChild(boldImc);
}

function handleButtonLimpar() {
  var resetWeight = (document.querySelector('#input-weight').value = '');
  var resetHight = (document.querySelector('#input-hight').value = '');
}
start();
