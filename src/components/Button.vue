<template>
    <a class="btn" :href="link">
        {{ text }}
        <i class="btn__icon" :class="icon"></i>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue{
    @Prop() link?: string;
    @Prop() icon?: string;
    @Prop() text?: string;
}
</script>

<style lang="scss">
.btn {
    background-color: var(--secondary-color);
    color: var(--dark-mode-bg);
    border-radius: 0.5rem;
    padding: 0.7rem 1.5rem;
    transition: background-color 0.1s ease-in;

    &:hover {
        background-color: var(--teal-color);
        cursor: pointer;
    }
}
</style>
