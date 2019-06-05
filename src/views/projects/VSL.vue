<template>
  <section class="project">
    <figure class="hero">
        <h1 class="hero__text">virtually saving lives</h1>
        <img src="@/assets/vsl-logo-min.png" alt class="hero__image">
    </figure>

    <section class="project__info">
        <dl class="project__list">
            <dt class="project__list-heading">
                Skills
            </dt>
            <dd class="project__list-item">UX Research</dd>
            <dd class="project__list-item">AR Development</dd>
            <dd class="project__list-item">Project Management</dd>
        </dl>

        <dl class="project__list">
            <dt class="project__list-heading">Info</dt>
            <dd class="project__list-item">Timeframe: 4 months</dd>
            <dd class="project__list-item">Team Size: 6</dd>
        </dl>
    </section>

    <section class="project__button project__button--center">
        <Button :prop="$data._externalLink" />
    </section>

    <h2 class="project__heading">Overview</h2>

    <p class="project__text">Virtually Saving Lives is a User Experience Research project on the process of learning and applying <a href="https://www.redcross.ca/training-and-certification/course-descriptions/first-aid-at-home-courses/standard-first-aid-cpr" target="_blank" rel="noopener noreferrer">Standard First Aid</a> using augumented reality (AR) technologies. The use of AR is applied on top of existing learning process to enhance immersion, create personalization, and promote visual understanding.</p>
  </section>
</template>

<script lang="ts">
import Button, { ButtonProp } from '@/components/Button.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        Button
    }
})
export default class VSL extends Vue {
    public _externalLink: ButtonProp = {
        icon: 'fas fa-external-link-alt',
        link: 'https://www.dropbox.com/s/ws6jkyzjiqn99sg/VSL_Final_Report.pdf?dl=0',
        text: 'See Full Report'
    };
}
</script>

<style lang="scss">
@import "../../styles/projects.scss";

.hero {
    margin: 3rem 0;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-rows: 33% 33% 33%;
    grid-template-columns: 33% 33% 33%;

    &__text {
        z-index: 2;
        grid-row: 1/3;
        grid-column: 2/4;
        align-self: start;
        justify-self: end;
        width: min-content;
        margin-top: 10%;

        font-size: 1.3rem;
        line-height: 1.5rem;
        letter-spacing: 0.5rem;
    }

    &__image {
        z-index: 1;
        grid-row: 1/2;
        grid-column: 1/3;

        width: 60vw;
        height: 60vw;
    }
}

@media only screen and (min-width: 1300px) {
    .hero {
        margin: 3rem 0 8rem 0;
        &__text {
            font-size: 4rem;
            line-height: 4rem;
            letter-spacing: 1.1rem;
        }

        &__image {
            width: 35vw;
            height: 35vw;
        }
    }
}
</style>
