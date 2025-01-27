<script setup>
import Logo from '~/components/logo.vue';
import NavBar from '../components/NavBar.vue';
import LeadTop from '~/components/LeadTop.vue';

</script>


<template>
    <div>
        <!-- <DateBlock /> -->
        <Logo />
        <NavBar />
        <MarqueeBlock />
        <LeadTop />
        <!-- AD-1 -->
        <div class="big-ad fullWidth pad-tb--30">
            <img class="w-100" src="http://dummyimage.com/1920x200" alt="">
        </div>
        <FrontCategory />
        <!-- <BanglaDate /> -->
        <FrontCategory2 />
        <FrontCategory3 />
        <FrontCategory4 />
        <FrontCategory5 />
        <!-- AD-3 -->
        <div class="big-ad fullWidth pad-tb--10">
            <img class="w-100" src="http://dummyimage.com/1920x250" alt="">
        </div>
        <FrontCategory6 />
        <FrontCategory7 />
        <FrontCategory8 />
        <!-- AD-3 -->
        <div class="big-ad fullWidth pad-tb--10">
            <img class="w-100" src="http://dummyimage.com/1920x250" alt="">
        </div>
        <FrontCategory9 />
        <!-- <FrontCategory10 /> -->
        <Footer />
    </div>
</template>