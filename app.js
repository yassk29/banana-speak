var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("Error occured ", error);
    alert("Something went wrong with server! Try after some time.")
}

function clickHandler() {
    // outputDiv.innerText = "hahaha " + txtInput.value;
    var inputText = txtInput.value;  //taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;  //otput
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);

