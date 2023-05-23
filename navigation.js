// Header Code

let mm = gsap.matchMedia();

//enter the loop
let tlHeaderBar = gsap.timeline({
  repeat: -1,
  defaults: { duration: 64, ease: "none" }
});
tlHeaderBar.fromTo(
  ".header-info-track",
  {
    xPercent: 0
  },
  {
    xPercent: -50
  }
);
//Specification timeline speed for banner
let object = {
  value: 1
};

//Desktop only
mm.add("(min-width: 992px)", () => {
  //Header Info Bar Interaction
  $(".header-info-bar").on("mouseenter", function () {
    gsap.to(".header-info-link-indicator", {
      scale: 1.1,
      x: "0.93em",
      duration: 0.2
    });

    gsap.to(object, {
      value: 4,
      duration: 0.6,
      onUpdate: () => {
        tlHeaderBar.timeScale(object.value);
      }
    });
  });

  $(".header-info-bar").on("mouseleave", function () {
    gsap.to(".header-info-link-indicator", {
      scale: 1,
      x: "0em",
      duration: 0.2
    });

    gsap.to(object, {
      value: 1,
      duration: 0.6,
      onUpdate: () => {
        tlHeaderBar.timeScale(object.value);
      }
    });
  });
});

// Header Nav Trigger

//Specification
let menuTriggerEl = $("#nav-trigger-desktop");
let menuTriggerElMobile = $("#nav-trigger-mobile");

let menuNavIcon = $(".menu-trigger");
let menuContain = $(".menu-contain");

let menuContainMobile = $(".header-nav-mobile-wrap");

let navDuration = 0.6;
let navEase = "expo.out";

//Tablet and Desktop
mm.add("(min-width: 768px)", () => {
  //Logo Interaction
  $(".header-logo-wrap").on("mouseenter", function () {
    gsap.to(this, {
      scale: 1.1,
      duration: 0.2,
      ease: "Power4.out"
    });
  });
  $(".header-logo-wrap").on("mouseleave", function () {
    gsap.to(this, {
      scale: 1,
      duration: 0.2,
      ease: "Power4.out"
    });
  });

  // First and second click function
  $(menuTriggerEl).click(function () {
    let check = $(this).data("clicks");
    if (check) {
      gsap.to(menuContain, {
        width: "0px",
        duration: navDuration,
        ease: navEase
      });
      gsap.to(menuNavIcon, {
        rotate: 0,
        duration: navDuration,
        ease: navEase
      });
    } else {
      gsap.to(menuContain, {
        width: "auto",
        duration: navDuration,
        ease: navEase
      });
      gsap.to(menuNavIcon, {
        rotate: -225,
        duration: navDuration,
        ease: navEase
      });
    }
    $(this).data("clicks", !check);
  });

  // Hover Interaction on Nav Trigger
  $(menuNavIcon).on("mouseenter", function () {
    gsap.to(this, {
      scale: 1.1,
      duration: 0.2,
      ease: "Power4.out"
    });
  });
  $(menuNavIcon).on("mouseleave", function () {
    gsap.to(this, {
      scale: 1,
      duration: 0.2,
      ease: "Power4.out"
    });
  });
});

//Mobile Portrait and down
mm.add("(max-width: 767px)", () => {
  // First and second click function up to mobile portrait
  $(menuTriggerElMobile).click(function () {
    let check = $(this).data("clicks");
    if (check) {
      gsap.to(menuContainMobile, {
        height: "0px",
        duration: navDuration,
        ease: navEase
      });
      gsap.to(menuNavIcon, {
        rotate: 0,
        duration: navDuration,
        ease: navEase
      });
    } else {
      gsap.to(menuContainMobile, {
        height: "auto",
        duration: navDuration,
        ease: navEase
      });
      gsap.to(menuNavIcon, {
        rotate: -225,
        duration: navDuration,
        ease: navEase
      });
    }
    $(this).data("clicks", !check);
  });
});
