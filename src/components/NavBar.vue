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
import NavLink from '@/components/NavLink.vue';
import { Component, Vue} from 'vue-property-decorator';

/** Link to external domains */
type ExternalLink = {
    /** URI to redirect to */
    url: string,
    /** Font awesome icon to use */
    icon: string,
    /** Target to open, _blank or preventing redirect, etc */
    target: string
};

@Component({
    components: {
        NavLink
    }
})
export default class NavBar extends Vue {
    /** List of relevant links for personal work / social media */
    public _links: ExternalLink[] = [
        {
            icon: 'fas fa-envelope',
            target: '',
            url: 'mailto:justinhodev@gmail.com',
        },
        {
            icon: 'fab fa-github',
            target: '_blank',
            url: 'https://github.com/justinhodev',
        },
        {
            icon: 'fab fa-linkedin-in',
            target: '_blank',
            url: 'https://linkedin.com/in/justin-ho-dev',
        },
    ];
}
</script>

<style lang="scss">
.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 8rem;

    &__logo {
        margin: 0;
        font-size: 2rem;
        color: var(--primary-color);
    }

    &__list {
        display: flex;
        padding: 0;
        list-style-type: none;
    }

    &__list-item {
        padding-right: 2rem;
    }

    &__link {
        font-size: 1.2rem;
        
        &:hover {
            color: var(--primary-color);
        }
    }
}
</style>

