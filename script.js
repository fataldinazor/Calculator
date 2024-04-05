'use strict'

const numberBtns=document.querySelectorAll('.number');
const operatorBtns=document.querySelectorAll('.operator');

const lowerScreen=document.querySelector('.lowerScreen');
const upperScreen=document.querySelector('.lowerScreen');

let firstNum='';
let secondNum='';
let operator='';



function operate(firstNum,secondNum,operator){
    let result;
    switch(operator){
        case add:
            result=add(firstNum,secondNum);
            break;
        case sub:
            result=sub(firstNum,secondNum);
            break;
        case mul:
            result=mul(firstNum,secondNum);
            break;
        case div:
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
    if(firstNum===0)
        return ('Not Defined');
    else
        return firstNum/secondNum;
}

function mul(firstNum,secondNum){
    return firstNum*secondNum;
}