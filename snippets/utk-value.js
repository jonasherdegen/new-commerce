// Capture hubspotutk on form submission
function getCookieValue() {
  let cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    );

  let utk = cookies["hubspotutk"] || "";

  let utkForm = document.getElementById("hubspotutk");
  if (utkForm) {
    utkForm.value = utk;
  }

  let pageName = document.title;
  let pageURL = window.location.href;

  let pageNameForm = document.getElementById("page-name");
  if (pageNameForm) {
    pageNameForm.value = pageName;
  }
  let pageURLForm = document.getElementById("page-url");
  if (pageURLForm) {
    pageURLForm.value = pageURL;
  }

  setTimeout(getCookieValue, 1000);
}

window.addEventListener("load", getCookieValue);
