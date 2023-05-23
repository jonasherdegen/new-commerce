gsap.registerPlugin(ScrollTrigger);

let apHero = gsap.timeline({
  scrollTrigger: {
    trigger: ".section.ap-hero",
    start: "20% top",
    end: "bottom top",
    scrub: 1,
    ease: "ease",
    //toggleActions: "play play stop reverse",
    markers: false
  }
});
apHero.to(".container.ap-hero", {
  opacity: 0,
  scale: 0,
  ease: "Power4.out"
});
apHero.to(
  ".ap-hero-title",
  {
    opacity: 0,
    y: 96,
    ease: "Power4.out"
  },
  "<"
);
apHero.to(
  ".ap-hero-button-wrap",
  {
    opacity: 0,
    y: 16,
    ease: "Power4.out"
  },
  "<"
);
