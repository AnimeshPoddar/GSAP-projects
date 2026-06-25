
gsap.to(".box1", {
    x: 1200,
    duration: 2,
    rotate: 360,
    delay: 1
})

let t1 = gsap.timeline();

t1.to(".box1", {
    x: 1200,
    rotate: 360,
    duration: 1.5,
    delay: 1
})

t1.to(".box2", {
    x: 1200,
    rotate: 360,
    duration: 1.5,
    delay: 1
})

t1.to(".box3", {
    x: 1200,
    rotate: 360,
    duration: 1.5,
    delay: 1
})


let t2 = gsap.timeline();

t2.from(".nav h1", {
    y: -100,
    duration: 0.5,
    delay: 0.5
})

t2.from(".nav-links h4", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
})

t2.from(".author-info", {
    opacity: 0,
    scale: 0.2,
    duration: 0.5,
    y:20
})