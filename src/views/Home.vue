<template>
  <main>
    <BaseLanding tagline="Ideate. Design. Create" />
    <BaseCard 
      v-for="project in projects" 
      :key="project.id" 
      :link="project.link" 
      :icon="project.icon"
      :title="project.name"
    />
  </main>
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
      link: { name: 'projects', params: { projectname: 'mesh'}},
      icon: 'fas fa-dice-d6',
      name: 'Mesh'
    },
    {
      link: { name: 'projects', params: { projectname: 'hype-tracker'}},
      icon: 'fas fa-database',
      name: 'HypeTracker'
    },
    {
      link: { name: 'projects', params: { projectname: 'virtually-saving-lives'}},
      icon: 'fas fa-vr-cardboard',
      name: 'Virtually Saving Lives'
    },
  ];
}
</script>
