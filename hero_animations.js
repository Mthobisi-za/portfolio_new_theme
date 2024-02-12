gsap.from('.title', {
    opacity: 0,
    x: -200,
    duration: 2,
    ease: "power1.inOut"
});
gsap.from('.subtitle', {
    opacity: 0,
    x: -200,
    y: -100,
    duration: 1.5,
    ease: "power1.inOut"
});
gsap.from('.text_hero', {
    // opacity: 0,
    duration: 1.5,
    scale: 0,
    y: -100,
    ease: "power1.inOut"
});
gsap.from('.btn', {
    // opacity: 0,
    duration: 2,
    scale: 0,
    ease: "power1.inOut"
});

gsap.from('.hero_img', {
    // opacity: 0,
    duration: 2,
    // scale: 0,
    rotate: 10,
    ease: "power1.inOut"
});
gsap.from('.skills_2', {
    scrollTrigger: ".express_js",
    // opacity: 0,
    duration: 5,
    // scale: 0,
    ease: "power1.inOut",
    width: 0,
    opacity: 0
});

// gsap.to(".hero_img", {
//     scrollTrigger: ".btn_wrapper_long", // start the animation when ".box" enters the viewport (once)
//     // opacity: 0,
//     duration: 2,
//     // scale: 0,
//     rotate: 5,
//     ease: "power1.inOut"
// });