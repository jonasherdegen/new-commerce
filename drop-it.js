//useful code produced, but not needed in the process..

$(".header-info-bar").on("mouseenter", function () {
  gsap.to(object, {
    value: 0,
    duration: 1.2,
    onUpdate: () => {
      tlBanner.timeScale(object.value);
    }
  });
});

$(".header-info-bar").on("mouseleave", function () {
  gsap.to(object, {
    value: 1,
    duration: 1.2,
    onUpdate: () => {
      tlBanner.timeScale(object.value);
    }
  });
});

//Header Lines

$(menuTriggerEl).on("click", function () {
  gsap.to(menuContain, {
    width: "auto",
    duration: durationNav,
    ease: navEase
  });
  gsap.to(menuNavIcon, {
    rotate: -225,
    duration: durationTrigger,
    ease: navEase
  });
});

$(menuTriggerEl).on("mouseleave", function () {
  gsap.to(menuContain, {
    width: "0px",
    duration: durationNav,
    ease: navEase
  });
  gsap.to(menuNavIcon, {
    rotate: 0,
    scale: 1,
    duration: durationTrigger,
    ease: navEase
  });
});

$(menuTriggerEl).on("mouseenter", function () {
  gsap.to(menuNavIcon, {
    scale: 1.1,
    duration: durationNav,
    ease: navEase
  });
});
