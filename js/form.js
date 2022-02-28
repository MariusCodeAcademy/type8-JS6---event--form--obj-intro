// nusitaikom i forma

const formEl = document.forms.userForm;
const ageEl = document.getElementById('age');
// formos issiusntimo ivykis yra submit
formEl.addEventListener('submit', function (event) {
  // console.log(formEl.element.color);
  console.log(event);
  // kai valdom forma su JS tai mes nenorim kad psl persikrautu
  // sustabdyti puslapi nuo perkrovimo
  event.preventDefault();
  console.log('formos valdymas perimtas');
  const nameValue = formEl.elements.name.value;
  const townValue = formEl.elements.town.value;
  // const ageValue = ageEl.value;
  const ageValue = formEl.querySelector('#age').value;
  const favColor = formEl.elements.color.value;
  const formosDuomenys = {
    name: nameValue,
    town: townValue,
    age: ageValue,
    color: favColor,
  };

  console.log('formosDuomenys ===', formosDuomenys);
  // surinkti ivesties laukus ir jo reiksmes sudeti i objekta
  if (Number(ageValue) < 18) {
    alert('priejimas negalimas');
  }
});
