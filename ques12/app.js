var inputPassword = document.querySelector("#input-password");
var msg = document.querySelector("#msg");
var btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", function(){
    if(inputPassword.value.length < 10){
        inputPassword.style.color = "red";
        msg.style.display = "none";
    }else {
        msg.style.display = "block";
        btnSubmit.style.display = "none";
        inputPassword.style.color = "green";
    }
})