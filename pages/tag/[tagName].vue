<template>

    <!-- MAIN SECTION -->
    <main class="z-1 relative w-100 h-auto">

        <!-- CATEGORY NAME -->
        <div class="sun-cat-tags res-container m-auto">
            <h1 class="pad-b--10">বাংলাদেশ</h1>
            <ul class="f f-just-center gap-05 f-wrap">
                <li><a href="#">হত্যাকাণ্ড</a></li>
                <li><a href="#">আইআরজিসি</a></li>
                <li><a href="#">যুবরাজ সালমান</a></li>
                <li><a href="#">ভিশন-২০৩০</a></li>
                <li><a href="#">শ্রম অভিবাসন</a></li>
                <li><a href="#">ইসা ইউসুফ</a></li>
                <li><a href="#">আসিফ মাহমুদ</a></li>
                <li><a href="#">ফ্যাসিস্ট সরকার</a></li>
            </ul>
        </div>
        <section class="g-res-3-col-container gap-10 res-container m-auto pad-t--10">
            <!-- LEFT COLUMN -->
            <aside class="span-2">
                <section>
                    <div class="">
                        <div class="span-2 sun-cat-articles">

                            <!-- MAIN -->
                            <NuxtLink :to="`/news/${newses[0].news_id}`" :key="newses[0].news_id"
                                class="sun-cat-article">
                                <!-- TIMER -->
                                <div
                                    class="f gap--05 f-just-start f-align-items-center absolute z-2 t-0 pad--04 bg-cat">
                                    <span class="text--08 text-White f f-centered gap--05 text-hov-Red">
                                        <i class="m-time"></i>
                                        <p> {{ newses[1].published_time_ago }}</p>
                                    </span>
                                </div>

                                <!-- THUMB -->
                                <span class="relative asp-r-4-3 overflow-hidden">
                                    <NuxtImg class="img-w-res obj-fit-w-res img-hover-scale bordered"
                                        :src="`https://newstest.kehem.com${newses[1].image}`" alt="" />
                                </span>

                                <!-- HEADLINE -->
                                <div class="pad--05 bg-cat">
                                    <h3 class="text-center text-White"> {{ newses[0].title }}
                                    </h3>
                                </div>
                            </NuxtLink>

                            <!-- LEGENDS -->
                            <NuxtLink v-for="news in newses.slice(1, 11)" :to="`/news/${news.news_id}`"
                                :key="news.news_id" class="sun-cat-sub-articles">
                                <!-- THUMB -->
                                <span class="asp-r-4-3 overflow-hidden">
                                    <NuxtImg class="img-w-res obj-fit-w-res bordered"
                                        :src="`https://newstest.kehem.com/${news.image}`" :alt="news.img_caption" />
                                </span>

                                <div class="f-flex-1 f f-col gap-05">
                                    <!-- HEADLINE -->
                                    <div class="">
                                        <h3 class="pad-l--01 text-color text-dotted-4 m-t---02">
                                            {{ news.title }}
                                        </h3>
                                    </div>
                                    <!-- TIMER -->
                                    <div class="gap-05 f-start-center">

                                        <i class="m-time text--08"></i>
                                        <p class="text--08"> {{ news.published_time_ago }}</p>
                                    </div>
                                </div>
                            </NuxtLink>

                        </div>
                    </div>

                    <div class="sunGetMoreData">
                        <ul class="cat-xhr-news" ref="readMoreRef">
                            <li v-for="news in newses.slice(11, 15)">
                                <span class="cat-left-border"></span>

                                <NuxtLink :to="`/news/${news.news_id}`">
                                    <!-- HEADLINE -->
                                    <h3>
                                        {{ news.title }}
                                    </h3>
                                    <!-- TIMER -->
                                    <div class="f gap--05 f-just-start f-align-items-center">
                                        <p class="text--08 text-color"> {{ news.published_time_ago }}</p>
                                    </div>
                                </NuxtLink>
                            </li>

                            <li v-if="condition" v-for="news in moreContents">
                                <span class="cat-left-border"></span>
                                <NuxtLink :to="`/news/${news.news_id}`">
                                    <!-- HEADLINE -->
                                    <h3>
                                        {{ news.title }}
                                    </h3>
                                    <!-- TIMER -->
                                    <div class="f gap--05 f-just-start f-align-items-center">
                                        <p class="text--08 text-color"> {{ news.published_time_ago }}</p>
                                    </div>
                                </NuxtLink>
                            </li>
                        </ul>

                        <button  class="btn btn-primary f-centered " @click="readMore">
                            <i class="m-timer"></i>
                            <p>আরও পড়ুন </p>
                        </button>
                    </div>
                </section>
            </aside>



            <aside class="span-1 f f-col gap-10">
                <!-- সর্বশেষ -->
                <section class="span-1 b-dark overflow-hidden">
                    <!-- TITLE -->
                    <div class="f f-just-center text--14 bg-Dark pad-tb--05">
                        <h4>সর্বশেষ</h4>
                    </div>

                    <!-- NEWS LIST -->
                    <ul class="f h-i f-col gap-10 pad--10">
                        <!-- NEWS -->
                        <li class="f j-just-between f-align-items-center gap-05 xu32jsa">
                            <span class="sun-latest-circle"></span>
                            <div class="f f-col gap-03">
                                <NuxtLink class="text-color" to="/">
                                    <h3 class="text-dotted-3 pad-l--01 text-underlined">ন্যায়বিচার নাকি গুপ্তহত্যা:
                                        নাসরুল্লাহ
                                        হত্যাকাণ্ড কীভাবে দেখছেন বিশ্বনেতারা</h3>
                                </NuxtLink>
                                <!-- TIMER -->
                                <div class="f gap--05 f-align-items-center">

                                    <span class="text--08 text-color">
                                        <i class="m-time"></i>
                                        <p>১ ঘন্টা আগে</p>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>

                </section>

                <!-- সর্বাধিক পঠিত -->
                <section class="span-1 b-dark overflow-hidden">
                    <!-- TITLE -->
                    <div class="f f-just-center text--14 bg-Dark pad-tb--05">
                        <h4>সর্বাধিক পঠিত</h4>
                    </div>

                    <!-- NEWS LIST -->
                    <ul class="f h-i f-col gap-10 pad--10">
                        <!-- NEWS -->
                        <li class="f j-just-between f-align-items-center gap-05 xu32jsa">
                            <span class="sun-latest-circle"></span>
                            <div class="f f-col gap-03">
                                <NuxtLink class="text-color" to="/">
                                    <h3 class="text-dotted-3 pad-l--01 text-underlined">ন্যায়বিচার নাকি গুপ্তহত্যা:
                                        নাসরুল্লাহ
                                        হত্যাকাণ্ড কীভাবে দেখছেন বিশ্বনেতারা</h3>
                                </NuxtLink>
                                <!-- TIMER -->
                                <div class="f gap--05 f-align-items-center">

                                    <span class="text--08 text-color">
                                        <i class="m-time"></i>
                                        <p>১ ঘন্টা আগে</p>
                                    </span>
                                </div>
                            </div>
                        </li>

                    </ul>

                </section>
            </aside>
        </section>
        <div class="local-padding"></div>

    </main>

