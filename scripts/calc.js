document.addEventListener('DOMContentLoaded', () => {
    const calcButton = document.querySelector('.calc-result');
    calcButton && calcButton.addEventListener('click', onClickHandler);

    const prevResultElem = document.querySelector(".prev-result");

    if (prevResultElem && window.localStorage && window.localStorage.getItem('previousResult'))
        prevResultElem.innerHTML = window.localStorage.getItem('previousResult');
})

const loggingInfo = (
    firstNumber,
    operation,
    secondNumber,
    result
) => {
    const log = `${firstNumber} ${operation} ${secondNumber} = ${result}`;
    console.log(log);
    return log;
}

function onClickHandler() {
    const firstNumElem = document.querySelector("#first-number");
    const secondNumElem = document.querySelector("#second-number");
    const operationElem = document.querySelector(".select-operation");

    if (firstNumElem
        && secondNumElem
        && operationElem
    ) {

        const firstNumber = Number.parseFloat(firstNumElem.value);
        const secondNumber = Number.parseFloat(secondNumElem.value);
        const operation = operationElem.value;

        if (operation === "/" || operation === "%") {
            if (secondNumber === 0 || secondNumber === 0.0) {
                alert("Division by zero");
                return;
            }
        }
        let result = "";
        switch (operation) {
            case "+":
                result = `${firstNumber + secondNumber}`;
                break;
            case "-":
                result = `${firstNumber - secondNumber}`;
                break;
            case "∗":
                result = `${firstNumber * secondNumber}`;
                break;
            case "/":
                result = `${firstNumber / secondNumber}`;
                break;
            case "%":
                result = `${firstNumber % secondNumber}`;
                break;
            case "^":
                result = `${Math.pow(firstNumber, secondNumber)}`;
                break;
        }
        setResult(loggingInfo(firstNumber, operation, secondNumber, result));
    }
}

function setResult(result) {
    const prevResultElem = document.querySelector(".prev-result");
    const currResultElem = document.querySelector(".current-result");
    if (prevResultElem && currResultElem) {
        if (currResultElem.innerHTML) prevResultElem.innerHTML = currResultElem.innerHTML;
        currResultElem.innerHTML = result;
        window.localStorage && window.localStorage.setItem('previousResult', result);
    }
}
