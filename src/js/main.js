import gsap from "gsap";
var tl = gsap.timeline({ repeat: -1 });
tl.to(".touch", {
  scale: 0.5,
  duration: 2,
  ease: "elastic.out(1,0.3)",
});
tl.to(".touch", {
  scale: 1,
  duration: 2,
  ease: "elastic.out(1,0.3)",
});
