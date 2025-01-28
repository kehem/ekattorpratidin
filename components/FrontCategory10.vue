<template>
    <div class="category m-tb--50">
        <div class="f f-between-center m-b--20">
            <span class="f gap-10 Red f-align-items-center">
                <i class="m-stop1"></i>
                <h2>সম্পাদকীয়</h2>
            </span>
            <NuxtLink to="cat/সম্পাদকীয়" :key="cat / সম্পাদকীয়" class="seeMore b-1 pad--05 b-Red b-rad--03 text-hov-none">
                আরও পড়ুন</NuxtLink>
        </div>

        <div class="category1">
            <NuxtLink class="newsBox" v-for="news in data.রাজনীতি.slice(0, 5)" :to="`news/${news.news_id}`"
                :key="news.news_id">
                <NuxtImg class="bordered" :src="news.image" :alt="news.caption" loading="lazy"
                    placeholder="./placeholder.svg" placeholder-class="autoSetImg" />
                <div class="f f-just-start gap-05 f-col m-t--05">
                    <p class="newsTitle text-dotted-3">
                        <span v-if="news.caption" class="newsCaption">{{ news.caption }}</span>
                        <span class="underlined newsTitle">{{ news.title }}</span>
                    </p>
                    <p class="dateTimeZone"><i class="m-time"></i> {{ news.published_time_ago }}</p>
                </div>
            </NuxtLink>
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
const { data } = await useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/front-cat-news.json');
onMounted(() => {

})
</script>