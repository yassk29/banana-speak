var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
console.log(txtInput)

function clickHandler() {
    console.log("Clicked!");
    console.log("Input", txtInput.value)
};


btnTranslate.addEventListener("click", clickHandler)