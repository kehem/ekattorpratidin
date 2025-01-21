<template>
    <!-- DATE BLOCK -->
    <div class="date-block">
        <div class="f f-just-center f-align-items-center w-100 m-auto pad-tb--10">
            <div class="w-90 text-center f f-between-center gap-10 toggleCenter">
                <!-- Date Display -->
                <div class="text--09 cur-help todayDate" title="বাংলা, ইংরেজি ও হিজরি তারিখ">
                    <p class="dateBlock m-auto">
                        আজ (বাংলা) {{ banglaDate }}, ইংরেজি ({{ formattedEnglishDate }})
                    </p>
                </div>

                <!-- Social Media Links -->
                <div class="socialMedia f gap-05">
                    <a href="#" title="Facebook"><i class="m-facebook2"></i></a>
                    <a href="#" title="Instagram"><i class="m-instagram"></i></a>
                    <a href="#" title="WhatsApp"><i class="m-whatsapp"></i></a>
                    <a href="#" title="Twitter"><i class="m-twitter"></i></a>
                    <a href="#" title="Linkedin"><i class="m-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getDate } from 'bangla-calendar';

export default {
    data() {
        return {
            banglaDate: '',
            formattedBanglaDate: '',
            formattedEnglishDate: ''
        };
    },
    mounted() {
        this.setBanglaDate();
    },
    methods: {
        setBanglaDate() {
            const date = new Date();
            this.banglaDate = getDate(date);
            this.formattedBanglaDate = getDate(date, {
                format: 'D MMMM, YYYYb',
                calculationMethod: 'BN'
            });
            this.formattedEnglishDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`;
        }
    }
};
</script>


<style>
.date-block {
    position: relative;
    background-color: #e7e7e7;
    font-size: 1rem;

    & .dateBlock {
        font-size: 1.1rem;
    }

    & .socialMedia a i {
        color: #302222;
    }

    & .socialMedia a:hover i {
        color: #fc0000;
    }
}
@media screen and (max-width: 768px) {
    .todayDate {
        display: none;
    }
    .toggleCenter {
        justify-content: center;
    }
}
</style>