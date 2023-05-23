gsap.registerPlugin(ScrollTrigger, Draggable);

//
//
//
//
//
// Hero Video Control
let heroVid = $("#hero-video");

heroVid.each(function () {
  $("video", this).get(0).play();
});

$("#hero-video-sound-toggle").on("click", function () {
  let myVideo = heroVid.find("video");
  $(this).toggleClass("playing");
  if ($(this).hasClass("playing")) {
    // First action
    myVideo.prop("muted", false);
  } else {
    // Second action
    myVideo.prop("muted", true);
  }
});

//
//
//
//
//
// Podcast Home Slider
function podcastSlides() {
  let postcastSwiper = new Swiper(".swiper.is-podcast", {
    grabCursor: true,
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    },
    breakpoints: {
      // when window width is >= 320px
      240: {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 16
      },
      // when window with is >= 480px
      480: {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 16
      },
      // when window with is >= 768px
      768: {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 16
      },
      // when window with is >= 992px
      992: {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 32
      }
    }
  });
}
podcastSlides();

//
//
//
// Highlight Section
// timeline scrubbing
// filling each word one by one
function runSplit() {
  typeSplit = new SplitType("#highlight-copy", { types: "words" });
}
runSplit();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container.is-home-highlight",
    start: "top 60%",
    end: "bottom bottom",
    scrub: 2,
    markers: false
  }
});

tl.from(".word", {
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "Power4.out"
});

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
  ".nc-banner-mover.summit",
  {
    xPercent: 0
  },
  {
    xPercent: 50
  },
  0
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

Draggable.create(".nc-banner-contain", { type: "y" });
