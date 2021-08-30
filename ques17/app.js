var btnRun = document.querySelector(".btn-run");
var msg = document.querySelector(".msg")

const objectOne = {name:"Ram", power:"2500", yuga:"Treta"};
const objectTwo = {name:"Krishna", power:"2345", yuga:"Dwapar"};

let objectOneTotalPower = function(){
    let newName= splice(objectOne.name);
    let count = newName.length;
    let multiPower = (count * 35) + objectOne.power;
    return multiPower;
}

let objectTwoTotalPower = function(){
    let newName= splice(objectTwo.name);
    let count = newName.length;
    let multiPower = (count * 35) + objectTwo.power;
    return multiPower;
}

btnRun.addEventListener("click", function clickHandler(){
    checkPower();
})

function checkPower(){
    if (objectOneTotalPower.multiPower < objectTwoTotalPower.multiPower) {
        console.log(objectTwo.name , objectTwo.power , objectTwoTotalPower)
    } else {
      
        console.log(objectOne.name , objectOne.power, objectOneTotalPower)  
    }
}




