<template>
    <NuxtLayout>


        <!-- MAIN SECTION -->
        <main class="z-1 relative w-100 h-auto">
            <div class="local-padding"></div>

            <section class="relative g-res-3-col-container gap-20 fullWidth m-auto">

                <aside class="span-2">
                    <!-- ADS -->
                    <span class="w-100">
                        <!-- <NuxtImg class="img-w-res" v-if="newsnewsBody.ads" :src="newsnewsBody.ads.image" alt="বিজ্ঞাপন" /> -->
                    </span>
                    <section class="pad-tb--10 newsBodyPrint" ref="newsBodyPrint">





                        <!-- CATEGORY -->
                        <div
                            class="cat-section f f-just-start f-align-items-center gap-05 w-100 b-bottom-sun pad-b--10">
                            <NuxtLink v-if="newsBody?.Catagory" :to="`/cat/${newsBody.Catagory}`"
                                :key="newsBody.news_id" class="text-cat cat-hov-u">
                                <h3 class="text--l">{{ newsBody.Catagory }}</h3>
                            </NuxtLink>

                            <i class="m-chevrons-right text--l"></i>
                            <!-- TITLE -->
                            <p v-if="newsBody?.title" class="text-nowrap text--m text-dotted-1 pad-r--10">
                                {{ newsBody.title }}
                            </p>
                        </div>

                        <!-- TITLE -->
                        <div class="sun-title-text">
                            <span class="f gap-05 f-align-items-center" title="টাইটেল">
                                <h3 class="text--l" v-if="newsBody?.caption"> {{ newsBody.caption }}</h3>
                                <span class="headingTitleCircle"></span>
                            </span>
                            <h1 class="text--20 pad-t--05" v-if="newsBody?.title"> {{ newsBody.title }}</h1>
                        </div>

                        <hgroup class="z-5 t--35 f gap-10 pad-b--15 f-wrap f-just-between f-align-items-center"
                            id="onstickychange" data-top-height="">
                            <!-- PROTIBEDOK -->
                            <div class="f f-col" id="onstickyhide">
                                <!-- SUBTITLE -->
                                <span class="f gap-05">
                                    <div class="relative w--30 h--30">
                                        <NuxtImg v-if="newsBody?.reporter_profile"
                                            class="b-rad-50 w-i h-i asp-r-1 obj-fit-h"
                                            :src="`http://newstest.kehem.com/${newsBody.reporter_profile}`"
                                            :alt="newsBody.caption" />
                                        <NuxtImg v-else src="./placeholder.svg"
                                            class="b-rad-50 w-i h-i asp-r-1 obj-fit-h"></NuxtImg>
                                    </div>
                                    <div>
                                        <p class="protibedok-author" v-if="newsBody?.reporter_name"> {{
                                            newsBody.reporter_name }}
                                        </p>
                                        <!-- AUTHOR AND TIME -->
                                        <span class="time-color f gap-05">
                                            <p>প্রকাশ :</p>
                                            <time :datetime="newsBody.published_date" v-if="newsBody?.published_date">
                                                {{ newsBody.published_date
                                                }}</time>
                                        </span>
                                    </div>
                                </span>
                            </div>

                            <!-- SOCIAL SHARE -->
                            <div class="f f-wrap gap-05 f-just-center f-align-items-center sun-social-shares"
                                id="sun-social-shares">

                                <span class="relative t-0 cur-pointer" @click="facebook(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-facebook"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 cur-pointer" @click="messenger(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-messenger"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 cur-pointer" @click="whatsapp(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-whatsapp"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 cur-pointer" @click="twitter(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-twitter"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 cur-pointer" @click="linkedin(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-linkedin"></i>
                                    </span>
                                </span>

                                <!-- ACTION FUNCTIONALITIES -->
                                <span id="printButton" class="relative t-0 cur-pointer" @click="print">
                                    <span class="share-wave">
                                        <i class="m-print"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 plus-btn cur-pointer" @click="plusButton">
                                    <span class="share-wave">
                                        <i class="m-plus"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 minus-btn cur-pointer" @click="minusButton">
                                    <span class="share-wave">
                                        <i class="m-minus"></i>
                                    </span>
                                </span>
                            </div>
                        </hgroup>
                        <aside class="m-auto">
                            <!-- SOCIAL SHARE FLOAT-->
                            <div ref="socialShares" class="socialShares opacity-0">

                                <span class="relative t-0 cur-pointer" @click="facebook(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-facebook"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 cur-pointer" @click="messenger(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-messenger"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 cur-pointer" @click="whatsapp(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-whatsapp"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 cur-pointer" @click="twitter(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-twitter"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 cur-pointer" @click="linkedin(currentURL)">
                                    <span class="share-wave">
                                        <i class="m-linkedin"></i>
                                    </span>
                                </span>

                                <!-- ACTION FUNCTIONALITIES -->
                                <span id="printButton" class="relative t-0 cur-pointer" @click="print">
                                    <span class="share-wave">
                                        <i class="m-print"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 plus-btn cur-pointer" @click="plusButton">
                                    <span class="share-wave">
                                        <i class="m-plus"></i>
                                    </span>
                                </span>
                                <span class="relative t-0 minus-btn cur-pointer" @click="minusButton">
                                    <span class="share-wave">
                                        <i class="m-minus"></i>
                                    </span>
                                </span>
                            </div>
                            <!-- THUMBNAIL -->
                            <div class="news-thumbnail">
                                <div class="news-thumbs">
                                    <NuxtImg v-if="newsBody?.image" :src="`https://newstest.kehem.com${newsBody.image}`"
                                        alt="" />
                                </div>
                                <span class="news-sub-heading" v-if="newsBody?.img_caption">চিত্রঃ {{
                                    newsBody.img_caption }}</span>
                            </div>

                            <!-- ARTICLE -->
                            <article ref="article" class="text-color text-justify" v-if="newsBody?.news_details">







                                {{ newsBody.news_details }}
                            </article>
                        </aside>
                        <div class="local-padding"></div>
                    </section>
                </aside>

                <!-- সর্বশেষ পঠিত -->
                <aside class="span-1">
                    <p class="text--15 m-t---05 pad-b--05">সর্বশেষ খবর -</p>
                    <span class="f b-bottom-sun pad-t--03"></span>
                    <ul class="pad--05 b-all-sun">
                        <!-- NEWS -->
                        <li v-if="newsData?.by_date" v-for="news in newsData.by_date"
                            class="b-bottom-sun pad-lr--05 pad-tb--10">
                            <NuxtLink :to="`/news/${news.news_id}`" :key="news.news_id" class="f gap-10 text-color">
                                <div class="f-flex-1">
                                    <!-- HEADING -->
                                    <h3 class="link-hov-u">{{ news.title }}</h3>
                                    <!-- TIMER -->
                                    <div class="f gap--05 f-just-start f-align-items-center">
                                        <span class="w--08 f f-align-items-center">
                                            <i class="m-time"></i>
                                        </span>
                                        <p class="text--08 text-color"> {{ news.published_time_ago }}</p>
                                    </div>
                                </div>
                                <span class="d-block f-flex-1 sun-res-img-width">
                                    <NuxtImg class="img-w-res bordered" :src="`https://newstest.kehem.com${news.image}`"
                                        alt="" />
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>

                    <!-- সর্বাধিক  -->
                    <br><br>
                    <p class="text--15 m-t---05 pad-b--05">সর্বাধিক পঠিত -</p>
                    <span class="f b-bottom-sun pad-t--03"></span>
                    <ul class="pad--05 b-all-sun">
                        <!-- NEWS -->
                        <li v-if="newsData?.by_views" v-for="news in newsData.by_views"
                            class="b-bottom-sun pad-lr--05 pad-tb--10">
                            <NuxtLink :to="`/news/${news.news_id}`" :key="news.news_id" class="f gap-10 text-color">
                                <div class="f-flex-1">
                                    <!-- HEADING -->
                                    <h3 class="link-hov-u">{{ news.title }}</h3>
                                    <!-- TIMER -->
                                    <div class="f gap--05 f-just-start f-align-items-center">
                                        <span class="w--08 f f-align-items-center">
                                            <i class="m-time"></i>
                                        </span>
                                        <p class="text--08 text-color"> {{ news.published_time_ago }}</p>
                                    </div>
                                </div>
                                <span class="d-block f-flex-1 sun-res-img-width">
                                    <NuxtImg class="img-w-res" :src="`https://newstest.kehem.com${news.image}`"
                                        alt="" />
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>
                </aside>
            </section>

            <div class="local-padding"></div>
            <!-- TAGS -->
            <section class="fullWidth m-auto tags-define-sun">
                <div class="pad-b--10 text--14">
                    এই ক্যাটাগরি থেকে আরও পড়ুন -
                </div>
                <div class="f gap-05 f-wrap">
                    <NuxtLink v-for="tag in newsBody.tag.split(',').map(item => item.trim()).filter(tag => tag)"
                        :to="`/tag/${tag}`" :key="tag" v-if="newsBody?.tag"
                        class="b-all-sun pad-lr--05 pad-tb--02 text-hov-Red text-White bg-cat">
                        {{ tag }}
                    </NuxtLink>
                </div>
            </section>
            <div class="local-padding"></div>
            <!-- CATEGORY NEWS -->
            <section class="fullWidth m-auto">
                <span class="f gap--05">
                    <NuxtLink :to="`/cat/${newsBody.Catagory}`">
                        <h2 class="sun-cat-name-u"> {{ newsBody.Catagory }}</h2>
                    </NuxtLink>
                    <p class="text--15">থেকে আরও পড়ুন -</p>
                </span>

                <div class="pad-tb--10">
                    <ul class="f gap-10 f-wrap">
                        <li class="f-flex-1 bordered pad--05" v-for="news in catNews.রাজনীতি.slice(0, 5)">
                            <NuxtLink :to="`/news/${news.news_id}`" :key="news.news_id" class="text-color">
                                <span class="d-block max-w--150 min-w--100 h-auto">
                                    <NuxtImg class="w-100 h-auto" :src="news.image" alt="news.caption" />
                                </span>
                                <div class="pad-t--05">
                                    <!-- HEADING -->
                                    <h3 class="text-dotted-4 pad-l--01 link-hov-u"> {{ news.title }}</h3>
                                    <!-- TIMER -->
                                    <div class="f gap--05 f-just-start f-align-items-center">
                                        <span class="w--08 f f-align-items-center">
                                            <i class="m-time"></i>
                                        </span>
                                        <p class="text--08 text-color"> {{ news.published_time_ago }}</p>
                                    </div>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </section>

            <div class="local-padding"></div>

        </main>
    </NuxtLayout>
</template>

<script setup>
import { NuxtImg } from '#components';
import { useRoute } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const route = useRoute();
const key = route.params.news_id;

// NEWS INFORMATION
const { data: newsBody } = await useFetch(`https://newstest.kehem.com/api/newsbody?news_id=${key}`);

// ADS, LATEST, MAX READ INFORMATION
const { data: newsData } = await useFetch(`https://newstest.kehem.com/api/news_data`);

// CATEGORY NEWS SUGGESTED
const { data: catNews } = await useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/front-cat-news.json');






const article = ref(null);
const fontSize = ref(19);

const plusButton = () => {
    if (fontSize.value <= 30) {
        fontSize.value++;
        article.value.style.fontSize = fontSize.value + 'px';
    }
};
const minusButton = () => {
    if (fontSize.value >= 16) {
        fontSize.value--;
        article.value.style.fontSize = fontSize.value + 'px';
    }
};


const newsBodyPrint = ref(null);

// PRINT
const print = () => {
    // Create a new tab
    const printTab = window.open('', '_blank');

    // Check if the content exists
    if (newsBodyPrint.value) {
        // Write the basic structure for the new tab's document
        printTab.document.write('<html><head><title>Print</title>');

        // Copy styles from the current page to the new tab
        const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
        styles.forEach(style => {
            printTab.document.head.appendChild(style.cloneNode(true)); // Clone and append styles to the new tab
        });

        // Add custom styles for reducing the size of the images
        printTab.document.write(`
      <style>
      .news-thumbnail {height: auto; justify-content: center;}
        .news-thumbs {
          max-width: 100%; /* Ensure images scale properly within the container */
          width: 50%; /* Adjust the width as per your preference */
          height: auto; /* Maintain aspect ratio */
        }
        .cat-section {
        display: none;}
      </style>
    `);

        printTab.document.write('</head><body>');

        // Write the content of newsBodyPrint into the new tab
        printTab.document.write(newsBodyPrint.value.innerHTML);
        printTab.document.write('</body></html>');

        // Close the document to finish writing
        printTab.document.close();

        // Wait for the new document to load and then trigger print
        printTab.onload = () => {
            printTab.print();
            printTab.close();
        };
    } else {
        console.log('No content to print');
    }
};











let currentURL = ref(null);
// STAY TIME API
const startTime = ref(null);
const timeSpent = ref(0);

const sendTimeAPI = async (news_id, time, totalShare) => {
    const body = {
        time,
        news_id,
    };

    // Only include non-zero values from totalShare
    const nonZeroShares = Object.fromEntries(
        Object.entries(totalShare).filter(([key, value]) => value !== 0)
    );

    // Add totalShare only if there are non-zero values
    if (Object.keys(nonZeroShares).length > 0) {
        body.totalShare = nonZeroShares;
    }

    const { data, error } = await useFetch('https://newstest.kehem.com/api/UpdateNewsEngagement', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (error.value) {
        console.error('Error sending time:', error.value);
    }
};

let facebookCounter = ref(0);
let messengerCounter = ref(0);
let whatsappCounter = ref(0);
let twitterCounter = ref(0);
let linkedinCounter = ref(0);
let totalShare = ref(null);

// TOTAL SHARES


const isMobile = () => /Mobi|Android|iPhone/i.test(navigator.userAgent);

// FACEBOOK
const facebook = () => {
    facebookCounter.value++;
    const share = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL.value)}`;
    window.open(share, '_blank');
};

// MESSENGER
const messenger = () => {
    messengerCounter.value++;

    const mobileShare = `fb-messenger://share/?link=${encodeURIComponent(currentURL.value)}`;
    const desktopShare = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(currentURL.value)}&app_id=1143410320904939&redirect_uri=${encodeURIComponent(currentURL.value)}`;

    if (isMobile()) {
        window.open(mobileShare, '_blank');
    } else {
        window.open(desktopShare, '_blank');
    }
};

// WHATSAPP
const whatsapp = () => {
    whatsappCounter.value++;
    const share = isMobile()
        ? `whatsapp://send?text=${encodeURIComponent(currentURL.value)}` // Mobile deep link
        : `https://api.whatsapp.com/send?text=${encodeURIComponent(currentURL.value)}`; // Web link
    window.open(share, '_blank');
};

// TWITTER (X)
const twitter = () => {
    twitterCounter.value++;
    const share = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL.value)}`; // Web link for Twitter
    window.open(share, '_blank');
};

// LINKEDIN
const linkedin = () => {
    linkedinCounter.value++;
    const share = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentURL.value)}`; // Web link for LinkedIn
    window.open(share, '_blank');
};


