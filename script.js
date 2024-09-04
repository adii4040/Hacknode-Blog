function expandTrend(){
          let showMore = document.querySelector(".showMore button")
          let articleBox = document.querySelector(".trending-article")

          showMore.addEventListener("click",function(){
                 showMore.style.display="none"   
                 articleBox.style.height="100%"
          })
}

expandTrend()


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
       
       console.log("bye")
       show=false
}
}

function showSearch(){
          if(!show){
                    gsap.to(".search-box",{
                              opacity:1,
                              height:"100px",
                              duration:0.4
                    })
                    show=true
          }else{
                    gsap.to(".search-box",{
                              opacity:0,
                              height:"-100px",
                              duration:0.5
                    })
                    show=false
          }
}





const searchInput = document.querySelector("#search");
const searchInputBox = document.querySelector(".search-input");

searchInput.addEventListener("focus", function() {
  searchInputBox.classList.add("active");
});

searchInput.addEventListener("blur", function() {
  searchInputBox.classList.remove("active");
});





let tl = gsap.timeline()

window.addEventListener("load", function(){
       tl.to(".loader",{
              opacity:0,
              display:"none",
              delay:2
              
       })
})



/*----------Header Animation-------------*/



tl.from(".left-content h1 ,.left-content p, .input-wrapper ",{
       y:"50px",
       opacity:0,
       delay:0.5,
       duration:0.6,
       stagger:0.2,
       ease: "slow(0.7,0.7,false)",
})




if (window.innerWidth > 767) {
       tl.from(".caption h4, .caption p, .arrow", {
           y: "50px",
           opacity: 0,
           duration: 0.6,
           stagger: 0.5,
           scrollTrigger: {
               trigger: ".caption h4, .caption p, .arrow",
               scroller: "body",
               start: "top 90%",
               end: "top 85%",
               scrub: 2
           }
       });
   
       tl.from(".post", {
           opacity: 0,
           y: "30px",
           scale: 0.8,
           stagger: 0.2,
           scrollTrigger: {
               trigger: ".p2-leftContent .post",
               scroller: "body",
               start: "top 100%",
               end: "top -10%",
               scrub: 2
           }
       }, "anim");
   
       tl.from(".article, .user", {
           opacity: 0,
           scale: 0.9,
           stagger: 0.5,
           scrollTrigger: {
               trigger: ".article, .user",
               scroller: "body",
               start: "top 100%",
               end: "top -50%",
               scrub: 2
           }
       }, "anim");
   
       tl.from(".pageNum ul li", {
           opacity: 0,
           stagger: 0.5,
           scrollTrigger: {
               trigger: ".pageNum ul li",
               scroller: "body",
               start: "top 90%",
               end: "top 70%",
               scrub: 2
           }
       });
   
       tl.from(".aboutFoot, .address", {
           opacity: 0,
           y: "100px",
           stagger: 0.5,
           scrollTrigger: {
               trigger: ".aboutFoot, .address",
               scroller: "body",
               start: "top 95%",
               end: "top 50%",
               scrub: 2
           }
       }, "anim2");
   
       tl.from(".list-left li, .list-right li", {
           opacity: 0,
           y: "100px",
           scrollTrigger: {
               trigger: ".list-left li, .list-right li",
               scroller: "body",
               start: "top 95%",
               end: "top 50%",
               scrub: 2
           }
       }, "anim2");
   
       tl.from(".foot3 p, .foot3 span, .foot3 .submit, .footer-down .left, .footer-down .right", {
           opacity: 0,
           y: "50px",
           stagger: 0.2,
           scrollTrigger: {
               trigger: ".foot3 p, .foot3 span, .foot3 .submit, .footer-down .left, .footer-down .right",
               scroller: "body",
               markers:true,
               start: "top 95%",
               end: "top 50%",
               scrub: 2
           }
       }, "anim2");
  

      }


 