const resultDisplay = document.querySelector("#display-result");
const inputDisplay = document.querySelector("#display-input");
const numbers = document.querySelectorAll(".btn-grid__number");
const operators = document.querySelectorAll(".btn-grid__operator");
const ac = document.querySelector("#ac");
const equals = document.querySelector("#equals");


let numberOne = "";
let numberTwo = "";
let operator = "";
let result = "";

const updateHtml = () => {
  inputDisplay.innerText = `${numberOne} ${operator} ${numberTwo}`;
  
  if(result){
    resultDisplay.innerText = result;
  }
  resultDisplay.innerText = result;

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
    case "%":
      return numberOne / 100;
    case "+/-":
      return numberOne * -1;

    default:
      console.error(`unhandled operator: ${operator}`);
  }
};


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
    if(operator){
        
        numberOne = result;
        numberOne = Number(numberOne);
        numberTwo = Number(numberTwo);
        result = calculateSum(numberOne, operator, numberTwo);
        
        resultDisplay.innerText = result;
        operator = event.target.innerText;

        numberTwo="";
    }
    else{
    operator = event.target.innerText;
    updateHtml();
    }
   
};

const handleEqualsClick = (event) => {
    
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    if(!numberOne){
        numberOne=result;
    }

    result = calculateSum(numberOne, operator, numberTwo);
    
    numberOne="";
    numberTwo="";
    operator = "";

    updateHtml();
};


//Event listeners
numbers.forEach((number) => {
  number.addEventListener("click", handleNumberClick);
});
operators.forEach((operator) => {
  operator.addEventListener("click", handleOperatorClick);
});
ac.addEventListener("click", clear);
equals.addEventListener("click", handleEqualsClick);