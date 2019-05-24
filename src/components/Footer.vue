<template>
    <footer class="footer">
        <p class="footer__text">&copy; 2019 Justin Ho</p>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

}
</script>

<style lang="scss">
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 10vh;

    &__text {
        font-size: 0.85rem;
    }
}
</style>
