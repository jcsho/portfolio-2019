<template>
  <section class="landing">
    <h1 class="landing__text">
      {{ heroText }}
    </h1>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseLanding extends Vue {
    @Prop() public heroText?: string;
}
</script>

<style lang="scss">
.landing {
  display: flex;
  width: 100vw;
  height: 50vh;
  justify-content: center;
  align-items: center;

  &__text {
    margin-left: 1.5rem;
    font-size: 2rem;
    text-align: left;
  }
}

@media only screen and (min-width: 1300px) {
  .landing {
    height: 70vh;
    &__text {
      margin: 0;
      font-size: 4rem;
      max-width: 40vw;
    }
  }
}
</style>
