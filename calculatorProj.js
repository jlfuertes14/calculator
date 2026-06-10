const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let currentInput = "";
let firstNumber = null;
let operator = null;
let isNewInput = false ;


const operatorSymbols = {                                                                                                                                                                               
    "add":      "+",                                                                                                                                                                                    
    "minus":    "-",                                                                                                                                                                                    
    "multiply": "x",                                                                                                                                                                                    
    "divide":   "÷",
    "percent":  "%"                                                                                                                                                                                    
}  


function add(a, b){
    return a + b;
}

function subtract( a, b){
    return a - b;
    
}
function division(a, b){
    if(b === 0){
        return "Error";
    }
    return a / b;
}
function multiplication(a, b){
    return a * b;
}

function percentage (a) {
    return a / 100

}

function clearDisplay () {
    display.textContent = "";
    currentInput = "";
    firstNumber = null;
    operator = null;

}

function calculate() {

    if (firstNumber === null || operator === null || currentInput === "") return;
    const a = parseFloat(firstNumber);
    const b = parseFloat(currentInput);

    let result;
    // console.log(operator);
    switch(operator) {
        case "add":
            result = add(a, b);
            break;
        case "minus":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiplication(a, b);
            break;
        case "divide":
            result = division(a, b);
            break;

    }

    console.log(result);
    currentInput = String(result);
    display.textContent = currentInput
    firstNumber = null;
    operator = null;
    isNewInput = true;

}


buttons.forEach(button => {
     button.addEventListener("click", inputButtons)
});

function inputButtons () {
    const value = this.dataset.value || this.textContent.trim();

    switch (value) {
       // numbers                                                                                                                                                                                      
            case "0":                                                                                                                                                                                       
            case "00":                                                                                                                                                                                      
            case "1":                                                                                                                                                                                       
            case "2":                                                                                                                                                                                       
            case "3":                                                                                                                                                                                       
            case "4":                                                                                                                                                                                       
            case "5":                                                                                                                                                                                       
            case "6":                                                                                                                                                                                       
            case "7":                                                                                                                                                                                       
            case "8":                                                                                                                                                                                       
            case "9":                                                                                                                                                                                       
            case ".":                                                                                                                                                                                       
                console.log(value)
                if(isNewInput) {
                    currentInput = value
                    isNewInput = false;
                    if (firstNumber && operator) {
                        display.textContent = firstNumber + " " + operatorSymbols[operator] + " " + currentInput;
                    } else {
                        display.textContent = currentInput;
                    }
                } else {
                    currentInput += value
                    if(firstNumber && operator) {
                        display.textContent = firstNumber + " " + operatorSymbols[operator] + " " + currentInput;
                    } else {
                        display.textContent = currentInput;
                    }
                }                                                                                                                                           
                break;                                                                                                                                                                                      
            
 
            // operators — copy-paste your exact emojis here                                                                                                                                                
            case "add":         
                if (currentInput === "") break;
                firstNumber = currentInput;
                operator = value;
                isNewInput = true;

                display.textContent = currentInput + " " + operatorSymbols[value];
                break;                                                                                                                                                                                                                                                                                                                                                          
            case "minus":
                if (currentInput === "") break;
                firstNumber = currentInput;
                operator = value;
                isNewInput = true;

                display.textContent = currentInput + " " + operatorSymbols[value];
                break;                                                                                                                                                                                                                                                                                                                                                           
            case "multiply":
                if (currentInput === "") break;
                firstNumber = currentInput;
                operator = value;
                isNewInput = true;

                display.textContent = currentInput + " " + operatorSymbols[value];
                break;                                                                                                                                                                                                                                                                                                                                                                               
            case "divide":
                if (currentInput === "") break;
                firstNumber = currentInput;
                operator = value;
                isNewInput = true;

                display.textContent = currentInput + " " + operatorSymbols[value];
                break;

            case "percent":                                                                                                                                                                                     
                if (currentInput === "") break;
                currentInput = String(parseFloat(currentInput) / 100);
                display.textContent = currentInput;                                                                                                                                                                   
                break;                                                                                                                                                                                                                                                                                                                                                        
            case "=":  
                console.log(operator)                                                                                                                                                                                     
                calculate();                                                                                                                                                                  
                break;                                                                                                                                                                                       
            case "clear":                                                                                                                                                                                     
                console.log("clear")      
                clearDisplay();                                                                                                                                                                  
                break;                                                                                                                                                                                       
                                                                                                                                                                                                            
            default:                                                                                                                                                                                        
                console.log("unhandled:", value)       
    }
}