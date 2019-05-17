<template>
  <section>
    <BaseLanding />
    <BaseCard 
      v-for="project in projects" 
      :key="project.id" 
      :link="project.link" 
      :icon="project.icon"
      :title="project.name"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLanding from '@/components/BaseLanding.vue';
import BaseCard from '@/components/BaseCard.vue';

type Project = {
  link: Object,
  icon: string,
  name: string,
  // todo add description
  // description: string,
};

@Component({
  components: {
    BaseLanding,
    BaseCard,
  },
})
export default class Home extends Vue {
  private projects: Project[] = [
    {
      link: { name: 'mesh'},
      icon: 'fas fa-layer-group',
      name: 'Mesh'
    },
    {
      link: { name: 'hypetracker'},
      icon: 'fas fa-database',
      name: 'HypeTracker'
    },
    {
      link: { name: 'virtuallysavinglives'},
      icon: 'fas fa-vr-cardboard',
      name: 'Virtually Saving Lives'
    },
  ];
}
</script>
