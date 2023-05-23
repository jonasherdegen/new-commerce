gsap.registerPlugin(ScrollTrigger);

//
//
//
//
//
// Latest Episode Banner Hero
let tlLatestEp = gsap.timeline({
  repeat: -1,
  defaults: { duration: 40, ease: "none" }
});
tlLatestEp.fromTo(
  ".podcast-hero-latest-episode-mover",
  {
    xPercent: 0
  },
  {
    xPercent: -50
  }
);

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
  defaults: { duration: 20, ease: "none" }
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
