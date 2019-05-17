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

<style lang="scss" src="@/styles/main.scss" />