</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const category = route.params.category;


const { data: cats, status } = await useFetch(`https://newstest.kehem.com/api/pageNews?category=${category}`);
const newses = cats.value.results;
let nextOffset = cats.value.next;

const moreContents = ref(null);
const condition = ref(false)
const readMoreRef = ref(null);
const readMore = () => {
    condition.value = true;
    const { data: offsets, status } = useFetch(`${nextOffset}`);
    const fullOffset = offsets.value;
    moreContents.value = fullOffset?.results;

}
</script>

<style>
:root {
    --background: #fff;
    --div-color: #3D405B;
    --sub-div-color: #81B29A;
    --sub-div-darker: #6E9B85;
    --dark-color: #D9D9D9;
    --span-color: #E07A5F;
    --sub-span-color: #F2CC8F;
    --button-color: #fff;
    --sub-button-color: #fff;
    --border: #A1A1A1;
    --text-color: #2F2F2F;
    --text-color-darker: #d8d8d8;
    --black: #2F2F2F;
    --White: #dddddd;
    --Red: #ff0000;
    --cat-color: #10164D;
    --sub-text-color: #444444;
    --div-text-color: #ffffff;
    --span-text-color: #000;
    --sub-span-text-color: #000;
    --xxs: 0.2rem;
    --xs: 0.5rem;
    --small: 0.8rem;
    --semi-small: 0.9rem;
    --normal: 1rem;
    --semi-normal: 1.1rem;
    --medium: 1.2rem;
    --semi-medium: 1.3rem;
    --large: 1.4rem;
    --semi-large: 1.5rem;
    --xl: 1.7rem;
    --xxl: 1.8rem;
    --xxxl: 2rem;
    --transition: all 0.3s ease;
}


.bg-Dark {
    background-color: var(--dark-color);
}

.text-color {
    color: var(--text-color);
}

.bg-cat {
    background-color: var(--cat-color);
}

