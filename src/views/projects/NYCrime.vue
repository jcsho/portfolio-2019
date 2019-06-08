<template>
    <section class="project">
        <h1 class="project__title project__title--close">New York Crime Visualized</h1>

        <img src="@/assets/ny-crime-vis-compressed.png" alt="" class="project__image">

        <section class="project__info">
            <dl class="project__list">
                <dt class="project__list-heading">Skills</dt>
                <dd class="project__list-item">Data Visualization</dd>
                <dd class="project__list-item">Visual Analytics</dd>
                <dd class="project__list-item">Data Interaction</dd>
            </dl>

            <dl class="project__list">
                <dt class="project__list-heading">Info</dt>
                <dd class="project__list-item">Timeframe: January - April 2019 (4 months)</dd>
                <dd class="project__list-item">Team Size: 2</dd>
            </dl>
        </section>

        <section class="project__button project__button--spaced">
            <Button v-for="btnProp in $data._externalLink" :key="btnProp.id" :prop="btnProp"/>
        </section>
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
export default class NYCrime extends Vue {
    public _externalLink: ButtonProp[] = [
        {
        icon: 'fas fa-external-link-alt',
        label: 'Link to visualization project',
        link: 'https://justinhodev.github.io/nyc-data-visualization/',
        text: 'See It Live'
        },
        {
        icon: 'fas fa-external-link-alt',
        label: 'Link to report of project',
        link: 'https://drive.google.com/open?id=1zczRp2KWCvj8GW2Cip8vmt4tj424Nl0xPJUhiA7tolg',
        text: 'See Full Report'
        },
    ];
}
</script>

<style lang="scss" src="@/styles/projects.scss">
