const tete =document.querySelector("p");
const svv =document.querySelector(".svv");
const burger =document.querySelector(".burger");
const closeee =document.querySelector(".close");
const btn1 =document.querySelector("#btn1");
console.log(closeee);
console.log(burger);
console.log(svv);
console.log(tete);
console.log(btn1)
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



btn1.addEventListener("click",()=>{
   btn1.className ="lolo";
   
})
