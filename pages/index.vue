<script setup>
import Logo from '~/components/logo.vue';
import NavBar from '../components/NavBar.vue';
import LeadTop from '~/components/LeadTop.vue';

</script>


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
        <FrontCategory2 />

        <!-- অর্থনীতি, অপরাধ -->
        <FrontCategory3 />

        <!-- খেলাধুলা, ভিডিও -->
        <FrontCategory4 />

        <!-- বিনোদন -->
        <FrontCategory5 />

        <!-- AD-3 -->
        <div class="big-ad fullWidth pad-tb--10">
            <img class="w-100" src="http://dummyimage.com/1920x250" alt="">
        </div>

        <!-- মতামত, ধর্মীয় -->
        <section class="g-res-4-col-container fullWidth max-h-100 col-gap-10">
            <aside class="span-3 h-100">
                <!-- মতামত -->
                <FrontCategory6 />

                <!-- ধর্মীয় -->
                <FrontCategory7 />
            </aside>
            <aside class="h--100">
                <!-- AD-3 -->
                <div class="big-ad-ver">
                    <img class="w-i h-auto" src="http://dummyimage.com/250x520" alt="">
                </div>
            </aside>
        </section>

        <!-- সাহিত্য -->
        <FrontCategory8 />
        <!-- সম্পাদকীয় -->
        <FrontCategory9 />
        <!-- Footer -->
        <!-- <FooterDes /> -->
    </NuxtLayout>
</template>