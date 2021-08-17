var inputText = document.querySelector("#input");
var btnH1 = document.querySelector("#heading-1");
var btnH2 = document.querySelector("#heading-2");
var btnH3 = document.querySelector("#heading-3");
var msg = document.querySelector("#msg");

btnH1.addEventListener("click", function(){
    let text = `<h1>${inputText.value}</h1>`; 
    msg.innerHTML = text ;
})

btnH2.addEventListener("click", function(){
    let text = `<h2>${inputText.value}</h2>`; 
    msg.innerHTML = text ;
})

btnH3.addEventListener("click", function(){
    let text = `<h3>${inputText.value}</h3>`; 
    msg.innerHTML = text ;
})