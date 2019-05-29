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
import NavLink, { NavLinkProp } from '@/components/NavLink.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    NavLink
  }
})
export default class NavBar extends Vue {
  /** List of relevant links for personal work / social media */
  public _links: NavLinkProp[] = [
    {
      icon: '',
      link: 'https://www.dropbox.com/s/v7cccp9yq60nb71/Resume_Justin_Ho.pdf?dl=0',
      text: 'resume',
    },
    {
      icon: 'fas fa-envelope',
      link: 'mailto:justinhodev@gmail.com',
      text: '',
    },
    {
      icon: 'fab fa-github',
      link: 'https://github.com/justinhodev',
      text: '',
    },
    {
      icon: 'fab fa-linkedin-in',
      link: 'https://linkedin.com/in/justin-ho-dev',
      text: '',
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
  padding: 1.5rem;

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
    display: none;
    padding: 0;
    list-style-type: none;
  }
}

@media only screen and (min-width: 1300px) {
  .nav {
    height: 18vh;
    padding: 0 20rem;

    &__list {
      display: flex;
      flex-direction: row;
    }

    &__list-item {
      padding-right: 2rem;
    }
  }
}
</style>

