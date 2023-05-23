// Javascript implementation for the above approach

// Utility function to check if
// the digits of the current
// integer forms a wave pattern
function check() {
  // Convert the number to a string
  let S = new String(counter.value);

  // Loop to iterate over digits
  for (let i = 0; i < S.length; i++) {
    if (i == 0) {
      // Next character of
      // the number
      let next = i + 1;

      // Current character is
      // not a local minimum
      if (next < S.length) {
        if (S[i] >= S[next]) {
          return true;
        }
      }
    } else if (i == S.length - 1) {
      // Previous character of
      // the number
      let prev = i - 1;
      if (prev >= 0) {
        // Character is a
        // local maximum
        if (i & 1) {
          // Character is not
          // a local maximum
          if (S[i] <= S[prev]) {
            return false;
          }
        } else {
          // Character is a
          // local minimum
          if (S[i] >= S[prev]) {
            return true;
          }
        }
      }
    } else {
      let prev = i - 1;
      let next = i + 1;
      if (i & 1) {
        // Character is a
        // local maximum
        if (S[i] > S[prev] && S[i] > S[next]) {
        } else {
          return false;
        }
      } else {
        // Character is a
        // local minimum
        if (S[i] < S[prev] && S[i] < S[next]) {
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

// Driver Code

document.write(check(counter.value) ? "true" : "false");

// This code is contributed by gfgking.

function logIt() {
  console.log(check(counter.value));
}

// Highlight Section
// timeline scrubbing
// filling each word one by one
function runSplit() {
  typeSplit = new SplitType("#highlight-copy", { types: "words" });
}
runSplit();

let counter = { value: 0 };

let countWords = $(".word").toArray().length;

function fillWord() {
  let progress = Math.round(counter.value);
  if ($(".word").eq(progress).hasClass("is-fill")) {
    $(".word").eq(progress).removeClass("is-fill");
  } else {
    $(".word").eq(progress).addClass("is-fill");
  }
}

function outlineWord() {
  $(".word").removeClass("is-fill");
}

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home-highlight-contain",
    start: "top 90%",
    end: "bottom 90%",
    stagger: 1,
    scrub: false,
    markers: true
    //onUpdate: logIt
  }
});

tl.to(".word", { color: "white" });

tl.to(counter, {
  value: countWords,
  ease: "none"
});

//
//
//
//
// auto scrub images
// necessary for embed
<canvas></canvas>;

// code on page
// Looping Images:
// Set image to cover
function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
  if (arguments.length === 2) {
    x = y = 0;
    w = ctx.canvas.width;
    h = ctx.canvas.height;
  }
  offsetX = typeof offsetX === "number" ? offsetX : 0.5;
  offsetY = typeof offsetY === "number" ? offsetY : 0.5;
  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;
  var iw = img.width,
    ih = img.height,
    r = Math.min(w / iw, h / ih),
    nw = iw * r,
    nh = ih * r,
    cx,
    cy,
    cw,
    ch,
    ar = 1;
  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh; // updated
  nw *= ar;
  nh *= ar;
  cw = iw / (nw / w);
  ch = ih / (nh / h);
  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;
  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

// Apply interaction to all elements with this class
$(".scrub-section").each(function (index) {
  const canvas = $(this).find("canvas")[0];
  const embed = $(this).find(".embed")[0];
  const context = canvas.getContext("2d");
  function setCanvasSize() {
    canvas.width = embed.offsetWidth;
    canvas.height = embed.offsetHeight;
  }
  setCanvasSize();
  const frameCount = $(this).attr("total-frames");
  const urlStart = $(this).attr("url-start");
  const urlEnd = $(this).attr("url-end");
  const floatingZeros = $(this).attr("floating-zeros");
  const currentFrame = (index) =>
    `${urlStart}${(index + 1)
      .toString()
      .padStart(floatingZeros, "0")}${urlEnd}`;
  const images = [];
  const imageFrames = {
    frame: 0
  };
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
  gsap.to(imageFrames, {
    repeat: -1,
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    trigger: $(this),
    duration: 40,

    onUpdate: render
  });
  images[0].onload = render;
  function render() {
    context.clearRect(0, 0, embed.offsetWidth, embed.offsetHeight);
    drawImageProp(
      context,
      images[imageFrames.frame],
      0,
      0,
      embed.offsetWidth,
      embed.offsetHeight,
      0.5,
      0.5
    );
  }

  // Update canvas size & animation state
  let iOS = !!navigator.platform.match(/iPhone|iPod|iPad/);
  let resizeTimer;
  $(window).on("resize", function (e) {
    if (iOS) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        setCanvasSize();
        render();
      }, 250);
    } else {
      setCanvasSize();
      render();
    }
  });
});
