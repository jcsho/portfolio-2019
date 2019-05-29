<template>
    <footer class="footer">
        <ul class="footer__list">
            <li v-for="link in $data._links" :key="link.id" class="footer__list-item">
                <NavLink :prop="link"/>
            </li>
        </ul>
        <p class="footer__text">&copy; 2019 Justin Ho</p>
    </footer>
</template>

<script lang="ts">
import NavLink, { NavLinkProp } from '@/components/NavLink.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    NavLink
  }
})
export default class Footer extends Vue {
    /** List of relevant links for personal work / social media */
    public _links: NavLinkProp[] = [
        {
        icon: 'fas fa-file',
        link: 'https://www.dropbox.com/s/v7cccp9yq60nb71/Resume_Justin_Ho.pdf?dl=0',
        text: 'resume',
        },
        {
        icon: 'fas fa-envelope',
        link: 'mailto:justinhodev@gmail.com',
        text: 'justinhodev@gmail.com',
        },
        {
        icon: 'fab fa-github',
        link: 'https://github.com/justinhodev',
        text: 'justinhodev',
        },
        {
        icon: 'fab fa-linkedin-in',
        link: 'https://linkedin.com/in/justin-ho-dev',
        text: 'Justin Ho',
        }
    ];
}
</script>

<style lang="scss">
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
    background-color: var(--dark-mode-text);
    color: var(--dark-mode-bg);

    &__list {
        display: block;
        list-style: none;
    }



    &__list-item {
        margin-top: 1rem;

        & > a {
            color: var(--dark-mode-bg);
            font-size: 0.85rem;

            & > i {
                margin-right: 0.4rem;
            }
        }
    }

    &__text {
        font-size: 0.85rem;
    }
}

@media only screen and (min-width: 1300px) {
    .footer {
        height: 15vh;
        background-color: var(--dark-mode-bg);

        &__text {
            color: var(--dark-mode-text);
        }

        &__list {
            display: none;
        }
    }
}
</style>
