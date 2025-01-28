<template>
    <div class="outer-topLeadContainerX">
        <div class="topLeadContainerX">
            <NuxtLink :to="`/news/${data.lead.news_id}`" class="leadContainerX">
                <div class="innerLeadX ">
                    <NuxtImg class="autoSetImg bordered" :src="data.lead.image" :alt="data.lead.caption" loading="lazy"
                            placeholder="./placeholder.svg" placeholder-class="autoSetImg" />
                    
                </div>
                <div class="leadTitleX">
                    <p class="text-dotted-2">{{ data.lead.title }}</p>
                </div>
            </NuxtLink>



            <div class="topContainerX">
                <!-- TOP NEWS -->
                <NuxtLink v-for="item in data.top" :to="`/news/${item.news_id}`" :key="item.news_id"
                    class="topContentX">
                    <div class="topContentXImg">
                        <NuxtImg class="autoSetImg" :src="`${item.image}`" loading="lazy"  placeholder="./placeholder.svg" placeholder-class="autoSetImg" />
                    </div>
                    <div class="topContentXTitle">
                        <p class="topContentXTitleText text-dotted-3 newsTitle underlined"><span v-if="item.caption"
                                class="newsCaption">{{ item.caption }}</span> {{ item.title }}</p>
                        <p class="topContentXSubTitle text-dotted-3 Black">{{ item.news_brief }}</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<script setup>
import { NuxtImg } from '#components';


const { data } = useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/topLead.json');

if (data.value) {
    const lead = data.value.lead;
}



</script>