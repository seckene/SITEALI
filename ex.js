const tete =document.querySelector("p");
const svv =document.querySelector(".svv");
const burger =document.querySelector(".burger");
const closeee =document.querySelector(".close");
const btn1 =document.querySelector("#btn1");
const espase=document.querySelector('.espase');
const point1=document.querySelector('.p0');
const Point2=document.querySelector('.p9');
const NEXT =document.querySelector(".NEXT");
const h00 =document.querySelector("h00");
const btn5 =document.querySelector(".btn5")
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

document.addEventListener("DOMContentLoaded",()=>{


    if (point1 && Point2) {
        point1.addEventListener("click",()=>{
            point1.style.background="black"
             Point2.style.background="white"
        })

    }
    Point2.addEventListener("click",()=>{
        point1.style.background="white"
         Point2.style.background="black"
         h00.style.display="flex"
         btn5.style.display="none"

    })



})