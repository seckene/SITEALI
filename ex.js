let reste =document.querySelector(".reste")
let burger=document.querySelector(".boss")
console.log(reste)
burger.addEventListener("click",()=>{
    reste.style.display= "block" ;
    burger.style.display="none"
})





let croix =document.querySelector(".croix")

croix.addEventListener("click",()=>{
  burger.style.display="flex"
    reste.style.display= "none" ;   
})


let passtext = document.querySelector(".passtext");

passtext.addEventListener("mouseover", (e) => {
    passtext.style.visibility = "visible";
});