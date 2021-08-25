var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
// outputDiv.innerText = "there are yassk available";

// console.log(outputDiv)

function clickHandler() {
    outputDiv.innerText = "bayabaya " + txtInput.value;
    // console.log("Clicked!");
    // console.log("Input", txtInput.value)
};


btnTranslate.addEventListener("click", clickHandler)