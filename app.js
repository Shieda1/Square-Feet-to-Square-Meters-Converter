// https://www.omnicalculator.com/conversion/square-feet-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const squareMetersRadio = document.getElementById('squareMetersRadio');
const squareFeetRadio = document.getElementById('squareFeetRadio');

let squareMeters;
let squareFeet = v; 

// labels of the inpust
const variable = document.getElementById('variable');

squareMetersRadio.addEventListener('click', function() {
  variable.textContent = 'Square Feet';
  squareFeet = v;
  result.textContent = '';
});

squareFeetRadio.addEventListener('click', function() {
  variable.textContent = 'Square Meters';
  squareMeters = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(squareMetersRadio.checked)
    result.textContent = `Square Meters = ${computesquareMeters().toFixed(5)}`;

  else if(squareFeetRadio.checked)
    result.textContent = `Square Feet = ${computesquareFeet().toFixed(5)}`;
})

// calculation

function computesquareMeters() {
  return Number(squareFeet.value) / 10.764;
}

function computesquareFeet() {
  return Number(squareMeters.value) * 10.764;
}