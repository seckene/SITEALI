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
const h5 =document.querySelector("h5")
const h6 =document.querySelector("h6")
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
            point1.style.border="2px solid black"
             Point2.style.border="2px solid black"
         

        })

    }
    Point2.addEventListener("click",()=>{
        point1.style.border="2px solid black"
         Point2.style.border="2px solid black"
         h00.style.display="flex"
         btn5.style.display="none"
    h5.style.display="none"
    h6.style.display="flex"
    })



})

btn1.addEventListener("click",()=>{
    espase.style.display="flex";

})