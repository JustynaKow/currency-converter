console.log("Cześć!");

let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");

let rateEUR = 4.7847;
let rateUSD = 4.4463;
let rateGBP = 5.4193;
let rateCHF = 4.8519;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let rate;

    switch (currency) {
        case "EUR":
            rate = rateEUR;
            break;

        case "USD":
            rate = rateUSD;
            break;

        case "GBP":
            rate = rateGBP;
            break;

        case "CHF":
            rate = rateCHF;
    }

    const result = amount / rate;

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;

});

formElement.addEventListener("reset", () => {
    resultElement.innerHTML = ``;
  });