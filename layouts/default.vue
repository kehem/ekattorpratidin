<template>
    <section>
        <Logo />
        <NavBar />
        <NuxtLoadingIndicator />
        <!-- <MarqueeBlock /> -->
        <slot />
        <FooterDes />
    </section>
</template>

<script setup>
</script>
<style>
.nuxt-loading-indicator {
    height: 3px !important;
    position: relative !important;
    /* background: transparent !important; */
    animation: backgroundMove 0.3s ease infinite;
    width: 100% !important;

    background: repeating-linear-gradient(to right, #ff4949 0%,#ff1c1c 100%) !important;

}

</style>
