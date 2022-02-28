'use strict';

const btn1El = document.getElementById('btn1');
const resultEl = document.getElementById('result');
// nusitaikyti i input1 el
const inputEl = document.getElementById('input1');

// btn1El uzdeti mygtuko paspaudimo eventListeneri ir atspausdinti konsoleje 'paspausta'
btn1El.addEventListener('click', function () {
  // perkelti reiksme is input i resultEL
  // result = input
  resultEl.textContent = inputEl.value;
  // console.log('resultEl ===', resultEl);
  // console.log('inputEl ===', inputEl);
  // isvalyti ivesties lauka
  inputEl.value = '';
});

inputEl.addEventListener('input', function () {
  resultEl.textContent = inputEl.value;
});
