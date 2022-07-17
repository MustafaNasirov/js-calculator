const resultDisplay = document.querySelector("#display-result");
const inputDisplay = document.querySelector("#display-input");
const numbers = document.querySelectorAll(".btn-grid__number");
const operators = document.querySelectorAll(".btn-grid__operator");
const ac = document.querySelector("#ac");
const equals = document.querySelector("#equals");

console.log(resultDisplay);
console.log(inputDisplay);
console.log(numbers);
console.log(operators);


let numberOne = "";
let operator = "";
let numberTwo = "";
let result = "";

const updateHtml = () => {
  inputDisplay.innerText = `${numberOne} ${operator} ${numberTwo}`;
  resultDisplay.innerText = result;

  console.log(resultDisplay);
};

const clear = () => {
  numberOne = "";
  operator = "";
  numberTwo = "";
  result = "";

  updateHtml();
};

const calculateSum = (numberOne, operator, numberTwo) => {
  if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    console.error("numbers must be type 'number'");
    console.log(numberOne);
    console.log(numberTwo);
    return;
  }

  switch (operator) {
    case "+":
      return numberOne + numberTwo;
    case "-":
      return numberOne - numberTwo;
    case "*":
      return numberOne * numberTwo;
    case "/":
      return numberOne / numberTwo;
/*     case ".":
        return numberOne;
    case "+/-":
        return numberOne * -1;
    case "%":
        return numberOne / 100; */
    default:
      console.error(`unhandled operator: ${operator}`);
  }
};

// need a way of displaying user input (numbers and the operators)
const handleNumberClick = (event) => {
  if (operator === "") {
    numberOne += event.target.innerText;
  } else {
    numberTwo += event.target.innerText;
  }

  updateHtml();
};

// TODO: if no first number, make the first number 0
const handleOperatorClick = (event) => {
    if(result){
        numberTwo = "";

        numberOne = result;
        updateHtml();
    }
    operator = event.target.innerText;
    updateHtml();
};

// TODO: convert numberOne, numberTwo into "number" types
const handleEqualsClick = (event) => {
    console.log(result);

    
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    result = calculateSum(numberOne, operator, numberTwo);
    numberOne="";
    numberTwo="";
    operator = "";
    updateHtml();
};

numbers.forEach((number) => {
  number.addEventListener("click", handleNumberClick);
});
operators.forEach((operator) => {
  operator.addEventListener("click", handleOperatorClick);
});
ac.addEventListener("click", clear);
equals.addEventListener("click", handleEqualsClick);




/*
buttons.map(button => {
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            
            case 'AC': 
                display.innerText = "";
                break;

            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            
            default:
                display.innerText +=e.target.innerText;
                
        }
    })
});
console.log(buttons);
*/

// Three variables that hold 3 button clicks (2 numbers and 1 operator) which calculates the equation, otherwise checks for special button press
// Each button 
/*
const display = document.getElementById('#display-screen');


let result = "";

const btnClick = (event) =>{

    const value = event.target.value;
    let num1 = document.querySelector(".display-num1");
    let num2 =  document.querySelector(".display-num2");

    /*
    result = result + event.target.innerHTML;
    display.innerHTML = result;
    console.log(display)
    
};

Array.from(numButtons).forEach((button) =>{
    button.addEventListener("click", btnClick)
    console.log()
});

const calculateResult=()=>{
    switch(e.target.innerText){
            
        case 'AC': 
            display.innerText = "";
            break;

        case '=':
            
            break;
        
        default:
            display.innerText +=e.target.innerText;
            
    }
}
*/

//const displayResult = document.querySelector("#display-result")
//const displayHistory = document.querySelector("#display-history")

//const numButtons = document.querySelectorAll('.btn-grid__item--num-btn');
//console.log(numButtons);

//const oprButtons = document.querySelectorAll('.btn-grid__item--opr-btn');
//console.log(oprButtons);
