//trend report 2023
gsap.registerPlugin(ScrollTrigger);

//
//
//
//
//
//
//
// Draggable Home Banner Strips
let bannerSpeed = {
  value: 1
};

let tlBanner = gsap.timeline({
  repeat: -1,
  defaults: { duration: 30, ease: "none" }
});
tlBanner.fromTo(
  ".nc-banner-mover.default",
  {
    xPercent: 0
  },
  {
    xPercent: -50
  }
);

tlBanner.fromTo(
  ".nc-banner-mover.podcast",
  {
    xPercent: 0
  },
  {
    xPercent: -50
  },
  0
);

tlBanner.fromTo(
  ".nc-banner-mover.summit",
  {
    xPercent: 0
  },
  {
    xPercent: 50
  },
  0
);

$(".nc-banner-mover").on("mouseenter", function () {
  gsap.to(bannerSpeed, {
    value: 0,
    duration: 1.2,
    onUpdate: () => {
      tlBanner.timeScale(bannerSpeed.value);
    }
  });
});

$(".nc-banner-mover").on("mouseleave", function () {
  gsap.to(bannerSpeed, {
    value: 1,
    duration: 1.2,
    onUpdate: () => {
      tlBanner.timeScale(bannerSpeed.value);
    }
  });
});
