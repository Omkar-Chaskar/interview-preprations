let fieldA = document.querySelector("#field-1");
let fieldB = document.querySelector("#field-2");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let div = document.querySelector("#div");
let mult = document.querySelector("#mult");
let result = document.querySelector("#result");

add.addEventListener("click", function (){
    let A = Number(fieldA.value);
    let B = Number(fieldB.value);
    let resultValue = A + B ;
    result.innerHTML = resultValue;
})

sub.addEventListener("click", function (){
    let A = Number(fieldA.value);
    let B = Number(fieldB.value);
    let resultValue = A - B ;
    result.innerHTML = resultValue;
})

mult.addEventListener("click", function (){
    let A = Number(fieldA.value);
    let B = Number(fieldB.value);
    let resultValue = A * B ;
    result.innerHTML = resultValue;
})

div.addEventListener("click", function (){
    let A = Number(fieldA.value);
    let B = Number(fieldB.value);
    let resultValue = A / B ;
    result.innerHTML = resultValue;
})