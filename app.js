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
let submitValid = false;


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

    let cardNameIsLetters =  /^[A-Za-z]+$/.test(nameInput.value);

    if(cardNameIsLetters) {
        console.log("cardName is letters")
    } 
    else {
        console.log("cardName is not just letters");
    }

    
    let cardNumberIsNum = /^\d+$/.test(cardNumberInput.value);

    if(cardNumberIsNum) {
        console.log("cardNum is a number");
    } else {
        console.log("cardNum not a number");
    }





    if(submitValid) {
        formContainer.style.visibility = "hidden";
        submitPageContainer.style.visibility = "visible";
    }
    else {
        return false;
    }
}

submitContinueButton.addEventListener("click", () => {
    location.reload();
});