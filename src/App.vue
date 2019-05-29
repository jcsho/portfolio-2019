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
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Footer,
    NavBar,
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" src="@/styles/main.scss" />

