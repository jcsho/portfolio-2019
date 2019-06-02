<template>
    <a class="btn" :href="prop.link" target="_blank" rel="noopener noreferrer">{{ prop.text }}<i class="btn__icon" :class="prop.icon"></i></a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface ButtonProp {
    icon: string;
    link: string;
    text: string;
}

@Component
export default class Button extends Vue {
    @Prop({ type: Object as () => ButtonProp })
    public prop!: ButtonProp;
}
</script>

<style lang="scss">
.btn {
    background-color: var(--dark-mode-bg);
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    border-radius: 0.5rem;
    padding: 0.7rem 1.5rem;
    transition: background-color 0.1s ease-in;

    &:hover {
        background-color: var(--teal-color);
        cursor: pointer;
    }

    &__icon {
        margin-left: 0.7rem;
    }
}
</style>
