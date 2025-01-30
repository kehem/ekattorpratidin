<template>
    <NuxtLayout>
        <LeadTop />

        <!-- AD-1 -->
        <div class="big-ad fullWidth pad-tb--30">
            <img class="w-100" src="http://dummyimage.com/1920x200" alt="">
        </div>

        <!-- সারাদেশ, রাজনীতি, বিদেশ -->
        <FrontCategory />

        <!-- সিলেট -->
        <FrontCategory2 v-if="isCategory2Visible" />

        <!-- অর্থনীতি, অপরাধ -->
        <FrontCategory3 v-if="isCategory3Visible" />

        <!-- খেলাধুলা, ভিডিও -->
        <FrontCategory4 v-if="isCategory4Visible" />

        <!-- বিনোদন -->
        <FrontCategory5 v-if="isCategory5Visible" />

        <!-- AD-3 -->
        <div class="big-ad fullWidth pad-tb--10">
            <img class="w-100" src="http://dummyimage.com/1920x250" alt="">
        </div>

        <!-- মতামত, ধর্মীয় -->
        <section class="g-res-4-col-container fullWidth max-h-100 col-gap-10">
            <aside class="span-3 h-100">
                <!-- মতামত -->
                <FrontCategory6 v-if="isCategory6Visible" />

                <!-- ধর্মীয় -->
                <FrontCategory7 v-if="isCategory7Visible" />
            </aside>
            <aside class="h--100">
                <!-- AD-3 -->
                <div class="big-ad-ver">
                    <img class="w-i h-auto" src="http://dummyimage.com/250x520" alt="">
                </div>
            </aside>
        </section>

        <!-- সাহিত্য -->
        <FrontCategory8 v-if="isCategory8Visible" />

        <!-- সম্পাদকীয় -->
        <FrontCategory9 v-if="isCategory9Visible" />

        <!-- Footer -->
        <!-- <FooterDes /> -->

    </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// const isCategory1Visible = ref(false)
const isCategory2Visible = ref(false)
const isCategory3Visible = ref(false)
const isCategory4Visible = ref(false)
const isCategory5Visible = ref(false)
const isCategory6Visible = ref(false)
const isCategory7Visible = ref(false)
const isCategory8Visible = ref(false)
const isCategory9Visible = ref(false)
let scrollAmount = 300;
const checkScrollPosition = () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > scrollAmount && !isCategory2Visible.value) {
        isCategory2Visible.value = true;
    }
    if (scrollPosition > (scrollAmount * 3) && !isCategory3Visible.value) {
        isCategory3Visible.value = true;
    }
    if (scrollPosition > (scrollAmount * 5) && !isCategory4Visible.value) {
        isCategory4Visible.value = true;
    }
    if (scrollPosition > (scrollAmount * 7) && !isCategory5Visible.value) {
        isCategory5Visible.value = true;
    }
    if (scrollPosition > (scrollAmount * 9) && !isCategory6Visible.value) {
        isCategory6Visible.value = true;
    }
    if (scrollPosition > (scrollAmount * 11) && !isCategory7Visible.value) {
        isCategory7Visible.value = true;
    }
    if (scrollPosition > (scrollAmount * 13) && !isCategory8Visible.value) {
        isCategory8Visible.value = true;
    }
    if (scrollPosition > (scrollAmount * 15) && !isCategory9Visible.value) {
        isCategory9Visible.value = true;
    }
    // if (scrollPosition > (scrollAmount * 17) && !isCategory10Visible.value) {
    //     isCategory10Visible.value = true;
    // }
}

onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition)
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkScrollPosition)
})
</script>
