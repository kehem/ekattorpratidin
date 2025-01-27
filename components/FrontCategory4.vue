<template>
    <section class="g-res-3-col-container fullWidth pad-tb--30 gap-10">
        <aside class="span-2">
            <!-- CATEGORY -->
            <div class="f gap-10 Red f-align-items-center m-b--15">
                <i class="m-stop1"></i>
                <h2>খেলাধুলা</h2>
            </div>
            <section class="cat-contents">
                <div class="bgImg">
                    <img src="public/assets/resource/img-1.jpg" alt="">
                    <span class="darkShadow"></span>
                </div>
                <!-- lead news -->
                <NuxtLink :to="`news/${catNews.রাজনীতি[0].news_id}`" :key="catNews.রাজনীতি[0].news_id"
                    class="sports-lead">
                    <div class="img-cont">
                        <img :src="catNews.রাজনীতি[0].image" alt="">
                    </div>
                    <div class="sport-title">
                        <p class="newsTitle text-dotted-3">
                            <span v-if="catNews.রাজনীতি[0].caption" class="newsCaption">{{ catNews.রাজনীতি[0].caption
                                }}</span>
                            <span class="underlined newsTitle">{{ catNews.রাজনীতি[0].title }}</span>
                        </p>
                        <p class="dateTimeZone"><i class="m-time"></i> {{ catNews.রাজনীতি[0].published_time_ago }}</p>
                        <div class="White text-dotted-3">{{ catNews.রাজনীতি[0].news_brief }}</div>
                    </div>
                </NuxtLink>

                <div class="three-col-container">
                    <NuxtLink v-for="news in catNews.রাজনীতি.slice(1, 4)" :to="`news/${news.news_id}`"
                        :key="news.news_id" class="relative">
                        <img :src="`${news.image}`" alt="">
                        <span class="timer-overlay">{{ news.published_time_ago }}</span>
                        <div class="f f-just-start gap-05 f-col m-t--05">
                            <p class="newsTitle sport-title text-dotted-3">
                                <span v-if="news.caption" class="newsCaption White">{{ news.caption }}</span>
                            <p class="underlined newsTitle White pad-t--02">{{ news.title }}</p>
                            </p>
                        </div>
                    </NuxtLink>
                </div>
            </section>
        </aside>
        <aside>
            <!-- CATEGORY -->
            <div class="f gap-10 Red f-align-items-center m-b--15 video-cat">
                <i class="m-stop1"></i>
                <h2>ভিডিও</h2>
            </div>
            <div class="two-col-container">
                <div v-if="datap && datap.some(x => x.youtubeVideo)">
                    <iframe v-for="news in datap" :key="news.youtubeVideo" width="100%" height="230px"
                        class="border-bottom" :src="generateYoutubeEmbed(news.youtubeVideo)" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>


                <!-- https://youtu.be/Jhug34weCWs?si=8oMnKeB6zKwL2pPF
                https://www.youtube.com/embed/Jhug34weCWs?si=8oMnKeB6zKwL2pPF -->
            </div>
        </aside>
    </section>
</template>

<script setup>
import { NuxtLink } from '#components';

const { data: catNews } = useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/front-cat-news.json');
const { data: datap } = useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/frontvideos.json');

// video ID & `si` parameter
function youtubeShare(url) {
    const regex = /(?:v=|\/)([a-zA-Z0-9_-]{11})(?:.*?[?&]si=([a-zA-Z0-9_-]+))?/;
    const match = url.match(regex);
    if (match) {
        const id = match[1];
        const si = match[2] || null;
        return { id, si };
    }
    return null;
}

function generateYoutubeEmbed(url) {
    const videoData = youtubeShare(url);
    if (videoData) {
        return `https://www.youtube.com/embed/${videoData.id}?si=${videoData.si || ""}&amp;controls=0`;
    }
    return "";
}
</script>


<style scoped>
/* IFRAME HIDER */
.ytp-overflow-button,
.ytp-title-channel,
.ytp-title-channel .ytp-chrome-top,
.ytp-title-text,
.ytp-gradient-top,
.html5-video-container svg,
.ytp-cued-thumbnail-overlay-image,
.ytp-cued-thumbnail-overlay {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
}

.ytp-watermark,
.yt-uix-sessionlink,
.ytp-watermark-small {
    position: absolute;
    top: 0;
}
</style>