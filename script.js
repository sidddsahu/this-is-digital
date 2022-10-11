var swiper = new Swiper(".mySwiper", {
  slidesPerView:1.5,
  spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      color:"red",
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });

  const menu = document.querySelector(".greater");
  const cross = document.querySelector("#container-1");
  // const menu_overlay = document.querySelector(".menu-overlay");
  

  var flag = 0;
  menu.addEventListener("mousemove", function () {
   
    if(flag === 0){
      cross.style.transform = "translateY(0%)";
    
      flag  = 1
      
    }else{
      cross.style.transform = "translateY(-105%)";
     
      flag = 0
    }
  });

var overlay = document.querySelector(".overlay-container")
var kite = document.querySelector(".menu")


var flag = 0

kite.addEventListener("click",function(){
  if(flag === 0){
    overlay.style.transform = "translateX(0%)"
    flag = 1
  }else{
    overlay.style.transform = "translateX(100%)"
    flag = 0
  }
 
});

// kite.addEventListener("click",function(){
//   overlay.style.transform = "translateX(100%)"
// })


  
  // gsap.from("#page1",{
  //   // X:1500,
  //   // y:1500,
  //   scale:0,
  //   duration:2,
  //   opacity:0,
  // })


  gsap.from(".center",{
    // X:1500,
    delay:1,
    // y:500,
    // scale:0,
    duration:1,
    opacity:0,
  })


  
  gsap.from(".left .image img",{
    // X:1500,
    delay:1,
    y:500,
    scale:0,
    duration:1,
    opacity:0,
  })

  gsap.from(".right .top-image img",{
    // X:1500,
    
    delay:1,
    x:200,
    scale:0,
    duration:1,
    opacity:0,
  })


  gsap.from(".right .bottom-image img",{
    // X:1500,
    delay:1,
    y:-300,
    scale:0,
    duration:1,
    opacity:0,
  })





  gsap.from("#page2 h1",{
    scale:0.5,
    duration:1,
    opacity:0,
  
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        // markers:true,
        // scrub:true
    }
})



gsap.from("#page2 p",{
  scale:0,
  duration:1,
  opacity:0,

  scrollTrigger:{
      trigger:"#page2 p",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 90%",
      // markers:true,
      // scrub:true
  }
})



gsap.from("#page2 .div-3",{
  scale:0,
  duration:1,
  opacity:0,

  scrollTrigger:{
      trigger:"#page2 .div-3",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 90%",
      // markers:true,
      // scrub:true
  }
})



gsap.from("#page3 ",{
  scale:0,
  duration:1,
  opacity:0,

  scrollTrigger:{
      trigger:"#page3 ",
      scroller:"body",
      // markers:true,
      start:"top 100%",
      end:"top 90%",
      // markers:true,
      // scrub:true
  }
})


gsap.from("#page4 ",{
  scale:0,
  duration:1,
  opacity:0,

  scrollTrigger:{
      trigger:"#page4 ",
      scroller:"body",
      // markers:true,
      start:"top 100%",
      end:"top 90%",
      // markers:true,
      // scrub:true
  }
})



// gsap.from(".page5-left-image ",{
//   x:-400,
//   scale:0,
//   duration:0.5,
//   opacity:0,

//   scrollTrigger:{
//       trigger:".page5-left-image",
//       scroller:"body",
//       // markers:true,
//       start:"top 100%",
//       end:"top 90%",
//       // markers:true,
//       // scrub:true
//   }
// })



gsap.from("#page5 ",{
  // x:400,
  scale:0,
  duration:0.5,
  opacity:0,

  scrollTrigger:{
      trigger:"#page5",
      scroller:"body",
      // markers:true,
      start:"top 100%",
      end:"top 90%",
      // markers:true,
      // scrub:true
  }
})




gsap.from("#page6 ",{
  // x:400,
  scale:0.5,
  duration:0.5,
  opacity:0,

  scrollTrigger:{
      trigger:"#page6",
      scroller:"body",
      // markers:true,
      start:"top 100%",
      end:"top 90%",
      // markers:true,
      // scrub:true
  }
})





gsap.from("#page7 ",{
  // y:800,
  scale:0.5,
  duration:0.5,
  opacity:0,

  scrollTrigger:{
      trigger:"#page7",
      scroller:"body",
      // markers:true,
      start:"top 110%",
      end:"top 90%",
      // markers:true,
      // scrub:true
  }
})











  // gsap. form(".top-image",{
  //   x:60,
  //   duration:0.5,
  //   opacity:0,
  //   delay:0.5,
  // });

