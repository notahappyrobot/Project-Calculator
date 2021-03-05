// calculations
    // add
    function add(a,b){
        return a+b;
    }
    // subtract
    function subtract(a,b){
        return a-b;
    }
    // multiply
    function multiply(a,b){
        return a*b;
    }
    // divide
    function divide(a,b){
        return a/b;
    }


// inputs
    // get first number

    // get operator
    // get second number


// outputs
let calculation = `5 * 5`;
let answer = 25;

    // update display calculation
    let dispCalc = document.getElementById("calculation");
    function updateCalc(calculation){
        dispCalc.textContent = calculation;
    }
    
    // update display answer
    let dispAnswer = document.getElementById("answer");
    function updateAnswer(answer){
        dispAnswer.textContent = answer;
    }

updateCalc(`6 + 5`);
updateAnswer(11);