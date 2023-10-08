let outputEl = document.getElementById("output")
let btnCEl = document.getElementById("btnC")
let btn_deleteEl = document.getElementById("btn_delete")
let btn_plusEl = document.getElementById ("btn_plus")
let btn1El = document.getElementById ("btn1")
let btn2El = document.getElementById ("btn2")
let btn3El = document.getElementById ("btn3")
let minusEl = document.getElementById ("minus")
let btn4El = document.getElementById ("btn4")
let btn5El = document.getElementById ("btn5")
let btn6El = document.getElementById ("btn6")
let multipleEl = document.getElementById ("multiple")
let btn7El = document.getElementById ("btn7")
let btn8El = document.getElementById ("btn8")
let btn9El = document.getElementById ("btn9")
let equalEl = document.getElementById ("equal")
let btn0El = document.getElementById ("btn0")
let powerEl = document.getElementById ("power")
let divisionEl = document.getElementById ("division")
document.title = "calculator"

btnCEl.addEventListener("click",function(){
    outputEl.innerHTML = ``
})
btn_deleteEl.addEventListener("click",function(){
    outputEl.innerHTML = outputEl.innerHTML.toString().slice(0,-1) 
})
btn0El.addEventListener("click", function(){
    outputEl.innerHTML += `0`
})
btn1El.addEventListener("click", function(){
    outputEl.innerHTML += `1`
})
btn2El.addEventListener("click", function(){
    outputEl.innerHTML += `2`
})
btn3El.addEventListener("click", function(){
    outputEl.innerHTML += `3`
})
btn4El.addEventListener("click", function(){
    outputEl.innerHTML += `4`
})
btn5El.addEventListener("click", function(){
    outputEl.innerHTML += `5`
})
btn6El.addEventListener("click", function(){
    outputEl.innerHTML += `6`
})
btn7El.addEventListener("click", function(){
    outputEl.innerHTML += `7`
})
btn8El.addEventListener("click", function(){
    outputEl.innerHTML += `8`
})
btn9El.addEventListener("click", function(){
    outputEl.innerHTML += `9`
})
btn_plusEl.addEventListener("click", function(){
    outputEl.innerHTML += `+`
})
minusEl.addEventListener("click", function(){
    outputEl.innerHTML += `-`
})
multipleEl.addEventListener("click", function(){
    outputEl.innerHTML += `*`
})
powerEl.addEventListener("click", function(){
    outputEl.innerHTML += `**`
})
divisionEl.addEventListener("click", function(){
    outputEl.innerHTML += `/`
})
equalEl.addEventListener("click", function(){
    outputEl.innerHTML = eval(outputEl.innerHTML)
    

})