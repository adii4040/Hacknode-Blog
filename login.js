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


function submit(e){
       e.preventdefault()
}

