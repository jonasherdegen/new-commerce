// create plyr settings
let playerComponent = $(".ncs23-aftermovie-video-hold");
let player = new Plyr(playerComponent.find(".video")[0], {
  controls: ["play", "progress", "current-time", "mute", "fullscreen"],
  resetOnEnd: true
});
