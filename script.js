var tl = gsap.timeline()

tl.to(".full", {
    delay: 0.7,
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})
.to(".up", {
    height: "100%",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut
})

gsap.to(".load-child",{
    transform: "translateY(-100%)",
    delay:0.7,
    duration:0.7
})

var new_tl = gsap.timeline()

new_tl.to(".loader",{
    delay: 0.7,
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})
.to("header",{
    height: "100%",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut
})

gsap.to("#spin", {
    rotate: 360,
    duration: 3,
    repeat: -1,
})

var time = gsap.timeline()

time.from(".child", {
    transform: "translateY(100%)",
    duration: 0.5,
    delay:1.8,
    stagger:0.2
})

gsap.to(".img-container", {
    rotate: 5,
    scrollTrigger: {
        trigger: ".main",
        end: "top 10%",
        start: "top 50%",
        scrub:1
    }
})

gsap.to(".text", {
    transform: "translate(10px, -50px)",
    scrollTrigger: {
        trigger: ".main",
        end: "top 10%",
        start: "top 50%",
        scrub:1
    }
})


gsap.from(".btn",{
    opacity: 0,
    scrollTrigger:{
        trigger: ".about",
        start: "top 40%",
        end:"top 20%",
        markers:false,
        scrub:1
    }
})

gsap.from(".first",{
    opacity: 0,
    scrollTrigger:{
        trigger: ".prefer",
        start: "top 70%",
        end:"top 20%",
        markers:false,
        scrub:1
    }
})