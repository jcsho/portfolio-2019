<template>
    <section class="card">
        <router-link class="card__link" :to="link">
            <i class="card__icon" :class="icon"></i>
            <h2 class="card__heading">{{ title }}</h2>
        </router-link>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseCard extends Vue {
    @Prop({ default: '/' })
    public link!: string;

    @Prop({ default: ''})
    public icon!: string;

    @Prop({ default: ''})
    public title!: string;

}
</script>

<style lang="scss">
.card {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 30vh;
    color: var(--dark-mode-text);

    &__link {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10vw;
        margin-right: 2vw;
        transition: color 0.1s ease-in;

        &:hover {
            color: var(--teal-color);
        }
    }

    &__icon {
        font-size: 2rem;
        width: 4rem;
    }

    &__heading {
        margin: 0;
        font-size: 1.8rem;
    }
}

@media only screen and (min-width: 1300px) {
    .card {

        width: 35vw;

        &__icon {
            font-size: 5rem;
            width: 8rem;
        }

        &__heading {
            font-size: 2rem;
            width: 18vw;
        }
    }
}
</style>
