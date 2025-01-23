<template>
    <div>
        <div class="topContainer">
            <!-- NAVMENU BAR START -->
            <nav class="parentNav">
                <section class="childNav">


                    <!-- HAMBURGER -->
                    <section class="hamburger" id="hamburger">
                        <div class="hambLine line-1"></div>
                        <div class="hambLine line-2"></div>
                        <div class="hambLine line-3"></div>
                    </section>

                    <!-- NAV MENUS -->
                    <ul class="topNavMenu">
                        <!-- HOME -->
                        <li>
                            <NuxtLink to="/"><img src="/assets/resource/homeIcon.svg" alt=""></NuxtLink>
                        </li>

                        <li>
                            <NuxtLink to="cat/sara-desh">সারাদেশ</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/rajniti">রাজনীতি</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/bidesh">বিদেশ</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/khela-dhula">খেলাধূলা</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/dhormiyo">ধর্মীয়</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/binodon">বিনোদন</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/orthoniti">অর্থনীতি</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/motamot">মতামত</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/oporadh">অপরাধ</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/sahitya">সাহিত্য</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="cat/sompadokiyo">সম্পাদকীয়</NuxtLink>
                        </li>
                    </ul>

                    <!-- DARK BACKGROUND -->
                    <div class="darkBackground"></div>
                    <!-- SEARCH BUTTON -->
                    <section class="searchBar">
                        <i class="bi bi-search"></i>
                        <i class="bi bi-x"></i>
                        <div class="searchBox">
                            <input type="text" name="" id="searchBox" v-model.trim="searchQuery"
                                placeholder="এখানে লিখুন...">
                            <input type="button" value="খুঁজুন" @click="triggerSearch">
                        </div>
                    </section>

                </section>


            </nav>
            <!-- NAVMENU BAR END -->
        </div>
        <div class="parentResNav">
            <div class="parentResNavBG"></div>
            <div class="childResNav">
                <div class="resNav2">
                    <!-- NAV MENU 1 -->
                    <a href="#" class="resNav2Menu">
                        <!-- MENU DETAILS-->
                        <ul class="resNav2MenuName navHover">
                            <i class="bi bi-circle-fill navIndicatorCircle"></i>
                            <p>সর্বশেষ সংবাদ</p>
                        </ul>
                        <!-- HORIZONTAL LINE -->
                        <div class="bottomBorder"></div>
                    </a>
                    <!-- NAV MENU 2 -->
                    <div class="resNav2Menu">
                        <!-- MENU -->
                        <ul class="resNav2MenuName navHover">
                            <i class="bi bi-circle-fill"></i>
                            <p>সর্বশেষ</p>
                            <i class="bi bi-chevron-right"></i>
                        </ul>
                        <!-- SUBMENUS -->
                        <div class="resNavSubMenuBar">
                            <a href="#a">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#b">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#c">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#d">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#e">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#f">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                        </div>
                        <!-- HORIZONTAL LINE -->
                        <div class="bottomBorder"></div>
                    </div>
                    <!-- NAV MENU 3 -->
                    <a href="#" class="resNav2Menu">
                        <!-- MENU DETAILS-->
                        <ul class="resNav2MenuName navHover">
                            <i class="bi bi-circle-fill navIndicatorCircle"></i>
                            <p>সর্বশেষ সংবাদ</p>
                        </ul>
                        <!-- HORIZONTAL LINE -->
                        <div class="bottomBorder"></div>
                    </a>
                    <!-- NAV MENU 4 -->
                    <a href="#" class="resNav2Menu">
                        <!-- MENU DETAILS-->
                        <ul class="resNav2MenuName navHover">
                            <i class="bi bi-circle-fill navIndicatorCircle"></i>
                            <p>সর্বশেষ সংবাদ</p>
                        </ul>
                        <!-- HORIZONTAL LINE -->
                        <div class="bottomBorder"></div>
                    </a>

                    <!-- NAV MENU 5 -->
                    <div class="resNav2Menu">
                        <!-- MENU -->
                        <ul class="resNav2MenuName navHover">
                            <i class="bi bi-circle-fill"></i>
                            <p>সর্বশেষ</p>
                            <i class="bi bi-chevron-right"></i>
                        </ul>
                        <!-- SUBMENUS -->
                        <div class="resNavSubMenuBar">
                            <a href="#a">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#b">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#c">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#d">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#e">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#f">
                                <i class="bi bi-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                        </div>
                        <!-- HORIZONTAL LINE -->
                        <div class="bottomBorder"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onBeforeMount } from 'vue';
const route = useRouter();
const searchQuery = ref('');
const triggerSearch = () => {
    if (searchQuery.value.trim()) {
        const freeSearch = encodeURIComponent(searchQuery.value);
        route.push({ path: '/search', query: { q: freeSearch } });
    }
};




// Global variable declaration
let isOpen = false;

const openNav = () => {
    const hamburger = document.getElementById("hamburger");
    const line1 = document.querySelector(".hamburger .line-1");
    const line2 = document.querySelector(".hamburger .line-2");
    const line3 = document.querySelector(".hamburger .line-3");

    const resNav = document.querySelector(".parentResNav");
    const parentResNavBG = document.querySelector(".parentResNav .parentResNavBG");

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
        resNav.style.transition = "margin-left 0.3s ease";

        document.body.style.overflow = "hidden";
        isOpen = true;
    }

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
        }, 300);

        document.body.style.overflow = "auto";
        isOpen = false;
    }

    hamburger.onclick = function () {
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    parentResNavBG.onclick = function () {
        if (isOpen) {
            closeMenu();
        }
    };
}

const subMenu = () => {
    const menuName = document.querySelectorAll(".resNav2MenuName");

    menuName.forEach(function (item) {

        item.onclick = function () {
            const iconRotate = item.querySelector(".resNav2MenuName .bi-chevron-right");
            iconRotate.classList.toggle("iconRotate");

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

                const subMenuItems = item.querySelectorAll(".resNavSubMenuBar li");
                subMenuItems.forEach(function (subMenuItem) {
                    subMenuItem.onclick = function (event) {
                        event.stopPropagation();
                    };
                });
            });
        };
    });
}

// STARTS
const fixedNav = () => {
    const parentResNav = document.querySelector(".parentResNav");
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

const searchBarAnimation = () => {
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

    darkBackground.onclick = function () {
        searchBox.classList.remove("visible");
        darkBackground.style.top = "-100%";
        search.style.display = "block";
        cross.style.display = "none";
        isOpen = !isOpen;
    };
};





// MOUNT
onMounted(() => {
    openNav();
    subMenu();
    fixedNav();
    searchBarAnimation();
});

</script>

<style lang="scss" scoped></style>