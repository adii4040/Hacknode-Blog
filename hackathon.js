let show = false
function expandMenu(){
       console.log('hello')
       if(!show){
       document.querySelector(".nav-list").style.display="block"
       gsap.from(".nav-list",{
              opacity:0,
              x:"100px",

       })
       show=true
}else{
       document.querySelector(".nav-list").style.display="none"
       // gsap.to(".nav-list",{
       //        opacity:0,
       //        display:"none",
       //        x:"100px",
              
       // })
       console.log("bye")
       show=false
}
}


const tl = gsap.timeline()

gsap.matchMedia().add("(min-width: 1024px)", () => {
       // Animations that only run on screens larger than 1024px
       tl.from(".head-content h1, .head-content p",{
              opacity:0,
              x:"-100px",
              delay:0.5,
              duration:0.4,
              stagger:0.3
       })
       
       tl.from(".platforms .box",{
              opacity:0,
              y:"-100px",
              delay:0.5,
              duration:0.4,
              stagger:0.3,
              scrollTrigger:{
                     trigger:".platforms .box",
                     scroller:"body",
                     // markers:true,
                     start:"top 60%",
                end:"top 10%",
                scrub:2
       
              }
       })
   });
 
tl.from(".aboutFoot, .address ",{
       opacity:0,
       y:"100px",
       stagger:0.5,
       stagger:0.2,

       scrollTrigger:{
              trigger:".aboutFoot , .address",
              scroller:"body",
              // markers:true,
              start:"top 95%",
              end:"top 50%",
              scrub:2

       }
}, "anim2")
tl.from(".list-left li , .list-right li ",{
       opacity:0,
       y:"100px",
      

       scrollTrigger:{
              trigger:".list-left li, .list-right li ",
              scroller:"body",
              // markers:true,
              start:"top 95%",
              end:"top 50%",
              scrub:2

       }
}, "anim2")
tl.from(".foot3 p, .foot3 span, .foot3 .submit ",{
       opacity:0,
       y:"50px",
       stagger:0.2,
      

       scrollTrigger:{
              trigger:".foot3 p, .foot3 span, .foot3 .submit ",
              scroller:"body",
              // markers:true,
              start:"top 95%",
              end:"top 50%",
              scrub:2

       }
}, "anim2")
tl.from(".footer-down .left, .footer-down .right",{
       opacity:0,
       y:"100px",
       stagger:0.2,
      

       scrollTrigger:{
              trigger:".foot3 p, .foot3 span, .foot3 .submit ",
              scroller:"body",
              // markers:true,
              start:"top 60%",
              end:"top 50%",
              scrub:2

       }

})