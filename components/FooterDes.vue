<template>
    <footer class="footer m-t--50">
        <div class="inner-footer">
            <!-- SOCIAL ICONS -->
            <div class="follow-us borderBottom1px">
                <p>ফলো করুন</p>
                <div class="share-icon-design">
                    <a href="#" target="_blank" title="Facebook"><i class="m-facebook"></i></a>
                    <a href="#" target="_blank" title="Instagram"><i class="m-instagram"></i></a>
                    <a href="#" target="_blank" title="WhatsApp"><i class="m-whatsapp"></i></a>
                    <a href="#" target="_blank" title="Twitter"><i class="m-twitter"></i></a>
                    <a href="#" target="_blank" title="Linkedin"><i class="m-linkedin"></i></a>
                </div>
            </div>

            <!-- MAIN FOOTER -->
            <div class="footer-main">
                <!-- COLUMN - 1 -->
                <div class="column colMax">
                    <div class="topHeading">
                        <p>সম্পাদক ও প্রকাশক</p>
                        <span class="borderBottom"></span>
                    </div>
                    <div class="userList">
                        <!-- USER 1 -->
                        <div class="userInfo">
                            <div class="userImg">
                                <img src="https://www.dummyimage.com/600x900" alt="">
                            </div>
                            <div class="userDetails">
                                <div class="vrLine"></div>
                                <div class="userTexts">
                                    <p>এম এ এইচ শাহীন</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <!-- USER 2 -->
                        <!-- <div class="userInfo">
                            <div class="userImg">
                                <img src="https://www.dummyimage.com/600x900" alt="">
                            </div>
                            <div class="userDetails">
                                <div class="vrLine"></div>
                                <div class="userTexts">
                                    <p>ইখতিয়ার উদ্দিন মোহাম্মদ বিন</p>
                                    <p>যুগ্ম সাধারণ সম্পাদক</p>
                                </div>
                            </div>
                        </div> -->
                        <!-- USER 3 -->
                        <!-- <div class="userInfo">
                            <div class="userImg">
                                <img src="https://www.dummyimage.com/600x900" alt="">
                            </div>
                            <div class="userDetails">
                                <div class="vrLine"></div>
                                <div class="userTexts">
                                    <p>বেনজীর আহমেদ</p>
                                    <p>যুগ্ম সাধারণ সম্পাদক</p>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
                <!-- COLUMN - 2 -->
                <div class="column">
                    <div class="topHeading">
                        <p>অফিস</p>
                        <span class="borderBottom"></span>
                    </div>
                    <div class="footer-address">
                        <label>
                            <i class="m-location1"></i>
                            <p>২য় তলা, নেহার মার্কেট, জিন্দাবাজার, সদর, সিলেট - ৩১১০</p>
                        </label>
                        <label>
                            <i class="m-envelope"></i>
                            <p>ekattorprotidin71@gmail.com</p>
                        </label>
                        <label>
                            <i class="m-phone2"></i>
                            <p>মোবাইল: +৮৮০১৭১১-২২৭৯২৪</p>
                        </label>
                        <label>
                            <i class="m-phone2"></i>
                            <p>বার্তা কক্ষ: +৮৮০১৬১১-৮৫৯০২৪</p>
                        </label>
                    </div>
                </div>
                <!-- COLUMN - 3 -->
                <!-- <div class="column">
                    <div class="topHeading">
                        <span class="borderBottom"></span>
                        <p>লিংকস্‌</p>
                        <span class="borderBottom"></span>
                    </div>
                    <div class="footer-links">
                        <label>
                            <i class="bi bi-box-arrow-up-right"></i>
                            <p>ই-পেপার</p>
                        </label>
                        <label>
                            <i class="bi bi-box-arrow-up-right"></i>
                            <p>অসম্ভবের দর্শন</p>
                        </label>
                        <label>
                            <i class="bi bi-box-arrow-up-right"></i>
                            <p>বাণী চিরন্তন</p>
                        </label>
                        <label>
                            <i class="bi bi-box-arrow-up-right"></i>
                            <p>অনন্ত যাত্রা ম্যাগাজিন</p>
                        </label>
                        <label>
                            <i class="bi bi-box-arrow-up-right"></i>
                            <p>পাহাড়ি রহস্য</p>
                        </label>
                        <label>
                            <i class="bi bi-box-arrow-up-right"></i>
                            <p>এক রবীন্দ্রনাথে সারা বাংলা</p>
                        </label>
                    </div>
                </div> -->
            </div>

            <!-- NEWSPAPER REGISTRATION -->
            <!-- <div class="govtRegi borderBottom1px">
                <p>সরকারি নিবন্ধন নং : ১৩৪৬-৬৪৪১</p>
            </div> -->

        </div>

        <!-- COPYRIGHTS INFORMATION -->
        <div class="newspaperCopyright">
            <!-- CONTENT COPYRIGHTS -->
            <div>
                <p>স্বত্ব &copy; ২০২৫</p>
                <a href="#">সোনার বাংলা কর্পোরেশন</a>
            </div>
            <!-- BRACK -->
            <p class="lineParagraph">|</p>
            <!-- DEVELOPER COPYRIGHTS -->
            <div>
                <p>তথ্যপ্রযুক্তি সহযোগিতায়</p>
                <a class="f-center gap-05" href="https://kehem.com/"><img class="w--15"
                        src="https://kehem.com/static/kehem.54168f2599d9.webp" alt="">কেহেম আইটি</a>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.share-icon-design {
    display: flex;
    gap: 1.5rem;

    & a {
        position: relative;
        transition: all 0.3s ease;

        &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);
            width: 2rem;
            aspect-ratio: 1;
            border-radius: 50%;
            background-color: #d4c6c7;
            z-index: -1;
        }

        & i {
            font-size: 1.2rem;
            color: #4e0d68;
        }

        &:hover {
            &::before {
                background-color: #4e0d68;
                transition: all 0.3s ease;
            }

            & i {
                color: #d4c6c7;
                transition: all 0.3s ease;
            }

        }
    }

}
</style>