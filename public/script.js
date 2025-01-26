document.addEventListener("DOMContentLoaded", () => {
  newsGallery();
});




// NEWS GALLERY
function newsGallery() {
  const thumbs = document.querySelectorAll(".thumbs");
  const displayGalleryImage = document.querySelector(
    ".inner-displayGalleryImage img"
  );
  let currentIndex = 0;
  const displayGalleryImageTitle = document.getElementById(
    "displayGalleryImageTitle"
  );
  const keyframeMove = document.querySelector(
    ".inner-gallerySubtitle .keyframeMove"
  );
  let intervalId;

  // SET DEFAULT DISPLAY IMAGE
  displayGalleryImage.src = thumbs[currentIndex].querySelector("img").src;

  // UPDATE DEFAULT TITLE
  displayGalleryImageTitle.innerHTML =
    thumbs[currentIndex].querySelector(".galImgTitle").innerHTML;

  // AUTO DISPLAY IMAGE CHANGE BY 5 SECONDS
  let autoChange = function () {
    if (currentIndex == thumbs.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    // UPDATE IMAGE
    displayGalleryImage.src = thumbs[currentIndex].querySelector("img").src;
    // UPDATE TITLE
    displayGalleryImageTitle.innerHTML =
      thumbs[currentIndex].querySelector(".galImgTitle").innerHTML;
  };

  // Start the interval and store its ID
  intervalId = setInterval(autoChange, 5000);

  // CLICK TO CHANGE DISPLAY IMAGE
  function clickToChange() {
    thumbs.forEach((item) => {
      item.onclick = function () {
        // IMAGE UPDATE
        displayGalleryImage.src = item.querySelector("img").src;
        // UPDATE TITLE
        displayGalleryImageTitle.innerHTML =
          item.querySelector(".galImgTitle").innerHTML;

        // RESTART ANIMATION ONCLICK
        keyframeMove.classList.remove("keyframeMove");
        void keyframeMove.offsetWidth;
        keyframeMove.classList.add("keyframeMove");

        // STOP THE AUTOCHANGE INTERVAL
        clearInterval(intervalId);

        // START AUTOCHANGE AGAIN AFTER 5 SECONDS
        intervalId = setInterval(autoChange, 5000);
      };
    });
  }
  clickToChange();
}
