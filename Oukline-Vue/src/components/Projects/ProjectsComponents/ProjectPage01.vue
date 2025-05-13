<template>
    <div class="inner-container">

        <div class="main-img-box">
            <div class="main-img">
                <img src="../../../assets/img/projects/wegtrans/Main-img.png" alt="">
            </div>
            <p class="main-img text">Case study</p>
        </div>
        <div class="main-title-box">
            <div class="main-titles">
                <h2 class="title-01">Weg Trans</h2>
                <h2 class="title-02">International transport & spedition</h2>
            </div>
            <p class="date">2023</p>
        </div>
        <div class="grid-4img">
            <img src="../../../assets/img/projects/wegtrans/4grid-01.png" alt="">
            <img src="../../../assets/img/projects/wegtrans/4grid-02.png" alt="">
            <img src="../../../assets/img/projects/wegtrans/4grid-03.png" alt="">
            <img src="../../../assets/img/projects/wegtrans/4grid-04.png" alt="">
        </div>
        <div class="text-box">
            <ProjectsText>For Weg Trans, we developed a complete branding package, a website, and social media assets. The client sought a unique, playful design, and through clear goals and regular communication, the project progressed seamlessly.</ProjectsText>
            <ProjectsText>We began with branding, delivering a logo and comprehensive brand guidelines that exceeded the client’s expectations.</ProjectsText>
        </div>
        <div class="img-box-01">
            <img src="../../../assets/img/projects/wegtrans/9grid.png" alt="">
        </div>
        <div class="img-flexbox">
            <img src="../../../assets/img/projects/wegtrans/2row-logo.png" alt="">
            <img src="../../../assets/img/projects/wegtrans/3colums-img.png" alt="">
        </div>
        <ProjectsText>The website features a creative, playful design with custom illustrations tailored to the client’s vision. While adapting these elements for mobile was challenging, a simplified, responsive approach ensured both usability and client satisfaction.</ProjectsText>
        <div class="grid4">
            <img src="../../../assets/img/projects/wegtrans/4grid-img.png" alt="">
        </div>
        <ProjectsText>Pleased with our work, the client asked us to continue by creating social media posts and custom wallpapers for their team.</ProjectsText>
        <div class="grid3">
            <img src="../../../assets/img/projects/wegtrans/3grid.png" alt="">
        </div>

        <ProjectsForm />
    </div>
</template>

<script setup>
    import ProjectsText from './ProjectsText.vue'
    import ProjectsForm from './ProjectsForm.vue';
</script>

<style scoped>
    .main-img-box {
        display: flex;
        flex-direction: column;
        row-gap: 60px;
        padding-top: 55px;
        padding-bottom: 60px;
    }

    .main-img-text {
        color: var(--main-color-black);
        font-size: 20px;
        font-weight: 400;
    }

    .main-title-box {
        display: flex;
        justify-content: space-between;
        padding-bottom: 50px;
    }

    .title-01, .title-02 {
        font-size: 50px;
        font-weight: 300;
    }

    .title-01 {
        color: var(--main-color-black);
    }

    .title-02 {
        color: var(--main-second-color);
    }

    .date {
        align-self: flex-end;
    }

    .grid-4img {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .text-box {
        display: flex;
        flex-direction: column;
        row-gap: 50px;
        padding-top: 100px;
        padding-bottom: 150px;
    }

    .img-box-01 {
        padding-bottom: 100px;
    }

    .img-flexbox {
        display: flex;
        flex-direction: column;
        row-gap: 50px;
        padding-bottom: 100px;
    }

    .grid4 {
        padding-top: 150px;
        padding-bottom: 100px;
    }

    .grid3 {
        padding-top: 150px;
        padding-bottom: 240px;
    }
</style>