const firstInput = document.getElementById("work1");
const secondInput = document.getElementById("work2");
const thirdInput = document.getElementById("work3");
const btnsim = document.getElementById("sim");
const btncomp = document.getElementById("comp");

const answer = document.getElementById("answer");

function simInt(first, sec, third){
    let int = Number(first) * Number(sec) * Number(third);
    let sim = (int) / 100;
    return sim;
}

function compInt(first, sec, third){
    let amount = Number(first) * Number(Math.pow((1 + sec/100),third));
    let comp =(amount) - Number(first);
    return comp;
}

function displayAnswer1(){
    answer.innerText = simInt(firstInput.value, secondInput.value, thirdInput.value);
}

function displayAnswer2(){
    answer.innerText = compInt(firstInput.value, secondInput.value, thirdInput.value);
}

btnsim.addEventListener("click", displayAnswer1);
btncomp.addEventListener("click", displayAnswer2);
