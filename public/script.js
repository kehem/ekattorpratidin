print = console.log;
document.addEventListener("DOMContentLoaded", () => {
  // openNav();
  // subMenu();
  // fixedNav();
  // searchBarAnimation();
  newsGallery();
});

// let isOpen = false;
function openNav() {
  const hamburger = document.getElementById("hamburger");
  const line1 = document.querySelector(".hamburger .line-1");
  const line2 = document.querySelector(".hamburger .line-2");
  const line3 = document.querySelector(".hamburger .line-3");

  const resNav = document.querySelector(".parentResNav");
  const parentResNavBG = document.querySelector(
    ".parentResNav .parentResNavBG"
  );
  const childResNav = document.querySelector(".parentResNav .childResNav");

  // Function to open the menu
  function openMenu() {
    line1.style.transform = "rotate(45deg)";
    line1.style.marginTop = "0.6rem";
    line1.style.transition = "all 0.3s ease";

    line2.style.width = "0";
    line2.style.opacity = "0";
    line2.style.transition = "all 0.3s ease";

    line3.style.transform = "rotate(-45deg)";
    line3.style.marginTop = "-0.8rem";
    line3.style.transition = "all 0.3s ease";

    resNav.style.display = "flex";
    resNav.style.marginLeft = "0";
    resNav.style.marginLeft = "0";
    resNav.style.transition = "margin-left 0.3s ease";

    document.body.style.overflow = "hidden";
    isOpen = true;
  }

  // Function to close the menu
  function closeMenu() {
    line1.style.transform = "";
    line1.style.marginTop = "";
    line1.style.transition = "";

    line2.style.width = "";
    line2.style.opacity = "";
    line2.style.transition = "";

    line3.style.transform = "";
    line3.style.marginTop = "";
    line3.style.transition = "";

    resNav.style.marginLeft = "-100%";
    resNav.style.transition = "margin-left 0.3s ease";

    setTimeout(() => {
      resNav.style.display = "none";
    }, 300); // Wait for the transition to complete before hiding

    document.body.style.overflow = "auto";
    isOpen = false;
  }

  // ONCLICK EVENT
  hamburger.onclick = function () {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Close menu when clicking outside of it
  parentResNavBG.onclick = function () {
    if (isOpen) {
      closeMenu();
    }
  };
}

function subMenu() {
  const menuName = document.querySelectorAll(".resNav2MenuName");

  menuName.forEach(function (item) {
    item.onclick = function () {
      print(item);
      const iconRotate = item.querySelector(
        ".resNav2MenuName .bi-chevron-right"
      );
      iconRotate.classList.toggle("iconRotate");
    };
  });

  //   SHOW/HIDE MENUBAR TRANSITION
  const allMenu = document.querySelectorAll(".resNav2Menu");
  allMenu.forEach(function (item) {
    item.onclick = function () {
      const subItem = item.querySelector(".resNavSubMenuBar");

      if (subItem.style.height && subItem.style.height !== "0px") {
        subItem.style.opacity = 0;
        subItem.style.height = "0px";
        subItem.style.transition = "all 0.3s ease";
      } else {
        subItem.style.height = subItem.scrollHeight + "px";
        subItem.style.opacity = 1;
        subItem.style.transition = "all 0.3s ease";
      }
    };

    // Add event listener to submenu items to stop event propagation
    const subMenuItems = item.querySelectorAll(".resNavSubMenuBar li");
    subMenuItems.forEach(function (subMenuItem) {
      subMenuItem.onclick = function (event) {
        event.stopPropagation();
      };
    });
  });
}

// NAVBAR FIXED AFTER 500PX
function fixedNav() {
  const parentResNav = document.querySelector(".parentResNav");
  // Initial setup: make sure the .sticky class is applied
  parentResNav.classList.add("staticResNav");

  window.onscroll = function () {
    if (window.pageYOffset > 300) {
      parentResNav.classList.remove("staticResNav");
      parentResNav.classList.add("fixedResNav");
    } else {
      parentResNav.classList.add("staticResNav");
      parentResNav.classList.remove("fixedResNav");
    }
  };
}

// SEARCHBAR VISIBLE
function searchBarAnimation() {
  const searchBar = document.querySelector(".searchBar");
  const searchBox = document.querySelector(".searchBar .searchBox");
  const darkBackground = document.querySelector(".darkBackground");
  const cross = document.querySelector(".searchBar .bi-x");
  const search = document.querySelector(".searchBar .bi-search");

  searchBar.onclick = function () {
    if (isOpen) {
      searchBox.classList.remove("visible");
      darkBackground.style.top = "-100%";
      cross.style.display = "none";
      search.style.display = "block";
    } else {
      searchBox.classList.add("visible");
      darkBackground.style.top = "0";
      cross.style.display = "block";
      search.style.display = "none";
    }
    isOpen = !isOpen;
  };

  searchBox.onclick = function (event) {
    event.stopPropagation();
  };
  // CLICK TO HIDE DARK BACKGROUND
  darkBackground.onclick = function () {
    searchBox.classList.remove("visible");
    darkBackground.style.top = "-100%";
    search.style.display = "block";
    cross.style.display = "none";
    isOpen = !isOpen;
  };
}

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
