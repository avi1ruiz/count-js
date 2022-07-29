const counterText = document.getElementById("counter")
const plusBtn = document.getElementById("plus")
const zeroBtn = document.getElementById("zero")
const minusBtn = document.getElementById("minus")

let i = 0;


plusBtn.addEventListener("click", () => {
    i = parseInt(counterText.innerHTML);
    i++;
    counterText.innerHTML = i;
})

minusBtn.addEventListener("click", () => {
    i = parseInt(counterText.innerHTML);
    i--;
    if (i >= 0){
        counterText.innerHTML = i;
    } else {
        alert("No se puede bajar del cero")
    }
    
})

zeroBtn.addEventListener("click", () => {
    i = 0;
    counterText.innerHTML = i;
})