<template>
    <div class="marqueeBlock">
        <div class="f pad-r--10 f-start-center">
            <h2 class="pad-l-05 pad-tb--10 pad-r--10 bg-sironam">শিরোনাম</h2>
            <marquee class="marquee w-100 h-100" behavior="" direction="" onmouseover="this.stop();"
                onmouseout="this.start();">
                <ul class="f gap-20 h-i text-center">
                    <li v-for="item in data?.marquee" :key="item.news_id">
                        <NuxtLink :to="`/news/${item.news_id}`">{{ item.title }}</NuxtLink>
                    </li>
                </ul>
            </marquee>

        </div>
    </div>
    {{ error }}
</template>

<script setup>
const { data, error } = await useFetch('https://surajit-singha-sisir.github.io/mastorsCDN/JS/marquee.json');
</script>


<style>
.marqueeBlock {
    position: relative;
    background-color: #fafafa;
    border-bottom: 1px solid #e7e7e7;

    & marquee li a {
        color: #474444;
        font-size: 1.2rem;
    }

    & marquee li a:hover {
        color: #ff0000;
    }

    .bg-sironam {
        background-color: #eef1ef;
        color: #575757;
    }
}

@media screen and (max-width: 768px) {
    .bg-sironam {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
}
</style>