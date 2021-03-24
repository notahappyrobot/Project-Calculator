/* 
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=VARIABLES=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/

// inputs
let a = `0`;
let b = `0`;
let tempNum = ``;
let operator = ``; // math operator add, subtract, multiple, divide

// outputs
let calculation = ``;// display calc
let answer = ``; // display total

/* 
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=FUNCTIONS=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
    // get first number (a)
    if(!a && !b){

    }
    // after operator selected switch to variable b
    if(a && !b){

    }


    // get numbers, numBtn interaction
    document.querySelectorAll('.numBtn').forEach(item => {
        item.addEventListener('click', event => {
            
            console.log(`${event.target.textContent} was pressed`);         
            updateCalc(tempNum += event.target.textContent);

            dataTracker(); //updates a, b and operator
        })
      })

    // get operator, calcBtn interaction
    document.querySelectorAll('.calcBtn').forEach(item => {
        item.addEventListener('click', event => {
            
            console.log(`${event.target.textContent} was pressed`);
            if(operator === ``){
                a = tempNum;
                switch(event.target.textContent){
                    case `+`:
                                                
                        operator = event.target.textContent;
                        calculation += operator;
                        updateCalc(a + event.target.textContent);
                        console.log(`a = ${a}`);

                        break;

                    case `-`:
                        
                        operator = event.target.textContent;
                        updateCalc(event.target.textContent);

                        break;

                    case `/`:
                        
                        operator = event.target.textContent;
                        updateCalc(event.target.textContent);

                        break;

                    case `*`:
                        
                        operator = event.target.textContent;
                        updateCalc(event.target.textContent);

                        break;

                    default:
                        console.log(`switch case default`);
                }
            }
            // calculate
            if(event.target.textContent=== `=`){
                switch(operator){
                    case `+`:
                        answer = a+b;                        
                        updateAnswer(answer);
                        break;

                    case `-`:
                        answer = a-b;                        
                        updateAnswer(answer);

                        break;

                    case `/`:
                        answer = a/b;                        
                        updateAnswer(answer);

                        break;

                    case `*`:
                        answer = a*b;                        
                        updateAnswer(answer);

                        break;

                    default:
                        console.log(`switch case default`);
                }
            }

            dataTracker(); //updates a, b and operator
      })
    })
    // get second number (b)

    // clear calculation + total
        //reset variables

    // delete last character
        // pop last character

    // update display calculation
    let dispCalc = document.getElementById("calculation");
    function updateCalc(calculation){
        dispCalc.textContent = calculation; // += produced duplicates
    }
    
    // update display answer
    let dispAnswer = document.getElementById("answer");
    function updateAnswer(answer){
        dispAnswer.textContent = answer;
    }

//updateCalc(calculation);
//updateAnswer(answer);


/* 
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=ON START UP=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/


//html test buttons
function whatIsA(){    
    const tempA = document.getElementById(`tallyA`);
    if(!a){
        tempA.textContent = `a = [has not been assigned]`;
    }else{
        tempA.textContent = `a = ${a}`;
    }

}
function whatIsB(){    
    const tempB = document.getElementById(`tallyB`);
    if(!b){
        tempB.textContent = `b = [has not been assigned]`;
    }else{
        tempB.textContent = `b = ${b}`;
    }

}
function whatIsOp(){
    const tempOp = document.getElementById(`tallyOp`);
    if(!operator){
        tempOp.textContent = `operator = [has not been assigned]`;
    }else{
        tempOp.textContent = `operator = "${operator}"`;
    }

}

/* 
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=TEST FUNCTIONS-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
function dataTracker(){
    whatIsA();
    whatIsB();
    whatIsOp();
}