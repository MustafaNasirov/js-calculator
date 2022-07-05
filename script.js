const buttons = document.querySelectorAll(".btn-grid__item");
const displayResult = document.querySelector("#display-result");
let displayStr = "";

let valueStr = "";

//combine, calculate and display string on button click
const btnClick = (event) => {

    if (event.target.value == "=") {
        
        calculate();
    }
    else if (event.target.value == "AC") {
            resetVar();
    }
    else{
        
        displayResult.innerHTML = event.target.value;
        valueStr+=event.target.value;
        displayStr+=event.target.value;
    }

}


const resetVar = () =>{
    valueStr = "";
    displayStr = "";
    displayResult.innerHTML = displayStr;
}

//parses string to calculate equation
const calculate = () => {
    let expression = [];

    switch(true){
        case valueStr.includes("+"):
            expression = valueStr.split("+");
            valueStr = parseFloat(expression[0]) + parseFloat(expression[1]);
            console.log(valueStr)
            break;

        case valueStr.includes("-"):
            expression = valueStr.split("-");
            valueStr = parseFloat(expression[0] - parseFloat(expression[1]));
            console.log(valueStr)
            break;
    
        case valueStr.includes("*"):
            expression = valueStr.split("*");
            valueStr = parseFloat(expression[0]) * parseFloat(expression[1]);
            console.log(valueStr)
            break;
    
        case valueStr.includes("/"):
            expression = valueStr.split("/");
            valueStr = parseFloat(expression[0]) / parseFloat(expression[1]);
            break;
    
        case valueStr.includes("%"):
            expression = valueStr.split("%");
            valueStr = parseFloat((expression[0] / parseFloat(expression[1])) * 100);
            break;

        case valueStr.includes("="):
            expression = valueStr.split("=");
            valueStr = parseFloat(expression[0]);
            break;
     /*
        case valueStr.substring(1).includes("-"):
            expression = valueStr.substring(1).split("-");
            valueStr = parseFloat(expression[0] * -1) - parseFloat(expression[1]);
            break;
            */
      }

        
    displayResult.innerHTML = valueStr;
}


//Add listener to each button with handler
buttons.forEach(button => {
    button.addEventListener('click', btnClick);
});




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
