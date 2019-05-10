<template>
    <a :href="link" :target="target" class="nav-link">
        <i :class="icon"></i>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavLink extends Vue {
    @Prop({ default: '/'})
    public link!: string;

    @Prop()
    public icon!: string;

    @Prop({ default: '' })
    public target!: string;

}
</script>

<style lang="scss">
.nav-link {
    font-size: 1.2em;

    &:hover {
        color: var(--primary-color);
    }
}
</style>
