<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }">
      <h1 class="nav__logo">Justin Ho</h1>
    </router-link>

    <ul class="nav__list">
      <li v-for="link in $data._links" :key="link.id" class="nav__list-item">
        <NavLink :prop="link"/>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import NavLink, { NavLinkProp } from "@/components/NavLink.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    NavLink
  }
})
export default class NavBar extends Vue {
  /** List of relevant links for personal work / social media */
  public _links: NavLinkProp[] = [
    {
      icon: "fas fa-envelope",
      link: "mailto:justinhodev@gmail.com"
    },
    {
      icon: "fab fa-github",
      link: "https://github.com/justinhodev"
    },
    {
      icon: "fab fa-linkedin-in",
      link: "https://linkedin.com/in/justin-ho-dev"
    }
  ];
}
</script>

<style lang="scss">
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  &__logo {
    margin: 0;
    font-size: 2rem;
    color: var(--dark-mode-text);
    transition: color 0.1s ease-in;

    &:hover {
      color: var(--teal-color);
    }
  }

  &__list {
    display: flex;
    padding: 0;
    list-style-type: none;
  }

  &__list-item {
    padding-right: 1rem;
  }
}

@media only screen and (min-width: 1300px) {
  .nav {
    height: 18vh;
    padding: 0 20rem;

    &__list-item {
      padding-right: 2rem;
    }
  }
}
</style>

