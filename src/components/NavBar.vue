<template>
    <nav class="nav">
        <router-link :to="{ name: 'home' }">
            <h1 class="nav__logo">Justin Ho</h1>
        </router-link>

        <ul class="nav__list">
            <li
                v-for="link in links"
                :key="link.id"
                class="nav__list-item">
                <NavLink
                    :link="link.url"
                    :icon="link.icon"
                    :target="link.target"
                />
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import NavLink from '@/components/NavLink.vue';

type ExternalLink = {
    url: string,
    icon: string,
    target: string
};

@Component({
    components: {
        NavLink
    }
})
export default class NavBar extends Vue {
    private links: ExternalLink[] = [
        {
            url: 'mailto:justinhodev@gmail.com',
            icon: 'fas fa-envelope',
            target: ''
        },
        {
            url: 'https://github.com/justinhodev',
            icon: 'fab fa-github',
            target: '_blank'
        },
        {
            url: 'https://linkedin.com/in/justin-ho-dev',
            icon: 'fab fa-linkedin-in',
            target: '_blank'
        },
    ];
}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3em 8em;

    &__logo {
        margin: 0;
        font-size: 2em;
        color: var(--primary-color);
    }

    &__list {
        display: flex;
        padding: 0;
        list-style-type: none;
    }

    &__list-item {
        padding-right: 2em;
    }

    &__link {
        font-size: 1.2em;
        
        &:hover {
            color: var(--primary-color);
        }
    }
}
</style>

