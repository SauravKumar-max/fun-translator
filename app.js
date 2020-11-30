const dropdown = document.querySelector('#type-select');
const btnClose = document.querySelector('.btn-close');
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
          const transText = json.contents.translated;
          translationTxt.textContent = transText;
    })
    .catch(errorHandler);
}

btnClose.addEventListener('click', hideInfo);
dropdown.addEventListener('change', dropdownValue);
translateBtn.addEventListener('click', translation);