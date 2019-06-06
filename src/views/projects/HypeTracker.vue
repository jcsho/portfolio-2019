<template>
    <section class="project">
        <h1 class="project__title  project__title--close">HypeTracker</h1>

        <img
            class="project__image"
            src="@/assets/details-page-cropped-compressed.png"
            alt="Details Page for a Sneaker on HypeTracker"
        >

        <section class="project__info">
            <dl class="project__list">
                <dt class="project__list-heading">Skills</dt>
                <dd class="project__list-item">Full Stack Web Application</dd>
                <dd class="project__list-item">Entity Relation Diagrams</dd>
                <dd class="project__list-item">Using Public API Data</dd>
            </dl>

            <dl class="project__list">
                <dt class="project__list-heading">Info</dt>
                <dd class="project__list-item">Timeframe: September - December 2018 (4 months)</dd>
                <dd class="project__list-item">Team Size: 2</dd>
            </dl>
        </section>

        <section class="project__button project__button--center">
            <Button :prop="$data._externalLink" />
        </section>

        <h2 class="project__heading">Overview</h2>

        <p class="project__text">HypeTracker is a full stack web application built to visualize sneaker data from social media platforms such as Reddit and Twitter.</p>

        <h2 class="project__heading">Planning the Database</h2>

        <p class="project__text">Our goal was to serve aggregate data from multiple social media outlets on the relative popularity of a sneaker to provide consumers with a point of reference for their purchases.</p>

    </section>
</template>

<script lang="ts">
import Button, { ButtonProp } from '@/components/Button.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
        Button
    }
})
export default class HypeTracker extends Vue {
    public _externalLink: ButtonProp = {
        icon: 'fas fa-external-link-alt',
        link: 'https://github.com/justinhodev/hype-tracker',
        label: 'Link to github repository',
        text: 'See Github Repo',
    };
}
</script>

<style lang="scss" src="@/styles/projects.scss">
