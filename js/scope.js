// globali erdve arba global scope -- kas yra deklaruota ne kitos strukturos viduje
// debugger;
let globKint1 = 10;
const resultEl = document.getElementById('result');
const btn1El = document.getElementById('btn1');

function globaliFunkcija() {
  // lokali globaliFunkcija erdve. joje galioja viskas kol vygdoma funkija
  let localKint1 = 50;
  // funkcijos vidueje mes matom ir galim dirbti su globaliais kintamaisiais
  console.log(globKint1);
  globKint1++;
}

globaliFunkcija();

let kiekKartu = 0;
btn1El.addEventListener('click', function () {
  debugger;
  kiekKartu = kiekKartu + 1;
  resultEl.textContent = `Paspaudei ${kiekKartu} kartu mygtuka`;
});
// kiekKartu = 1

// kiek yra globKint1 ?
console.log('globKint1 ===', kiekKartu);
