<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';

@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
:root {
  --primary-color: #67c5c2;
  --secondary-color: #9f9f9f;
  --dark-mode-bg: #3a5169;
  --dark-mode-text: #fff;
}

body {
  margin: 0;
  overflow-x: hidden;
  font-family: 'Quicksand', sans-serif;
  color: var(--dark-mode-text);
  background-color: var(--dark-mode-bg);
}

a {
  text-decoration: none;
  color: var(--dark-mode-text);
}
</style>