.b-dark {
    border: 1px solid var(--dark-color);
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

li {
    list-style-type: none;
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

.obj-fit-w-res {
    position: relative;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
}

.img-hover-scale {
    transition: transform 0.3s ease-in-out;
}

.img-hover-scale:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
}

.local-padding {
    padding: 1.5rem 0;
}

.lead-shares ul {
    list-style: none;
    gap: 0.2rem;
    width: 1.5rem !important;
}

.lead-shares ul li {
    width: inherit !important;
    aspect-ratio: 1;
}

.lead-shares ul li img {
    width: 100%;
    height: 0.5rem;
    object-fit: cover;
    object-position: center;
}

.text-underlined:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
}

.asp-r-4-3 {
    aspect-ratio: 4/3;
}

@media only screen and (max-width: 768px) {
    .g-res-4-cols-container .local-padding {
        padding: 5rem;
    }
}

.xu32jsa {
    position: relative;
}

.sun-latest-circle {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--Red);
}

.xu32jsa:hover .sun-latest-circle {
    background-color: var(--cat-color);
}

.sun-footer aside {
    padding-top: 1rem;
}

.sun-footer aside a:hover {
    text-decoration: underline;
}


.sun-cat-tags {
    position: relative;
    border-bottom: 1px solid var(--dark-color);
    padding-bottom: 1rem;
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.sun-cat-tags h1 {
    font-size: 2rem;
}

.sun-cat-tags ul {
    position: relative;
}

.sun-cat-tags ul li {
    position: relative;
    padding: 0.5rem 0.5rem;
    border: 1px solid var(--dark-color);
    transition: all 0.3s ease-in-out;
}

.sun-cat-tags ul li a {
    color: var(--text-color);
}

.sun-cat-tags ul li::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--div-color);
    z-index: -1;
    transition: all 0.3s ease-in-out;
}

.sun-cat-tags ul li:hover::before {
    background-color: var(--span-color);
    transition: all 0.3s ease-in-out;
}

.sun-cat-article {
    position: relative;
    display: flex;
    flex-direction: column;
}

.sun-cat-article:hover h2 {
    text-decoration: underline;
    transition: all 0.3s ease-in-out;
}

.sun-cat-tags ul li a:hover {
    color: #fff;
    transition: all 0.3s ease-in-out;
}

.sun-cat-tags ul li:hover {
    background-color: var(--cat-color);
    transition: all 0.3s ease-in-out;
}

.sun-cat-articles {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: 0.8rem;
}

.sun-cat-articles a:nth-child(1) {
    grid-column: span 3;
    grid-row: span 3;
}

.sun-cat-articles a:nth-child(2) {
    grid-column: span 2;
    grid-row: span 2;
}

.sun-cat-articles a:nth-child(3) {
    grid-column: span 2;
    grid-row: span 2;
}

.sun-cat-articles a:nth-child(n+4) {
    grid-column: span 1;
}

.sun-cat-articles a:nth-child(n+4) h3 {
    font-size: 1.1rem;
}

.sun-cat-articles a:hover h3 {
    text-decoration: underline;
    color: var(--Red);
}

@media only screen and (max-width: 1024px) {
    .sun-cat-articles a:nth-child(1) {
        grid-column: span 3;
        grid-row: span 3;
    }

    .sun-cat-articles a:nth-child(2) {
        grid-column: span 2;
        grid-row: span 2;
    }

    .sun-cat-articles a:nth-child(3) {
        grid-column: span 2;
        grid-row: span 2;
    }

    .sun-cat-articles a:nth-child(n+4) {
        grid-column: span 1;
    }

    .sun-cat-articles a:nth-child(n+4) h3 {
        font-size: 1.1rem;
    }

    .sun-cat-articles a:nth-child(n+4) h3 {
        font-size: 1rem;
    }
}

@media only screen and (max-width: 768px) {
    .sun-cat-articles {
        grid-template-columns: 1fr;
        gap: 1.2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--dark-color);
    }

    .sun-cat-articles a:nth-child(n+1) {
        grid-column: 1/-1;
    }

    .sun-cat-articles a:nth-child(n+1) h3 {
        font-size: 1.2rem !important;
    }
}

.sun-cat-sub-articles {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.sunGetMoreData {
    position: relative;
    width: 100%;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sunGetMoreData li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--dark-color);
}

.sunGetMoreData li .cat-left-border {
    position: relative;
    display: block;
    width: 0.3rem;
    height: 3rem;
    background-color: var(--span-color);
}

.sunGetMoreData li:hover h3 {
    color: var(--Red);
    text-decoration: underline;
}

.sunGetMoreData li:hover .cat-left-border {
    background-color: var(--cat-color);
}

.sunGetMoreData li a {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
    color: var(--text-color);
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}
</style>
