<script setup>
import Logo from '~/components/logo.vue';
import NavBar from '../components/NavBar.vue';
import LeadTop from '~/components/LeadTop.vue';

</script>


<template>
    <div>
        <DateBlock />
        <Logo />
        <NavBar />
        <MarqueeBlock />
        <LeadTop />
        <!-- AD-1 -->
        <div class="big-ad fullWidth pad-tb--30">
            <img class="w-100" src="http://dummyimage.com/1920x200" alt="">
        </div>

        <FrontCategory />
        
    </div>
</template>