const socialShares = ref(null);
const handleScroll = () => {
    if (window.scrollY >= 500) {
        socialShares.value?.classList.remove("opacity-0");
    } else {
        socialShares.value?.classList.add("opacity-0");
    }
};

onMounted(() => {
    // SHARES ON MOBILE
    if (isMobile()) {
        document.addEventListener('scroll', handleScroll);
    }
    if (!isMobile()) {
        socialShares.value.classList.add("hidei");
    }

    currentURL.value = window.location.href;

    startTime.value = Date.now();

    const checkEvery1Minute = setInterval(() => {
        timeSpent.value = Math.round((Date.now() - startTime.value) / 1000);
    }, 1000);


    onBeforeUnmount(() => {

        if (isMobile()) {
            document.removeEventListener('scroll', handleScroll);
        }

        clearInterval(checkEvery1Minute);
        const roundedTime = timeSpent.value;

        // Construct totalShare object
        totalShare.value = {
            facebook: facebookCounter.value,
            messenger: messengerCounter.value,
            whatsapp: whatsappCounter.value,
            twitter: twitterCounter.value,
            linkedin: linkedinCounter.value
        };

        // Send the POST request
        sendTimeAPI(key, roundedTime, totalShare.value);
    });

});


</script>

<style>
.modal {
    display: block;
    position: fixed;
    top: 4rem;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999999;
}

