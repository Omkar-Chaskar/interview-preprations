var inputText = document.querySelector("#input");
var btnRed = document.querySelector("#red");
var btnGreen = document.querySelector("#green");
var btnBlue = document.querySelector("#blue");
var msg = document.querySelector("#msg");

btnRed.addEventListener("click", function (){
    msg.style.color = "red";
    msg.innerHTML = inputText.value;
})

btnGreen.addEventListener("click", function (){
    msg.style.color = "green";
    msg.innerHTML = inputText.value;
})

btnBlue.addEventListener("click", function (){
    msg.style.color = "blue";
    msg.innerHTML = inputText.value;
})