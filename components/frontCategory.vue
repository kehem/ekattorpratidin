<template>
    <div class="col3Display">
        <div class="grid__3col">
            <!-- COLUMN 1 -->
            <div class="col col1">
                <!-- HEADING -->
                <div class="col1Heading">
                    <i class="m-stop1"></i>
                    <NuxtLink class="text--13 b Red" to="/cat/সারাদেশ">সারাদেশ</NuxtLink>
                </div>
                <!-- ALL NEWS -->
                <div class="gridColBG">
                    <!-- NEWS -->
                    <NuxtLink v-for="news in data.সারাদেশ" :to="`/news/${news.news_id}`" class="shortNews"
                        :key="news.news_id">
                        <!-- NEWS IMAGE -->
                        <div class="newsImg">
                            <!-- <img :src="`${news.image}`" alt="`${news.img_caption}`"> -->
                            <!-- <NuxtImg :src="news.image" :alt="news.img_caption" :custom="true" loading="lazy"
                                v-slot="{ src, isLoaded, imgAttrs }">
                                <img v-if="isLoaded" v-bind="imgAttrs" :src="src" @load="onImageLoad" />
                                <img v-else src="public/placeholder.svg" class="autoSetImg" />
                            </NuxtImg> -->
                            <NuxtImg class="autoSetImg" :src="news.image" :alt="news.img_caption" loading="lazy"
                                placeholder="./placeholder.svg" placeholder-class="autoSetImg" />




                            <div class="publishedTime">{{ news.published_time_ago }}</div>
                        </div>
                        <!-- NEWS TITLE -->
                        <div class="newsTexts">
                            <p class="newsTitle text-dotted-3">
                                <span v-if="news.caption" class="newsCaption">{{ news.caption }}</span>
                                <span class="underlined">{{ news.title }}</span>
                            </p>
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <!-- COLUMN 2 -->
            <div class="col col2">
                <!-- HEADING -->
                <div class="col1Heading">
                    <i class="m-stop1"></i>
                    <NuxtLink class="text--13 b Red" to="cat/রাজনীতি">রাজনীতি</NuxtLink>
                </div>
                <!-- MAIN CONTENTS START -->
                <div class="gridColBG">

                    <div class="colWishNewsModule">
                        <!-- AD-2 -->
                        <div class="NewsAds">
                            <img src="https://dummyimage.com/800x150/" alt="">
                        </div>

                        <!-- TOP THUMB NEWS -->
                        <NuxtLink :to="`/news/${data.রাজনীতি[0].news_id}`" :key="`${data.রাজনীতি[0].news_id}`"
                            class="shortNews flexNews">
                            <!-- NEWS IMAGE -->
                            <div class="newsImg2">
                                <NuxtImg :src="data.রাজনীতি[0].image" :alt="data.রাজনীতি[0].img_caption" loading="lazy"
                                    placeholder="./placeholder.svg" placeholder-class="autoSetImg" />


                                <div class="publishedTime">{{ data.রাজনীতি[0].published_time_ago }}</div>
                            </div>
                            <!-- NEWS DESCRIPTION -->
                            <div class="newsTexts">
                                <p class="newsTitle text-dotted-3">
                                    <span v-if="data.রাজনীতি[0].caption" class="newsCaption">{{ data.রাজনীতি[0].caption
                                        }}</span>
                                    <span class="underlined">{{ data.রাজনীতি[0].title }}</span>

                                </p>
                                <p class="newsContent text-dotted-2">{{ data.রাজনীতি[0].news_brief }}
                                </p>
                            </div>
                        </NuxtLink>

                        <!-- LIST NEWS -->
                        <div class="bulletNews" v-for="(news, index) in data.রাজনীতি.slice(1)"
                            :key="`/news/${news.news_id}`">
                            <NuxtLink :to="`/news/${news.news_id}`" class="titleNewsContainer">
                                <p class="blueNumberList">{{ convertToBanglaDigits(index + 1) }}</p>
                                <p class="newsTitle text-dotted-3">
                                    <span v-if="news.caption" class="newsCaption">{{ news.caption }}</span>
                                    <span class="news-title underlined newsTitle">{{ news.title }}</span>
                                </p>
                            </NuxtLink>
                            <div class="publishedTimer">
                                <div class="publishedTime">{{ news.published_time_ago }}</div>
                                <div class="border1px"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- COLUMN 3 -->
            <div class="col col3">


                <!-- HEADING -->
                <div class="col1Heading">
                    <i class="m-stop1"></i>
                    <NuxtLink class="text--13 b Red" to="cat/বিদেশ">বিদেশ</NuxtLink>
                </div>
                <!-- MAIN CONTENTS START -->
                <div class="gridColBG gridColFullWidth">
                    <div class="colWishNewsModule">
                        <!-- NEWS LIST -->
                        <NuxtLink v-for="news in data.বিদেশ" :to="`${news.news_id}`" class="featuredNews">
                            <!-- FEATURE IMAGE -->
                            <div class="featureImg">
                                <!-- <img :src="`${news.image}`" alt=""> -->
                                <NuxtImg :src="news.image" :alt="news.img_caption" loading="lazy"
                                    placeholder="./placeholder.svg" placeholder-class="autoSetImg" />
                                <div class="publishedTime">{{ news.published_time_ago }}</div>
                            </div>
                            <div class="vrCol">
                                <!-- FEATURE HEADING-->
                                <div class="titleNews text__Ellipsis_3">
                                    <div class="leftBorder"></div>
                                    <p class="newsTitle text-dotted-3">
                                        <span v-if="news.caption" class="newsCaption">{{ news.caption }}</span>
                                        <span class="news-title underlined newsTitle">{{ news.title }}</span>
                                    </p>
                                </div>
                                <!-- NEWS DESCRIPTION FOR MEDIA SCREEN -->
                                <div class="mediaQueryDescription">
                                    <p class="newsContent text-dotted-3">
                                        {{ news.news_brief }}
                                    </p>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data, status } = useLazyFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/front-cat-news.json');

// Mapping of English digits to Bengali digits
const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

// Function to convert a number to Bengali digits
function convertToBanglaDigits(number) {
    return String(number)
        .split('')
        .map((digit) => banglaDigits[digit])
        .join('');
}
</script>

<!-- https://newstest.kehem.com/api/frontCatNews?category=সিলেট -->
<!-- https://surajit-singha-sisir.github.io/mastorsCDN/JS/sorbosesh.json -->