.modal-content {
    display: inherit;
    position: inherit;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #888;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: inherit;
    overflow: auto;
}

.close-btn {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close-btn:hover,
.close-btn:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

:root {
    --dark-color: #D9D9D9;
    --border: #A1A1A1;
    --cat-color: #10164D;
    --sub-text-color: #444444;
    --sub-span-text-color: #000;
    --transition: all 0.3s ease;
}



.socialShares {
    position: sticky;
    top: 4.5rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--dark-color);
    z-index: 5;
    transition: all 0.3s ease;
}

.socialShares::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 0.2rem 0.5rem;
    transform: translate(-50%, -50%);
    width: 110%;
    background-color: #f0f0f0;
    border-bottom: 1px solid var(--border);
    height: 3rem;
    z-index: -1;
}

.socialShares .share-wave {
    width: 1.2rem;
    background-color: #c6d1d8;
}

.protibedok-author {
    text-decoration: underline;
    text-underline-offset: 3px;
    color: #ff0000;
}

.news-thumbnail {
    position: relative;
    width: 100%;
}

.news-thumbs {
    display: flex;
    width: inherit;
    height: 100%;
    padding: 1rem;
    border: 1px solid var(--dark-color);
}

.news-thumbs img {
    width: 100%;
    height: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    object-position: center;
    border: 1px solid var(--dark-color);
}

