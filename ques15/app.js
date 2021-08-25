var btnRun = document.querySelector(".btn-run");
var msg = document.querySelector(".msg")

const objectOne = {
    name :"Ram",
    age :"25",
    yuga:"Treta"
}
const objectTwo = {
    name :"Krishna",
    age :"31",
    yuga:"Dwapar"
}

btnRun.addEventListener("click",function clickHandler(){
    if(objectOne.age > objectTwo.age){
        msg.innerHTML = objectOne.name;
    } else{
        msg.innerHTML = objectTwo.name;
    }
})