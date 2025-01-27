<template>
    <!-- 3clm -->
    <div class="clm3 fullWidth">

        <!-- LEFT LABEL -->
        <div class="clm3Left">

            <!-- HEADING NAME -->
            <span class="f gap-10 Red f-align-items-center pad-b--10">
                <i class="m-stop1"></i>
                <h2>অর্থনীতি</h2>
            </span>

            <!-- SHORT NEWS PREVIEW -->
            <div class="shortNews">

                <!-- SHORT NEWS -->
                <NuxtLink v-for="news in data.সারাদেশ.slice(0, 3)" :to="`news/${news.news_id}`" :key="news.news_id"
                    class="shortNewsFlex">
                    <!-- FEATURED IMAGE -->
                    <img class="bordered" :src="news.image" :alt="news.caption">
                    <!-- TEXT BLOCK -->
                    <div class="shortNewsTexts">
                        <!-- NEWS HEADING -->
                        <h2 class="underlined">{{ news.title }}</h2>
                        <p class="dateTimeZone"><i class="m-time"></i> {{ news.published_time_ago }}</p>

                        <!-- NEWS SHORT DESCRIPTION -->
                        <p class="Black">{{ news.news_brief }}</p>
                    </div>
                </NuxtLink>

            </div>

            <!-- SEE MORE -->
            <NuxtLink to="cat/অর্থনীতি" class="btn btn-outline-sleep w--80 m-auto" title="এই ক্যাটাগরিতে আরও নিউজ দেখুন">আরও দেখুন</NuxtLink>
        </div>

        <!-- RIGHT LABEL -->
        <div class="clm3Right">

            <!-- HEADING NAME -->
            <span class="f gap-10 Red f-align-items-center pad-b--10">
                <i class="m-stop1"></i>
                <h2>অপরাধ</h2>
            </span>

            <!-- SHORT NEWS PREVIEW -->
            <div class="shortNews">

                <!-- SHORT NEWS 1 -->
                <NuxtLink v-for="news in data.রাজনীতি.slice(0, 3)" :to="`news/${news.news_id}`" :key="news.news_id" class="shortNewsFlex">
                    <!-- FEATURED IMAGE -->
                    <img class="bordered" :src="news.image" :alt="news.caption">
                    <!-- TEXT BLOCK -->
                    <div class="shortNewsTexts">
                        <!-- NEWS HEADING -->
                        <h2 class="underlined">{{ news.title }}</h2>
                        <p class="dateTimeZone"><i class="m-time"></i> {{ news.published_time_ago }}</p>

                        <!-- NEWS SHORT DESCRIPTION -->
                        <p class="Black">{{ news.news_brief }}</p>
                    </div>
                </NuxtLink>

            </div>

            <!-- SEE MORE -->
            <NuxtLink to="cat/অপরাধ" class="btn btn-outline-sleep w--80 m-auto" title="এই ক্যাটাগরিতে আরও নিউজ দেখুন">আরও দেখুন</NuxtLink>
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
const { data } = await useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/front-cat-news.json');
onMounted(() => {

})
</script>