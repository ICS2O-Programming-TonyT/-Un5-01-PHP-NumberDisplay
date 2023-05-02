
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const Minimum = parseInt(document.getElementById('Minimum').value);
  const Maximum = parseInt(document.getElementById('Maximum').value);
  function numberrange() {
    let arrayBetween = []

    for(let i = Minimum; i <= Maximum; i++){
      arrayBetween.push(i)
    }
    return arrayBetween
  }
  if (Minimum < Maximum) {
    console.log(numberrange())
    resultDiv.innerHTML = `${numberrange()}`;
  } else if (Minimum > Maximum) {
    resultDiv.innerHTML = `The Minimum has to be higher than the Maximum`;
  }
});
