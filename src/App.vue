<template>
  <v-app>
    <v-toolbar app flat>
      <v-toolbar-title class="headline text-uppercase">
        <span>Justin Ho</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    //
  },
  data() {
    return {
      //
    };
  }
};
</script>
