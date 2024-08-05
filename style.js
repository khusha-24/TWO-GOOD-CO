function gsap_locomotive(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
gsap_locomotive();

function navbarAnimation() {
    gsap.to("#nav-icon svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#right-nav .links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()

function font_annimation(){
    gsap.from("#page1 h1",{
        y:30,
        opacity:0,
        delay:0.9,
        duration:0.4,
        stagger:0.3
    })
}
font_annimation();


function video_hover() {
    let vd = document.querySelector("#video");
    let play = document.querySelector("#play-hover");
    vd.addEventListener("mouseenter", function () {
        gsap.to(play, {
            opacity: 1,
            scale: 1,
            duration:0.1
        })
    })

    vd.addEventListener("mouseleave", function () {
        gsap.to(play, {
            scale: 0,
            opacity: 0
        })
    })

    document.addEventListener("mousemove", function (move) {
        gsap.to("#play-hover", {
            left: move.x,
            top: move.y
        })
    })
}
video_hover()

// let button_section = document.querySelector(".section");
// let button_hover = document.querySelector(".card-button");
// button_hover.addEventListener("mouseenter",function(){
//     button_hover.style.slideDown()
// })

$().ready(function(){
    $(".btn-1").mouseenter(function () { 
        $(".imges1").slideDown("slow");
        // $("#scroll-btn1").css("border-radius","30px 30px 0 0")
        // $(".h1").css("border-radius","30px 30px 0px 0px");
    })
})
$().ready(function(){
    $(".btn-1").mouseleave(function () { 
        $(".imges1").slideUp("slow");
        // $("#scroll-btn1").css("border-radius","30px")
        // $("#h1").css("border-radius","0 0 30px 30px")
        //  $(".h1").css("border-radius","0px 0px 30px 30px") 
        
    });
})


document.addEventListener("mousemove" ,function(move){
    gsap.to(".cursor",{
        left:move.x,
        top:move.y
    })
})

function Enter_cursor()
{
document.querySelector("#product1").addEventListener("mouseenter",function(){
 gsap.to(".cursor",{
    transform : "translate(-50% ,-50%)",
    scale:1,
    opacity:1,
    backgroundColor:"rgb(230, 230, 230)"
 })
})
document.querySelector("#product2").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
       transform : "translate(-50% ,-50%)",
       scale:1,
       opacity:1,
       backgroundColor:"rgb(238, 238, 238)"
    })
   })
   document.querySelector("#product3").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
       transform : "translate(-50% ,-50%)",
       scale:1,
       opacity:1,
       backgroundColor:"rgb(237, 230, 230)"
    })
   })
   document.querySelector("#product4").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
       transform : "translate(-50% ,-50%)",
       scale:1,
       opacity:1,
       backgroundColor:"rgb(214, 224, 224)"
    })
   })
} 
Enter_cursor()

document.querySelector("#product1").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
       scale:0,
       opacity:0
    })
   })
   document.querySelector("#product2").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
       scale:0,
       opacity:0
    })
   })
   document.querySelector("#product3").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
       scale:0,
       opacity:0
    })
   })
   document.querySelector("#product4").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
       scale:0,
       opacity:0
    })
   })
  //  function scrollline(){
  //   gsap.to(".line .hr-style", {
  //     transform: "translatex(100%)",
  //     scrollTrigger: {
  //       trigger: "#page5",
  //       scroller: ".main",
  //       start: "left 0",
  //       end: "left 100%",
  //       scrub: true,
  //     }
  //  })
  // }
  // scrollline()

 
  function cercle(){
  
    let c1 = document.querySelector(".c1");
    let img=document.querySelector("#img");
    c1.style.backgroundColor="black";  
    img.style.display="block";
     }
  function cercle2(){
    let c2 = document.querySelector(".c2");
    let img=document.querySelector("#img");
    c2.style.backgroundColor="black";
    img.style.display="block";
  }
  function cercle3(){
    let c3 = document.querySelector(".c3");
    let img=document.querySelector("#img");
    c3.style.backgroundColor="black";
    img.style.src="strock/quote-animation.svg";
  }
  function cercle4(){
    let c4 = document.querySelector(".c4");
    let img=document.querySelector("#img");
    c4.style.backgroundColor="black";
    img.style.display="block";
  }
  function cercle5(){
    let c5 = document.querySelector(".c5");
    let img=document.querySelector("#img");
    c5.style.backgroundColor="black";
    img.style.display="block";
  }

  
 
