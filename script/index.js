// to animate  hero section
window.onload=function(){
    gsap.from(".hero",{
    y:"-50%",
    duration:2,
    ease:"bounce"
    
})
}

//to animate about section
 gsap.registerPlugin(ScrollTrigger);
 gsap.from(".about",{
    scrollTrigger:{
        trigger:".about",
        start:"top 80%",
        toggleActions: "play none none none"

    },
    opacity:0,
    y:200,
    duration:1,
 });
 gsap.from(".about .right",{
    scrollTrigger:{
        trigger:".about .right",
        start:"top 80%"
    },
    opacity:0,
    y:100,
 })
  gsap.from(".about .image",{
    scrollTrigger:{
        trigger:".about .right",
        start:"top 80%"
    },
    opacity:0,
    y:100,
 })

 //to animate education  section
 gsap.from(".education .container .content .left",{
    scrollTrigger:{
    trigger:".education .container .content .left",
    start:"top 80%",
    },
     opacity:0,
     y:50,
 }
)
gsap.from(".education .container .content .right",{
    scrollTrigger:{
    trigger:".education .container .content .right",
    start:"top 80%",
    },
    opacity:0,
    y:50,
}
)
 //to animate Projects  section
  gsap.from(".projects",{
    scrollTrigger:{
    trigger:".projects",
    start:"top 80%",
    },
     opacity:0,
     y:100,
 }
 //to animate Certificates section
)
  gsap.from(".certificates",{
    scrollTrigger:{
    trigger:".certificates",
    start:"top 80%",
    },
     opacity:0,
     y:100,
 }
)
 //to animate Touch section

   gsap.from(".touch",{
    scrollTrigger:{
    trigger:".touch",
    start:"top 80%",
    },
     opacity:0,
     y:100,
 }
)
//Scrolling   page By  press on menue header
let desktop_menue_elements=document.querySelectorAll("header ul li");
let about_section=document.querySelector(".about")
let education_section=document.querySelector(".education");
let projects_section=document.querySelector(".projects");
let certificates_section=document.querySelector(".certificates");
let touch_section=document.querySelector(".touch");

let sections=[about_section,education_section,projects_section,certificates_section,touch_section];
  //function to scrolling  the page By Desktop menue
 desktop_menue_elements.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
        for(let i=0;i<sections.length;i++){
            if(sections[i].className===e.currentTarget.id){
               sections[i].scrollIntoView({behavior:"smooth",block:"start"})
        
            };
        };
    });
 });
  //function to  set select  class on sected dektop element
 desktop_menue_elements.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        desktop_menue_elements.forEach((ele)=>{
            ele.classList.remove("select")
        });
        e.currentTarget.classList.add("select")
    })
 })
  //function to scrolling  the page By Resposnive menue menue
  let resposnive_menue_element=document.querySelectorAll(".responsive_menue ul li");
  resposnive_menue_element.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
       for(let i=0;i<sections.length;i++){
        if(sections[i].className===e.currentTarget.id){
           sections[i].scrollIntoView({behavior:"smooth",block:"start"});
          
            // responsive_menue.classList.remove("view")
         gsap.to(".responsive_menue",
        {x:"100%", duration:2, ease:"power4", },
           )
        }
       }
    })
  })
 //Open And close Responsive menue
 let close_button_responsive_menue=document.querySelector(".responsive_menue .close h6");
 let menue_icon=document.querySelector("header .icon_bar");
 let responsive_menue=document.querySelector(".responsive_menue")
 menue_icon.addEventListener("click",()=>{
    // if(responsive_menue.classList.contains("view")){
    //     responsive_menue.classList.remove("view")
        
    // }else{
    //     responsive_menue.classList.add("view")
    //       gsap.to(".responsive_menue",
    //     {x:"0%", duration:2, ease:"bounce", },
    // )
    // }
       responsive_menue.classList.add("view")
          gsap.to(".responsive_menue",
        {x:"0%", duration:2, ease:"bounce", },
    )
 })
    //to handle  close sighn on responsive menue to close  menue

 close_button_responsive_menue.addEventListener("click",()=>{
     gsap.to(".responsive_menue",
        {x:"110%", duration:2, ease:"power4", },
    )
 })


 