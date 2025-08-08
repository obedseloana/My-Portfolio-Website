 let display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let expression = display.value;

    if (expression.includes('^')) {
        let parts = expression.split('^');
        let base = parseFloat(parts[0]);
        let exponent = parseFloat(parts[1]);
        display.value = Math.pow(base, exponent);
    }
    else if (expression.includes('√')) {
        let numberText = expression.replace('√', '');
        let number = parseFloat(numberText);
        display.value = Math.sqrt(number);
    }
    else {
        try {
            display.value = eval(expression);
        } catch (error) {
            display.value = "Error";
        }
    }
}
