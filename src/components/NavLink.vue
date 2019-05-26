<template>
    <a :href="prop.link" target="_blank" class="nav-link">
        <i :class="prop.icon"></i>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

/** Prop object for NavLink Component */
export interface NavLinkProp {
    /** Font awesome icon */
    icon: string;
    /** URL to redirect to */
    link: string;
}

@Component
export default class NavLink extends Vue {
    @Prop({ type: Object as () => NavLinkProp })
    public prop!: NavLinkProp;
}
</script>

<style lang="scss">
.nav-link {
    font-size: 1.2em;
    color: var(--dark-mode-text);
    transition: color 0.1s ease-in;

    &:hover {
        color: var(--teal-color);
    }
}
</style>
