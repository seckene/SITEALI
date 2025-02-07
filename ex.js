const tete =document.querySelector("p");
console.log(tete);
window.addEventListener("scroll",()=>{
if (scrollY>100) {
    tete.style.visibility="hidden";

}
else{
    scrollY>90
    tete.style.visibility="visible";
    
}
})

