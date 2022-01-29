const sumInput = document.querySelector("#sum");
const yearsInput = document.querySelector("#years");
const countButton = document.querySelector("#count");
const eraseButton = document.querySelector("#erase");
const resultInput = document.querySelector("#result");

let isRunFunc = false; 




//Проверка на пустые поля, при удалении информации из инпута. + disabled button
disabledButton()
sumInput.addEventListener('keyup', handleEmptyInput(sumInput, 'errorSum'));
yearsInput.addEventListener('keyup', handleEmptyInput(yearsInput, 'errorYears'));

// setInterval(handleEmptyInput, 5000);




// Enable and disable button
function disabledButton() {
  countButton.disabled = true; 
  countButton.setAttribute('class', 'counter__button-disabled');
  countButton.setAttribute('title', 'Введите все поля корректно');
}

function enabledButton() {
  countButton.disabled = false;
  countButton.setAttribute('class', 'counter__button-count');
  countButton.removeAttribute('title');
}

function handleEmptyInput(inputType, errorInput){ 
  if (sumInput.value !== '' && yearsInput.value !== '') enabledButton()

  if(inputType.value === '') { 
    showError(inputType, errorInput)
    disabledButton();
    inputType.classList.remove('is-text');
  } 
  else {
    inputType.classList.add('is-text')
    deleteError(inputType, errorInput)
}
} 


// handeling empty inputs.

function showError(inputType, errorInput) {

  const errorText = document.createElement('p');
  errorText.setAttribute('id', `#${errorInput}`);
  errorText.classList.add('error__input');
  errorText.innerText = 'Введите данное поле';
  inputType.after(errorText);  
  inputType.classList.add('is-error');
}


function deleteError(inputType, errorInput) {

  const errorText = document.querySelector(`#${errorInput}`);
    errorText.remove(); 
    inputType.classList.remove('is-error');
}


//old
countButton.onclick = handleValue;
eraseButton.onclick = erase;
function handleValue() {
  if (!sumInput.value) showError(sumInput, errorInput);
  if (!yearsInput.value) showError(yearsInput, errorInput);
  if (yearsInput.value && sumInput.value) caclSum();
  disabledButton()
  sumInput.classList.remove('is-text');
  yearsInput.classList.remove('is-text');
}

function caclSum() {
    const sum = +sumInput.value;
    const years = +yearsInput.value;
    bank(sum, years);
    sumInput.value = '';
    yearsInput.value = '';
}

function bank(sum, years) {
  
  for (let i = 0; i < years; i++) {
    sum += (sum * 0.1)
  }
  resultInput.classList.add('is-show');
  return resultInput.innerText = (Math.round(sum).toLocaleString('ru-RU')) + " " + "руб";
}

function erase() {
  resultInput.classList.remove('is-show');
  sumInput.value = '';
  yearsInput.value = '';
  resultInput.innerHTML = '';

}


//creating <p> via DOM and making red outline when there is an error.













