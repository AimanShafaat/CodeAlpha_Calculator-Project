let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += " " + operator + " ";
}

function clearDisplay() {
    display.value = "";
}

function deleteDigit() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    if (display.value === "") {
        display.value = "0"; 
    } else {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Error";
        }
    }
}
