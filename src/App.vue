<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" src="@/styles/main.scss" />

