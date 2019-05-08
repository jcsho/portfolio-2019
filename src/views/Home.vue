<template>
  <div class="home">
    <BaseLanding />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLanding from '@/components/BaseLanding.vue';

@Component({
  components: {
    BaseLanding,
  },
})
export default class Home extends Vue {}
</script>
