let elInput = document.querySelector(".input")
let elNatija = document.querySelector(".natija")
let elBtn = document.querySelector(".btn")

elBtn.addEventListener("click",function (){
    let fool = Math.floor((elInput.value - 32) * (5 / 9) )

    elNatija.textContent = `${fool} gradus`
});