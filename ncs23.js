//
//
// Speaker Item Interaction
// open more-info on click
$(".ncs23-speaker-info-trig").each(function () {
  $(this).on("click", function () {
    gsap.to($(this).siblings(".ncs23-speaker-info-body"), {
      height: "auto",
      duration: 0.6,
      ease: "ease"
    });
    $(this).attr("data-lenis-prevent", "");
  });
});
// close more-info on hover out
$(".ncs23-speaker-item-contain").each(function () {
  $(this).on("mouseleave", function () {
    gsap.to($(this).find(".ncs23-speaker-info-body"), {
      height: "0px",
      duration: 0.6,
      ease: "ease"
    });
    $(this).removeAttr("data-lenis-prevent");
  });
});

//
//
// NCS Speaker Program
// Custom tab component, as webflows native one interferes..
$(document).ready(function () {
  // Initially hide all tab panels except the first one
  $(".ncs23-program-tab-content:not([data-tab='1'])").hide();

  // Add click event listener to the tab menu items
  $(".ncs23-program-tab-select").click(function () {
    // Remove the "active" class from all tab menu items and add it to the clicked one
    $(".ncs23-program-tab-select").removeClass("active");
    $(this).addClass("active");

    // Get the tab number from the clicked tab menu item's data attribute
    var tabNumber = $(this).data("tab");

    // Hide all tab panels and show only the one corresponding to the clicked tab menu item
    $(".ncs23-program-tab-content").hide();
    var targetTabContent = $(
      ".ncs23-program-tab-content[data-tab='" + tabNumber + "']"
    );
    targetTabContent.show();

    // Scroll to the top of the respective element
    $("html, body").animate(
      {
        scrollTop: targetTabContent.offset().top
      },
      400
    );
  });
});

//
// Section Entry
gsap.registerPlugin(ScrollTrigger);

let programContainer = $(".ncs23-program-tabs-wrap");
let siteHeader = $(".section.is-header");
let sectionContainer = $(".container.ncs23-program");

// Header in/out
let headerTl = gsap.timeline({
  scrollTrigger: {
    trigger: programContainer,
    start: "top 20%",
    end: "bottom 20%",
    scrub: false,
    ease: "Power4.easeInOut",
    toggleActions: "play reverse play reverse",
    markers: false
  }
});
headerTl.to(siteHeader, { duration: 0.3, y: "-100%" });

// Container growth
let programTl = gsap.timeline({
  scrollTrigger: {
    trigger: programContainer,
    start: "top 20%",
    end: "bottom 20%",
    scrub: false,
    ease: "Power4.easeInOut",
    toggleActions: "play reverse play reverse",
    markers: false
  }
});
programTl.to(sectionContainer, {
  duration: 0.3,
  paddingLeft: 0,
  paddingRight: 0
});
