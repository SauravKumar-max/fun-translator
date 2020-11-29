const dropdown = document.querySelector('#type-select');
const btnOk = document.querySelector('.btn-ok');
const info = document.querySelector('.info');
const translateBtn = document.querySelector('.translate-btn');
const text = document.querySelector('textarea');
const translationTxt = document.querySelector('.translation-txt');

let url = 'https://api.funtranslations.com/translate/';

function hideInfo(){
    info.style.display = "none";
}


function dropdownValue(){
    return url + dropdown.value + '?text=';
}

function errorHandler(error){
    console.log(error);
    alert("sorry, something went wrong!");
}

function translation(){
    const textVal = text.value;
    const fullURL = dropdownValue() + textVal;
    console.log(fullURL);

    fetch(fullURL)
    .then(response => response.json())
    .then(json => {
          console.log(json);
          const minionText = json.contents.translated;
          translationTxt.innerHTML = minionText;
    })
    .catch(errorHandler);
}

btnOk.addEventListener('click', hideInfo);
dropdown.addEventListener('change', dropdownValue);
translateBtn.addEventListener('click', translation);