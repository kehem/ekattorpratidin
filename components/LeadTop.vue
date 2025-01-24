<template>
    <div class="outer-topLeadContainerX">
        <div class="topLeadContainerX">
            <NuxtLink :to="`/news/${data.lead.news_id}`" class="leadContainerX">
                <div class="innerLeadX ">
                    <img class="autoSetImg" :src="`https://newstest.kehem.com/${data.lead.image}`" alt="">
                </div>
                <div class="leadTitleX">
                    <p class="text-dotted-2">{{ data.lead.title }}</p>
                </div>
            </NuxtLink>



            <div class="topContainerX">
                <!-- TOP NEWS -->
                <NuxtLink v-for="item in data.top" :to="`${item.news_id}`"  class="topContentX">
                    <div class="topContentXImg">
                        <img class="autoSetImg" :src="`https://newstest.kehem.com/${item.image}`" alt="">
                    </div>
                    <div class="topContentXTitle">
                        <p class="topContentXTitleText text-dotted-3">{{ item.title }}</p>
                        <p class="topContentXSubTitle text-dotted-3">{{ item.news_brief }}</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<script setup>

const { data } = useFetch('https://newstest.kehem.com/api/leadtopnews');

if (data.value) {
    const lead = data.value.lead;
}



</script>