.news-thumbnail .news-sub-heading {
    display: block;
    padding: 0.5rem 1rem;
    width: inherit;
    height: max-content;
    color: #6b6b6b;
    border-right: 1px solid var(--dark-color);
    border-left: 1px solid var(--dark-color);
    border-bottom: 1px solid var(--dark-color);
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.bg-Dark {
    background-color: var(--dark-color);
}

.bg-Border {
    background-color: var(--border);
}

.bg-cat {
    background-color: var(--cat-color);
}

.text-cat {
    color: var(--cat-color);
}

.cat-hov-u:hover {
    text-decoration: underline;
}

.sub-text-color {
    color: var(--sub-text-color);
}

.b-all {
    border: 1px solid var(--border);
}

.b-all-sun {
    border: 1px solid var(--dark-color);
}

.b-dark {
    border: 1px solid var(--dark-color);
}

.b-bottom-sun {
    border-bottom: 1px solid var(--dark-color);
}

.b-cat-color {
    border: 1px solid var(--span-color);
}

.b-cat-right {
    display: block;
    height: 100%;
    border-right: 1px solid var(--dark-color);
}

.md-container {
    position: relative;
}

@media only screen and (max-width: 320px) {
    .md-container {
        flex-direction: column;
    }
}

@media only screen and (max-width: 768px) {
    .md-container {
        flex-direction: column;
    }
}

@media only screen and (max-width: 768px) {
    .sun-lead-top {
        height: 100% !important;
    }
}

@media only screen and (max-width: 768px) {
    .news-tops {
        overflow: auto;
    }
}

@media only screen and (max-width: 768px) {
    .sun-chirkut-headings {
        overflow: auto;
    }
}

body {
    width: 100%;
    font-family: "SolaimanLipi", sans-serif;
    color: var(--text-color);
}

a {
    text-decoration: none;
}

a:hover {
    color: #6e2424;
    text-decoration-line: none;
    text-decoration-color: #9f9ea8;
}


.overflow-hidden {
    overflow: hidden;
}

.social-shares ul li {
    border-radius: 50%;
    width: 2rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--sub-div-color);
    cursor: pointer;
}

