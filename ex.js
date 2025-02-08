const tete =document.querySelector("p");
const svv =document.querySelector(".svv");
const burger =document.querySelector(".burger");
const closeee =document.querySelector(".close");
console.log(closeee);
console.log(burger);
console.log(svv);
console.log(tete);
window.addEventListener("scroll",()=>{
if (scrollY<10) {
    tete.style.visibility="hidden";

}
else{
    scrollY>50;
    tete.style.visibility="visible";
    
}
});

svv.addEventListener("click",()=>{
    burger.style.display="block";
     closeee.style.display="block"
})

closeee.addEventListener("click",()=>{
    burger.style.display="none";
    closeee.style.display="none"
})