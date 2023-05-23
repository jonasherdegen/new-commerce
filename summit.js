gsap.registerPlugin(ScrollTrigger);

//
//
//
//
//
// Summit Recap Video Control
let summitRecapVid = document.getElementById("summit-recap-video");

$("#summit-vid-recap-toggle").on("click", function () {
  $(this).toggleClass("playing");
  if ($(this).hasClass("playing")) {
    // First action
    summitRecapVid.play();
  } else {
    // Second action
    summitRecapVid.pause();
  }
});

$("#summit-vid-recap-toggle").on("click", function () {
  if ($(this).hasClass("playing")) {
    gsap.to(this, { opacity: 0, duration: 0.2, ease: "ease" });
  } else {
    gsap.to(this, { opacity: 1, duration: 0.2, ease: "ease" });
  }
});

//
//
//
//
//
//
//
// Moving banner strips
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
  ".nc-banner-mover.summit",
  {
    xPercent: 0
  },
  {
    xPercent: 50
  },
  0
);

//
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