.social-shares ul li:hover {
    background-color: var(--span-color);
}

.social-shares a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

@media only screen and (max-width: 375px) {
    .social-shares {
        display: none;
    }
}

.obj-fit-h-res {
    position: relative;
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: auto;
    aspect-ratio: 4/3;
}

.obj-fit-w-res {
    position: relative;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
}

.obj-fit-w-h {
    position: relative;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    aspect-ratio: 4/3;
}

.img-hover-scale {
    transition: transform 0.3s ease-in-out;
}

.img-hover-scale:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
}

.overflow-y-scroll {
    overflow-y: scroll;
    overflow-x: hidden;
}

.overflow-x-scroll {
    overflow-x: scroll;
    overflow-y: hidden;
}

.scroll-bar-sun::-webkit-scrollbar {
    width: 0.5rem;
}

.scroll-bar-sun::-webkit-scrollbar-track {
    background: var(--div-color);
}

.scroll-bar-sun::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: var(--sub-div-color);
}

.scroll-bar-sun::-webkit-scrollbar-thumb:hover {
    background: #806e6e;
}

.scroll-bar-sun-2::-webkit-scrollbar {
    width: 0.2rem;
}

.scroll-bar-sun-2::-webkit-scrollbar-track {
    background: var(--dark-color);
}

.scroll-bar-sun-2::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: var(--border);
}

.scroll-bar-sun-2::-webkit-scrollbar-thumb:hover {
    background: #806e6e;
}

.local-padding {
    padding: 1.5rem 0;
}

