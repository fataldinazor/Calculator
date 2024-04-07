'use strict'

let firstOperand='';
let secondOperand='';
let currentOperator=null;
let shouldReset=false;

const numberBtn=document.querySelectorAll('.number');
const operatorBtn=document.querySelectorAll('.operator');
const equalBtn=document.querySelector('.equal');
const clearBtn=document.querySelector('.clear');
const deleteBtn=document.querySelector('.delete');
const dotBtn=document.querySelector('.dot');
const currentScreen=document.querySelector('.lowerScreen');
const previousScreen=document.querySelector('.upperScreen');

document.addEventListener('keydown',function(e){
    let operations=['+','-','*','/'];
    console.log(e);
    if(e.which>=48&&e.which<=57 || e.which>=96 && e.which<=105)
    appendNumber(e.key);
    if (operations.includes(e.key))
    setOperation(e.key);
    if(e.key==="Backspace"||e.key==='Delete')
    deleteNumber();
    if(e.which===115)
    appendDot();
    if(e.key==='=' || e.key==='Enter')
    evaluate();
})

equalBtn.addEventListener('click',evaluate);
deleteBtn.addEventListener('click',deleteNumber);
clearBtn.addEventListener('click',clearCalc);
dotBtn.addEventListener('click',appendDot)

function appendDot(){
    if(shouldReset)resetScreen();
    if(currentScreen.textContent==="")
    currentScreen.textContent='0';

    if (currentScreen.textContent.includes('.')) return;
    else 
        currentScreen.textContent+='.';
}

function clearCalc(){
    firstOperand='';
    secondOperand='';
    currentOperator=null;
    shouldReset=false;

    currentScreen.textContent='0';
    previousScreen.textContent='';
}

function deleteNumber(){
    let newText=currentScreen.textContent;
    newText=newText.slice(0,-1);
    currentScreen.textContent=newText;
}


numberBtn.forEach(btn=>{
    btn.addEventListener('click',()=>appendNumber(btn.textContent))
})

operatorBtn.forEach(btn=>{
    btn.addEventListener('click',()=>setOperation(btn.textContent));
})

equalBtn.addEventListener('click',()=>evaluate)

function appendNumber(number){
    if(currentScreen.textContent==='0'|| shouldReset) 
    resetScreen();
    currentScreen.textContent+=number;
}

function resetScreen(){
    currentScreen.textContent='';
    shouldReset=false;
}

function setOperation(operand){
    if(currentOperator!==null)evaluate()

    firstOperand=Number(currentScreen.textContent);
    currentOperator=operand;
    previousScreen.textContent=`${firstOperand} ${currentOperator}`;
    shouldReset=true;
}

function evaluate(){
    if(currentOperator===null||shouldReset)return

    secondOperand=currentScreen.textContent;
    previousScreen.textContent+=` ${secondOperand}`;
    let result=round(operate(Number(firstOperand),Number(secondOperand),currentOperator));
    resetScreen();
    currentScreen.textContent=result;

    firstOperand=currentScreen.textContent;
    currentOperator=null;
    shouldReset=true;
}

function round(number){
    return (Math.round(number*1000))/1000;
}

function operate(firstNum,secondNum,operator){
    let result;
    switch(operator){
        case '+':
            result=add(firstNum,secondNum);
            break;
        case '-':
            result=sub(firstNum,secondNum);
            break;
        case '*':
            result=mul(firstNum,secondNum);
            break;
        case '/':
            result=div(firstNum,secondNum);
            break;            
    }
    return result;
}


function add(firstNum,secondNum){
    return firstNum+secondNum;
}

function sub(firstNum,secondNum){
    return firstNum-secondNum;
}

function div(firstNum,secondNum){
    if(secondNum===0)
        return ('Not Defined');
    else
        return firstNum/secondNum;
}

function mul(firstNum,secondNum){
    return firstNum*secondNum;
}

const footer=document.querySelector('footer')
footer.textContent+=(new Date()).getFullYear();