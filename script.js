const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  function scrollLocoTrig() {
      gsap.registerPlugin(ScrollTrigger);
  
      // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      locoScroll.on("scroll", ScrollTrigger.update);
  
      // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed",
      });
  
      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();
  
  }
  
  scrollLocoTrig()
  
  const crsr = document.querySelector(".cursor")
  const videos = document.querySelectorAll("video")
  const h1 = document.querySelector("h1")
  console.log(h1);
  
  document.addEventListener("mousemove", (dets)=>{
    crsr.style.display = "block"
    crsr.style.left = dets.x + 5 + "px"
    crsr.style.top = dets.y + 5 + "px"
  })
  
  document.addEventListener("mouseleave", (dets) => {
    crsr.style.display = "none"
  });

  h1.addEventListener("mouseenter",()=>{
    crsr.style.width = 150 + "px"
    crsr.style.height = 150 + "px"
  })
  
  h1.addEventListener("mouseleave", () => {
    crsr.style.width = 20 + "px";
    crsr.style.height = 20 + "px";
  });
  
  videos.forEach((video) => {
    video.addEventListener("mouseenter",()=>{
      crsr.style.width = 150 + "px"
      crsr.style.height = 150 + "px"
      crsr.style.backgroundColor = "#000"
      crsr.style.mixBlendMode = "normal"
      document.querySelector(".h4").style.opacity = 1;
      document.querySelector(".h4").style.fontSize = 50 + "px";
    })
    
    video.addEventListener("mouseleave", () => {
      crsr.style.width = 20 + "px";
      crsr.style.height = 20 + "px";
      crsr.style.backgroundColor = "#edbfff";
      crsr.style.mixBlendMode = "difference";
      document.querySelector(".h4").style.opacity = 0;
      document.querySelector(".h4").style.fontSize = 0;
      document.querySelector(".h4").style.fontSize = 0 + "px";
    });
  });

  gsap.from("#page1 h1,#page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
  });
  
  gsap.from("#page2 h1", {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      //markers: true,
      trigger: "#page3",
      scroller: "#main",
      start: "-70% bottom",
      end: "bottom top"
    }
  })

  gsap.from("#page3 h1", {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      //markers: true,
      trigger: "#page4",
      scroller: "#main",
      start: "-70% bottom",
      end: "bottom top"
    }
  })

  gsap.from("#page3 img", {
    opacity: 0,
    duration: 4,
    scrollTrigger: {
      //markers: true,
      trigger: "#page4",
      scroller: "#main",
      start: "-70% bottom",
      end: "bottom top"
    }
  })
  
  var tl = gsap.timeline({
      scrollTrigger: {
          //markers: true,
          trigger:"#page1 h1",
          scroller:"#main",
          start: "27% 10%",
          end: "-1% -7%",
          scrub: 5,
      }
  })
  
  
  tl.to("#page1 h1",{
      x:-100
  }, "anime")
  
  tl.to("#page1 h2",{
      x: 100
  }, "anime")
  
  tl.to("#page1 video",{
      width: "85%"
  }, "anime")
  
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "#main",
      start: "top -90%",
      end: "top -80%",
      scrub: 3,
    },
  });
  
  tl2.to("#main",{
      backgroundColor: "#000"
  })

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "#main",
      start: "top -550%",
      end: "top -570%",
      scrub: 3,
    },
  });
  