.ads-section {
    position: relative;
}

@media only screen and (max-width: 768px) {
    .ads-section {
        flex-wrap: wrap;
    }

    .ads-section a:nth-child(n) {
        width: 100%;
    }
}

.headingTitle {
    position: relative;
    color: red !important;
    padding-right: 0.5rem;
    margin-right: 0.2rem;
}

.headingTitle::after {
    content: "/";
    position: absolute;
    bottom: 0;
    right: 0;
}

@media only screen and (max-width: 375px) {
    .sun-set-on-center {
        display: flex;
        justify-content: center;
        width: 100%;
    }
}

.overflow-none {
    overflow: auto;
}

.overflow-none::-webkit-scrollbar {
    width: 0.3rem;
}

.overflow-none::-webkit-scrollbar-track {
    visibility: hidden;
    background: transparent;
}

.overflow-none::-webkit-scrollbar-thumb {
    visibility: hidden;
    border-radius: 1rem;
    background: var(--dark-color);
    transition: all 0.3s ease-in-out;
}

.overflow-none:hover {
    overflow: scroll;
}

.overflow-none:hover::-webkit-scrollbar {
    visibility: visible;
}

.overflow-none:hover::-webkit-scrollbar-thumb {
    visibility: visible;
    transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 768px) {
    .overflow-none {
        scrollbar-width: none;
    }

    .overflow-none::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .overflow-none::-webkit-scrollbar-thumb {
        background-color: transparent;
    }
}


.b-bottom {
    padding: 0.5px 0;
    border-bottom: 2px solid var(--sub-div-color);
}


.obj-fit-h {
    border-radius: 0.5rem;
    object-fit: cover;
    object-position: center;
    height: 100%;
    aspect-ratio: 4/3;
}

@media screen and (max-width: 1080px) {
    .top-shorts {
        display: none !important;
    }
}

.pos-t-center {
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
}

.hr-border {
    border-top: 1px solid var(--border);
}

.b-rad-50 {
    border-radius: 50%;
}

.asp-r-1 {
    aspect-ratio: 1;
}

.asp-r-4-3 {
    aspect-ratio: 4/3;
}

/* SHARES */
.share-wave {
    background-color: #E8E8E8;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    aspect-ratio: 1;
    padding: 0.8rem;
    border-radius: 0.2rem;
    position: relative;
    overflow: hidden;
}

.share-wave::after {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00273F;
    transition: bottom 0.5s ease-in-out;
}

.share-wave:hover::after {
    bottom: 0;
    color: white;
}

.share-wave:active::after {
    background-color: red;
}

.share-wave i {
    color: var(--cat-color);
    font-size: 0.9rem;
    transition: color 0.3s ease-in-out;
}

.share-wave:hover i {
    color: #fff;
    z-index: 1;
}

.headingTitleCircle {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: var(--sub-text-color);
}

.sun-title-text {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
}

.sun-title-text h3 {
    position: relative;
    color: #00273F;
}

.sun-title-text h3::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background-color: #00273F;
}

.sun-title-text h3:hover::before {
    background-color: red;
}

.time-color {
    color: #6b6b6b;
}

article {
    font-size: 1.2rem;
}

.sun-cat-name-u {
    position: relative;
    color: var(--cat-color);
}

.sun-cat-name-u::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background-color: var(--cat-color);
}

.sun-cat-name-u:hover {
    color: red;
}

.sun-cat-name-u:hover::before {
    background-color: red;
}

@media only screen and (max-width: 2560px) {
    .sun-res-img-width {
        max-width: 10rem;
    }
}

@media only screen and (max-width: 1024px) {
    .sun-res-img-width {
        max-width: 5rem;
    }
}

@media only screen and (max-width: 768px) {
    .sun-res-img-width {
        max-width: 10rem;
    }
}

.social-shares-gradient {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to bottom, #fff 70%, rgba(255, 255, 255, 0));
    transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 320px) {
    .sun-social-shares {
        gap: 0.2rem !important;
    }

    .sun-social-shares .share-wave i {
        font-size: 0.7rem;
    }
}

.tags-define-sun {
    border: 1px solid var(--border);
    padding: 1rem;
}

.tags-define-sun a {
    font-size: 1.2rem;
}

.rateNews-sun {
    text-align: center;
    border-radius: 0.5rem;
    border: 1px solid var(--dark-color);
}
</style>