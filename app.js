let nameInput = document.querySelector("#card-holder-name-input");
let cardName = document.querySelector("#card-front-name");
let cardNumberInput = document.querySelector("#card-number-input")
let cardNumber = document.querySelector("#card-front-number");

let cardExpMonth = document.querySelector("#card-front-exp-month");
let cardExpMonthInput = document.querySelector("#card-exp-month-input");
let cardExpYear = document.querySelector("#card-front-exp-year");
let cardExpYearInput = document.querySelector("#card-exp-year-input");

let cardCvcInput = document.querySelector("#card-cvc-input");
let cardCvc = document.querySelector("#card-back-cvc");

let formContainer = document.querySelector("#form-container");
let submitPageContainer = document.querySelector("#submit-page-container");

let submitContinueButton = document.querySelector("#submit-continue-btn");
let cardNameValid = false;
let cardNumValid = false;
let cardExpMonthValid = false;
let cardExpYearValid = false;
let cardCvcValid = false;
let invalidMsgArr = document.querySelectorAll(".invalid");


nameInput.addEventListener("keyup", () => {
    cardName.textContent = nameInput.value;
    if(nameInput.value == "") {
        cardName.textContent = "Jane Applelseed";
    }


});

cardNumberInput.addEventListener("keyup", (e) => {

        cardNumber.textContent = cardNumberInput.value;
    
        if(cardNumberInput.value == "") {
            cardNumber.textContent = "0000 0000 0000 0000";
        }

    
});
    
cardExpMonthInput.addEventListener("keyup", (e) => {
    cardExpMonth.textContent = cardExpMonthInput.value;
    if(cardExpMonthInput.value == "") {
        cardExpMonth.textContent = "00";
    }
})

cardExpYearInput.addEventListener("keyup", (e) => {
    cardExpYear.textContent = cardExpYearInput.value;
    if(cardExpYearInput.value == "") {
        cardExpYear.textContent = "00";
    }
})

cardCvcInput.addEventListener("keyup", (e) => {
    cardCvc.textContent = cardCvcInput.value;
    if(cardCvcInput.value == "") {
        cardCvc.textContent = "000";
    }
})

function SubmitPage() {

    let cardNameIsLetters =  /^[a-zA-Z\s]*$/.test(nameInput.value);
    let cardNameIsSpacesOnly = /^\s*$/.test(nameInput.value);

    if(cardNameIsLetters && !cardNameIsSpacesOnly) {
        invalidMsgArr[0].style.visibility = "hidden";
        cardNameValid = true;
    } 
    else {
        invalidMsgArr[0].style.visibility = "visible";
        cardNameValid = false;
    }

    
    let cardNumberIsNum = /^\d+$/.test(cardNumberInput.value);

    if(cardNumberIsNum) {
        invalidMsgArr[1].style.visibility = "hidden";
        cardNumValid = true;
    } else {
        invalidMsgArr[1].style.visibility = "visible";
        cardNumValid = false;
    }

    let cardExpMonthIsNum = /^\d+$/.test(cardExpMonthInput.value);

    if(cardExpMonthIsNum  && cardExpMonthInput.value >= 0 && cardExpMonthInput.value <= 12) {
        cardExpMonthValid = true;
    } else {
        cardExpMonthValid = false;
        
    }

    let cardExpYearIsNum = /^\d+$/.test(cardExpYearInput.value);

    if(cardExpYearIsNum && cardExpYearInput.value >= 0) {
        cardExpYearValid = true;
    } else {
        cardExpYearValid = false;
    }

    let cardCvcIsNum = /^\d+$/.test(cardCvcInput.value);

    if(cardCvcIsNum) {
        cardCvcValid = true;
    } else {
        cardCvcValid = false;
    }

    //actually apply styles now because exp month, year, and cvc share same style element
    if(cardCvcValid && cardExpMonthValid && cardExpYearValid) {
        invalidMsgArr[2].style.visibility = "hidden";
    } else {
        invalidMsgArr[2].style.visibility = "visible";
    }
    

    if(cardNameValid && cardNumValid && cardExpMonthValid && cardExpYearValid && cardCvcValid) {
        formContainer.style.visibility = "hidden";
        submitPageContainer.style.visibility = "visible";

        cardNameValid = false;
        cardNumValid = false;
        cardExpMonthValid = false;
        cardExpYearValid = false;
        cardCvcValid = false;
    } 
       
    return false;
    
    
   
}

submitContinueButton.addEventListener("click", () => {
    location.reload();
});