<template>
  <section class="landing">
    <h1 class="landing__tagline">{{ tagline }}</h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseLanding extends Vue {
  @Prop()
  public tagline!: string;
}
</script>

<style lang="scss">
.landing {
  display: flex;
  width: 100vw;
  height: 70vh;
  justify-content: center;
  align-items: center;

  &__tagline {
    margin: 0;
    font-size: 4em;
  }
}
</style>
