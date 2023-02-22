{
    const welcome = () => {
        console.log("Cześć!");
    };

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.7847;
        const rateUSD = 4.4463;
        const rateGBP = 5.4193;
        const rateCHF = 4.8519;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "CHF":
                return amount / rateCHF;
        }
    };

    const onFormReset = (resultElement) => {
        resultElement.innerHTML = ``;
    };

    const updateResultText = (resultElement, amount, result, currency) => {
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;
    };

    const onFormSubmit = (event, resultElement) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(resultElement, amount, result, currency);
    };

    const getFormButtons = () => {
        const formElement = document.querySelector(".js-form");
        const resultElement = document.querySelector(".js-result");

        formElement.addEventListener("submit", (event) => onFormSubmit(event, resultElement));
        formElement.addEventListener("reset", () => onFormReset(resultElement));
    };

    const init = () => {
        getFormButtons();
        welcome();
    };

    init();
}