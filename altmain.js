const counterText = document.getElementById("counter")
const btn = document.querySelectorAll(".btn")
let count = parseInt(counterText.innerHTML);


btn.forEach( i => {
    i.addEventListener("click", () => {
        switch (i.value) {
            case "+":
                count++;
                break;
            case "0":
                count = 0;
                break;
            case "-":
                count--;
                break;
        }

        count >= 0 ? counterText.innerHTML = count :  alert ("No se puede contar por debajo de 0")

    })
})