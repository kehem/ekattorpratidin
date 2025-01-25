<template>
    <div class="col3Display">

        <div class="grid__3col">
            <!-- COLUMN 1 -->
            <div class="col col1">
                <!-- HEADING -->
                <div class="col1Heading">
                    <i class="m-checkbox-unchecked"></i>
                    <p>সারাদেশ</p>
                </div>
                <!-- ALL NEWS -->
                <div class="gridColBG" v-for="news in data.রাজনীতি">
                    <!-- NEWS -->
                    <NuxtLink :to="`news/${news.news_id}`" class="shortNews" :key="news.news_id">
                        <!-- NEWS IMAGE -->
                        <div class="newsImg">
                            <img :src="`${news.image}`" alt="">
                            <div class="publishedTime">১ ঘন্টা আগে</div>
                        </div>
                        <!-- NEWS TITLE -->
                        <div class="newsTexts">
                            <p class="newsCaption"><i class="m-controller-stop text--09"></i> {{ news.caption }}</p>
                            <p class="newsTitle text-dotted-3">{{ news.title }}</p>
                        </div>
                    </NuxtLink>

                </div>
            </div>

            <!-- COLUMN 2 -->
            <div class="col col2">

                <!-- HEADING -->
                <div class="col1Heading">
                    <i class="m-checkbox-unchecked"></i>
                    <p>সর্বশেষ সংবাদ</p>
                </div>
                <!-- MAIN CONTENTS START -->
                <div class="gridColBG">

                    <div class="colWishNewsModule">
                        <!-- ADS -->
                        <div class="NewsAds">
                            <img src="https://dummyimage.com/800x150/" alt="">
                        </div>
                        <!-- TOP THUMB NEWS -->
                        <a href="#" class="shortNews flexNews">
                            <!-- NEWS IMAGE -->
                            <div class="newsImg2">
                                <img src="https://dummyimage.com/800x600/" alt="">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
                            </div>
                            <!-- NEWS DESCRIPTION -->
                            <div class="newsTexts">
                                <p class="newsTitle text__Ellipsis_3">চট্টগ্রাম বন্দর চ্যানেলের একাংশে পণ্যবাহী একটি
                                    জাহাজ আটকে খুলনা–বাগেরহাট আসা–যাওয়ার পথে সুযোগ পেলে ভ্যাট্টেপাড়ায় </p>
                                <p class="newsContent text__Ellipsis_2">
                                    খুলনা–বাগেরহাট আসা–যাওয়ার পথে সুযোগ পেলে ভ্যাট্টেপাড়ায় (ভাটিয়াপাড়া) বিরতি নেওয়ার
                                    চেষ্টা করি।
                                </p>
                            </div>
                        </a>

                        <!-- LIST NEWS -->
                        <!-- NEWS 1 -->
                        <div class="bulletNews">
                            <a href="#" class="titleNewsContainer">
                                <p class="blueNumberList">১</p>
                                <p class="titleNews text__Ellipsis_3">চট্টগ্রাম বন্দর চ্যানেলের একাংশে পণ্যবাহী একটি
                                    জাহাজ আটকে
                                    খুলনা–বাগেরহাট আসা–যাওয়ার</p>
                            </a>
                            <div class="publishedTimer">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
                                <div class="border1px"></div>
                            </div>

                        </div>

                        <!-- NEWS 2 -->
                        <div class="bulletNews">
                            <a href="#" class="titleNewsContainer">
                                <p class="blueNumberList">২</p>
                                <p class="titleNews text__Ellipsis_3">চট্টগ্রাম বন্দর চ্যানেলের একাংশে পণ্যবাহী একটি
                                    জাহাজ আটকে
                                    খুলনা–বাগেরহাট আসা–যাওয়ার</p>
                            </a>
                            <div class="publishedTimer">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
                                <div class="border1px"></div>
                            </div>

                        </div>

                        <!-- NEWS 3 -->
                        <div class="bulletNews">
                            <a href="#" class="titleNewsContainer">
                                <p class="blueNumberList">৩</p>
                                <p class="titleNews text__Ellipsis_3">চট্টগ্রাম বন্দর চ্যানেলের একাংশে পণ্যবাহী একটি
                                    জাহাজ আটকে
                                    খুলনা–বাগেরহাট আসা–যাওয়ার</p>
                            </a>
                            <div class="publishedTimer">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
                                <div class="border1px"></div>
                            </div>

                        </div>

                        <!-- NEWS 4 -->
                        <div class="bulletNews">
                            <a href="#" class="titleNewsContainer">
                                <p class="blueNumberList">৪</p>
                                <p class="titleNews text__Ellipsis_3">চট্টগ্রাম বন্দর চ্যানেলের একাংশে পণ্যবাহী একটি
                                    জাহাজ আটকে
                                    খুলনা–বাগেরহাট আসা–যাওয়ার</p>
                            </a>
                            <div class="publishedTimer">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
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
                    <i class="m-checkbox-unchecked"></i>
                    <p>সর্বশেষ সংবাদ</p>
                </div>
                <!-- MAIN CONTENTS START -->
                <div class="gridColBG gridColFullWidth">
                    <div class="colWishNewsModule">
                        <!-- NEWS 1 -->
                        <a href="#" class="featuredNews">
                            <!-- FEATURE IMAGE -->
                            <div class="featureImg">
                                <img src="https://dummyimage.com/800x600/" alt="">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
                            </div>
                            <div class="vrCol">
                                <!-- FEATURE HEADING-->
                                <div class="titleNews text__Ellipsis_3">
                                    <div class="leftBorder"></div>
                                    <p>প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন</p>
                                </div>
                                <!-- NEWS DESCRIPTION FOR MEDIA SCREEN -->
                                <div class="mediaQueryDescription">
                                    <p class="newsContent text__Ellipsis_3">
                                        প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন তৃতীয় মেয়াদে
                                        নরেন্দ্র হিসেবে টানা তৃতীয় মেয়াদে নরেন্দ্র মোদির শপথ গ্রহণ মোদির শপথ
                                    </p>
                                </div>
                            </div>
                        </a>
                        <!-- NEWS 2 -->
                        <a href="#" class="featuredNews">
                            <!-- FEATURE IMAGE -->
                            <div class="featureImg">
                                <img src="https://dummyimage.com/800x600/" alt="">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
                            </div>
                            <div class="vrCol">
                                <!-- FEATURE HEADING-->
                                <div class="titleNews text__Ellipsis_3">
                                    <div class="leftBorder"></div>
                                    <p>প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন</p>
                                </div>
                                <!-- NEWS DESCRIPTION FOR MEDIA SCREEN -->
                                <div class="mediaQueryDescription">
                                    <p class="newsContent text__Ellipsis_3">
                                        প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন তৃতীয় মেয়াদে
                                        নরেন্দ্র হিসেবে টানা তৃতীয় মেয়াদে নরেন্দ্র মোদির শপথ গ্রহণ মোদির শপথ
                                    </p>
                                </div>
                            </div>
                        </a>
                        <!-- NEWS 3 -->
                        <a href="#" class="featuredNews">
                            <!-- FEATURE IMAGE -->
                            <div class="featureImg">
                                <img src="https://dummyimage.com/800x600/" alt="">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
                            </div>
                            <div class="vrCol">
                                <!-- FEATURE HEADING-->
                                <div class="titleNews text__Ellipsis_3">
                                    <div class="leftBorder"></div>
                                    <p>প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন</p>
                                </div>
                                <!-- NEWS DESCRIPTION FOR MEDIA SCREEN -->
                                <div class="mediaQueryDescription">
                                    <p class="newsContent text__Ellipsis_3">
                                        প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন তৃতীয় মেয়াদে
                                        নরেন্দ্র হিসেবে টানা তৃতীয় মেয়াদে নরেন্দ্র মোদির শপথ গ্রহণ মোদির শপথ
                                    </p>
                                </div>
                            </div>
                        </a>
                        <!-- NEWS 4 -->
                        <a href="#" class="featuredNews">
                            <!-- FEATURE IMAGE -->
                            <div class="featureImg">
                                <img src="https://dummyimage.com/800x600/" alt="">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
                            </div>
                            <div class="vrCol">
                                <!-- FEATURE HEADING-->
                                <div class="titleNews text__Ellipsis_3">
                                    <div class="leftBorder"></div>
                                    <p>প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন</p>
                                </div>
                                <!-- NEWS DESCRIPTION FOR MEDIA SCREEN -->
                                <div class="mediaQueryDescription">
                                    <p class="newsContent text__Ellipsis_3">
                                        প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন তৃতীয় মেয়াদে
                                        নরেন্দ্র হিসেবে টানা তৃতীয় মেয়াদে নরেন্দ্র মোদির শপথ গ্রহণ মোদির শপথ
                                    </p>
                                </div>
                            </div>
                        </a>
                        <!-- NEWS 5 -->
                        <a href="#" class="featuredNews">
                            <!-- FEATURE IMAGE -->
                            <div class="featureImg">
                                <img src="https://dummyimage.com/800x600/" alt="">
                                <div class="publishedTime">১ ঘন্টা আগে</div>
                            </div>
                            <div class="vrCol">
                                <!-- FEATURE HEADING-->
                                <div class="titleNews text__Ellipsis_3">
                                    <div class="leftBorder"></div>
                                    <p>প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন</p>
                                </div>
                                <!-- NEWS DESCRIPTION FOR MEDIA SCREEN -->
                                <div class="mediaQueryDescription">
                                    <p class="newsContent text__Ellipsis_3">
                                        প্রধানমন্ত্রী শেখ হাসিনা আজ সন্ধ্যায় প্রধানমন্ত্রী হিসেবে টানা তৃতীয় মেয়াদে
                                        নরেন্দ্র মোদির শপথ গ্রহণ অনুষ্ঠানে গ্রহণ অনুষ্ঠানে যোগ দেবেন তৃতীয় মেয়াদে
                                        নরেন্দ্র হিসেবে টানা তৃতীয় মেয়াদে নরেন্দ্র মোদির শপথ গ্রহণ মোদির শপথ
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/front-cat-news.json');
const saradesh = data.রাজনীতি;
console.log(saradesh);

</script>

<!-- https://newstest.kehem.com/api/frontCatNews?category=সিলেট -->
<!-- https://surajit-singha-sisir.github.io/mastorsCDN/JS/sorbosesh.json -->