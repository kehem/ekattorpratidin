<template>
    <div class="marqueeBlock">
        <div class="f pad-r--10 f-center">
            <h2 class="pad-l-05 pad-tb--10 pad-r--10 bg-sironam">শিরোনাম</h2>
            <marquee class="marquee w-100 h-100" behavior="" direction="" onmouseover="this.stop();"
                onmouseout="this.start();">
                <ul class="f gap-20 h-i text-center">
                    <li v-for="item in items" :key="item.key">
                        <NuxtLink :to="`/news/${item.key}`">{{ item.title }}</NuxtLink>
                    </li>
                    <!-- <li v-for="item in items" :key="item.key">
                        <a :href="'https://ekattorpratidin.com/news/' + item.key">{{ item.title }}</a>
                    </li> -->
                </ul>
            </marquee>
        </div>
    </div>
    {{ error }}
</template>

<script setup>
// GET REQUEST
const { data, error } = await useFetch('/JSONS/sironam.json');
const items = data;
console.log(items);



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
<!-- https://api.mediastack.com/v1/news?access_key=ad5ff9775fc34a3e55b815ae6b6f71fd -->
