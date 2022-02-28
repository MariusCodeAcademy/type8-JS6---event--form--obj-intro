'use strict';

// nusitaikom i el
//  <h2 id="result">Nieko</h2>
// <button id="btn1">Click me</button>
const resultEl = document.getElementById('result');
const btn1El = document.getElementById('btn1');

// pridesim eventus
// el.funkcija()
// funkcija(el)

// el.addEventListener('koks eventas', funkcija kuri vyks)
btn1El.addEventListener('click', changeText);

let tex1Visible = false;

function changeText() {
  console.log('about to change');
  if (tex1Visible === false) {
    resultEl.textContent = 'nieko';
  } else {
    resultEl.textContent = 'I can do addEventListener';
  }
  tex1Visible = !tex1Visible;
}

btn1El.addEventListener('mouseover', function () {
  console.log('button was hovered');
});
