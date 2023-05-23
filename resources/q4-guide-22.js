gsap.registerPlugin(ScrollTrigger);
// Q4 Guide 2022
// Hero Banner
let object = {
  value: 1
};

let tlBanner = gsap.timeline({
  repeat: -1,
  defaults: { duration: 14, ease: "none" }
});
tlBanner.fromTo(
  ".ebook-22-mover.is-one",
  {
    xPercent: 0
  },
  {
    xPercent: 50
  }
);

tlBanner.fromTo(
  ".ebook-22-mover.is-two",
  {
    xPercent: 0
  },
  {
    xPercent: -50
  },
  0
);

$(".ebook-22-mover").on("mouseenter", function () {
  gsap.to(object, {
    value: 0,
    duration: 1.2,
    onUpdate: () => {
      tlBanner.timeScale(object.value);
    }
  });
});

$(".ebook-22-mover").on("mouseleave", function () {
  gsap.to(object, {
    value: 1,
    duration: 1.2,
    onUpdate: () => {
      tlBanner.timeScale(object.value);
    }
  });
});

// Circle CTA
$(".ebook-22-circle-cta").on("mouseenter", function () {
  let tlCircle = gsap.timeline();

  tlCircle.to(this, {
    scale: 1.1,
    duration: 0.6,
    ease: "Power4.out"
  });
});
$(".ebook-22-circle-cta").on("mouseleave", function () {
  let tlCircle = gsap.timeline();

  tlCircle.to(this, {
    scale: 1,
    duration: 0.6,
    ease: "Power4.out"
  });
});

$(".ebook-22-circle-cta").on("mouseleave", function () {
  let tlCircle = gsap.timeline();

  tlCircle.to(this, {
    rotate: 360,
    duration: 0.6,
    ease: "Power4.out"
  });
  tlCircle.to(this, {
    rotate: 0,
    duration: 0,
    ease: "none"
  });
});

let tlCircleGrow = gsap.timeline({
  scrollTrigger: {
    trigger: ".container.ebook-22-reco",
    start: "top 60%",
    end: "bottom top",
    scrub: 2,
    markers: false
  }
});
tlCircleGrow.to(".ebook-22-circle-cta-wrap", { scale: 1.2 });

// Expert section
let tlExpert = gsap.timeline({
  scrollTrigger: {
    trigger: ".container.ebook-22-tips",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play none restart reset",
    ease: "Power4.out",
    duration: 2,
    markers: false
  }
});

tlExpert.from(".ebook-22-expert-item", {
  opacity: 0,
  y: 16,
  stagger: { each: 0.2, from: "end" }
});
