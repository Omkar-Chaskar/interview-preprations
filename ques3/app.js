const text = document.querySelector("#input-text");
let msg = document.querySelector("#msg");
let incre = document.querySelector("#increment");
let decre = document.querySelector("#decrement");

let i = 10;

incre.addEventListener("click", function(){
    i=i+2;
    let output = `<p style ="font-size:${i}px;">${text.value}</p>`

    msg.innerHTML = output ;
    console.log("increment", i);
})
decre.addEventListener("click", function(){
    i=i-2;
    let output = `<p style ="font-size:${i}px;">${text.value}</p>`

    msg.innerHTML = output ;
    console.log("decrement", i);
})