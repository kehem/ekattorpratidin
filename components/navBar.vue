<template>
    <div class="topContainer">
        <!-- NAVMENU BAR START -->
        <nav class="parentNav">
            <section class="childNav">


                <!-- HAMBURGER 550px RESPONSIVE-->
                <section class="hamburger" id="hamburger">
                    <div class="hambLine line-1"></div>
                    <div class="hambLine line-2"></div>
                    <div class="hambLine line-3"></div>
                </section>
                <section class="logoAltHamb">
                    <!-- LOGO -->
                    <a href="/">
                        <NuxtImg class="h-i w-i" src="/ekattorpratidin-logo.svg" alt="Logo" loading="lazy"
                            placeholder="./placeholder.svg" placeholder-class="autoSetImg" />
                    </a>
                </section>

                <!-- NAV MENUS -->
                <ul class="topNavMenu">
                    <li>
                        <NuxtLink to="cat/সারাদেশ">সারাদেশ</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/রাজনীতি">রাজনীতি</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/বিদেশ">বিদেশ</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/খেলাধুলা">খেলাধুলা</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/ধর্মীয়">ধর্মীয়</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/বিনোদন">বিনোদন</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/অর্থনীতি">অর্থনীতি</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/মতামত">মতামত</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/অপরাধ">অপরাধ</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/সাহিত্য">সাহিত্য</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="cat/সম্পাদকীয়">সম্পাদকীয়</NuxtLink>
                    </li>
                </ul>

                <!-- DARK BACKGROUND -->
                <div class="darkBackground" ref="darkBackground" @click="darkBackgroundClick"></div>
                <!-- SEARCH BUTTON -->
                <section class="searchBar" @click="searchBar">
                    <i class="m-search2" ref="search"></i>
                    <i class="m-m-cross hide" ref="cross"></i>
                    <div class="searchBox" ref="searchBoxContainer" @click.stop>
                        <input type="text" name="" id="searchBox" v-model.trim="searchQuery"
                            placeholder="এখানে লিখুন...">
                        <input type="button" value="খুঁজুন" @click="triggerSearch">
                    </div>
                </section>

            </section>


        </nav>
        <!-- NAVMENU BAR END -->
    </div>
    <!-- RESPONSIVE FOR 550PX -->
    <div class="parentResNav">
        <div class="parentResNavBG"></div>

        <div class="childResNav">
            <div class="resNav2">
                <!-- NAV MENU 1 -->
                <NuxtLink to="cat/সারাদেশ" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>সারাদেশ</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 2 -->
                <NuxtLink to="cat/রাজনীতি" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>রাজনীতি</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 3 -->
                <NuxtLink to="cat/বিদেশ" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>বিদেশ</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 4 -->
                <NuxtLink to="cat/খেলাধুলা" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>খেলাধুলা</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 5 -->
                <NuxtLink to="cat/ধর্মীয়" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>ধর্মীয়</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 6 -->
                <NuxtLink to="cat/বিনোদন" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>বিনোদন</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 7 -->
                <NuxtLink to="cat/অর্থনীতি" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>অর্থনীতি</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 8 -->
                <NuxtLink to="cat/মতামত" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>মতামত</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 9 -->
                <NuxtLink to="cat/অপরাধ" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>অপরাধ</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 10 -->
                <NuxtLink to="cat/সাহিত্য" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>সাহিত্য</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 11 -->
                <NuxtLink to="cat/চাকরি" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>চাকরি</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <!-- NAV MENU 12 -->
                <NuxtLink to="cat/সম্পাদকীয়" class="resNav2Menu">
                    <!-- MENU DETAILS-->
                    <ul class="resNav2MenuName navHover">
                        <i class="m-circle navIndicatorCircle"></i>
                        <p>সম্পাদকীয়</p>
                    </ul>
                    <!-- HORIZONTAL LINE -->
                    <div class="bottomBorder"></div>
                </NuxtLink>
                <div class="pad-b--100"></div>

                <!-- SUBMENUS -->
                <!-- <div class="resNav2Menu">
                        MENU
                        <ul class="resNav2MenuName navHover">
                            <i class="m-circle"></i>
                            <p>সর্বশেষ</p>
                            <i class="m-chevron-right"></i>
                        </ul>
                        SUBMENUS
                        <div class="resNavSubMenuBar">
                            <a href="#a">
                                <i class="m-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#b">
                                <i class="m-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#c">
                                <i class="m-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#d">
                                <i class="m-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#e">
                                <i class="m-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                            <a href="#f">
                                <i class="m-chevron-right"></i>
                                <p>সিলেট</p>
                            </a>

                        </div>
                        HORIZONTAL LINE
                        <div class="bottomBorder"></div>
                    </div> -->

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
const route = useRouter();
const searchQuery = ref('');

// Define refs
const searchBoxContainer = ref(null);
const darkBackground = ref(null);
const cross = ref(null);
const search = ref(null);
const isOpen = ref(false);


const searchBar = () => {

    if (isOpen.value) {
        // Close the search bar
        searchBoxContainer.value?.classList.remove("visible");
        darkBackground.value.style.top = "-100%";
        cross.value.style.display = "none";
        search.value.style.display = "block";
    } else {
        // Open the search bar
        searchBoxContainer.value?.classList.add("visible");
        darkBackground.value.style.top = "0";
        cross.value.style.display = "block";
        search.value.style.display = "none";
    }
    isOpen.value = !isOpen.value; // Toggle state
};

const darkBackgroundClick = () => {
    searchBoxContainer.value?.classList.remove("visible");
    darkBackground.value.style.top = "-100%";
    search.value.style.display = "block";
    cross.value.style.display = "none";
    isOpen.value = false;
};




const triggerSearch = () => {
    if (searchQuery.value.trim()) {
        const freeSearch = encodeURIComponent(searchQuery.value);
        route.push({ path: '/search', query: { q: freeSearch } });
    }
};





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
        isOpen.value = true;
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
        isOpen.value = false;
    }

    hamburger.onclick = function () {
        if (isOpen.value) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    parentResNavBG.onclick = function () {
        if (isOpen.value) {
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





// MOUNT
onMounted(() => {
    openNav();
    subMenu();
    fixedNav();
});

</script>

<style lang="scss" scoped></style>