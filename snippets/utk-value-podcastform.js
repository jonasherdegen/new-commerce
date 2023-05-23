function getCookieValuePodcastForm() {
  let cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value)
      }),
      {}
    );

  let utk = cookies["hubspotutk"] || "";

  let utkForm = document.getElementById("hubspotutk-podcastform");
  if (utkForm) {
    utkForm.value = utk;
  }

  let pageName = document.title;
  let pageURL = window.location.href;

  let pageNameForm = document.getElementById("page-name-podcastform");
  if (pageNameForm) {
    pageNameForm.value = pageName;
  }
  let pageURLForm = document.getElementById("page-url-podcastform");
  if (pageURLForm) {
    pageURLForm.value = pageURL;
  }
}

window.addEventListener("load", function () {
  setTimeout(function () {
    getCookieValuePodcastForm();
  }, 1000);
});
