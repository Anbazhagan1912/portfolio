let about = document.getElementById("about")
const con = document.querySelector(".skils")
const pro = document.querySelector(".contacts")
const menu = document.querySelector(".menu")
const container = document.querySelector(".container")
let num=0;
const ham = document.querySelector("#ham")
ham.addEventListener('click',()=>{
  if(num ==0){
    menu.style.transform="translateX(0px)"

    num+=1;
  }else{
    menu.style.transform="translateX(-400px)"
    num=0
  }

})
gsap.from(".conte", {opacity:0, x: 100, duration: 1,delay:1});
gsap.from("nav", {opacity:0, y:10, duration: 1,delay:1.3});


let options = {
    root: null, // relative to document viewport 
    rootMargin: '5px', // margin around root. Values are similar to css property. Unitless values not allowed
    threshold: 0.7  // visible amount of item shown in relation to root
 };

 let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry,intersectionRatio)=>{
        console.log(intersectionRatio);
        if(entry.isIntersecting){
           observer.unobserve(about)

           gsap.to("#acontent",{opacity:1,x:10,duration:1})
        }
    })
},options);
let observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry,intersectionRatio)=>{
        console.log(intersectionRatio);
        if(entry.isIntersecting){
           observer.unobserve(con)

           gsap.to("#ccontent",{opacity:1,duration:1})
           gsap.to(".development",{opacity:1 ,duration:1})
        }
    })
},options);
let observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry,intersectionRatio)=>{
        console.log(intersectionRatio);
        if(entry.isIntersecting){
          gsap.to(".contacts",{opacity:1,y:30,duration:1})
          
        }
    })
},options);
observer.observe(about)
observer1.observe(con)
observer2.observe(pro)