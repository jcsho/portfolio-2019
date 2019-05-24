<template>
  <section>
    <BaseLanding 
      :heroText="$data._message"
    />
    <BaseCard 
      v-for="project in $data._projects" 
      :key="project.id" 
      :link="project.link" 
      :icon="project.icon"
      :title="project.name"
    />
  </section>
</template>

<script lang="ts">
import BaseCard from '@/components/BaseCard.vue';
import BaseLanding from '@/components/BaseLanding.vue';
import { Component, Vue } from 'vue-property-decorator';

/** Project specs for BaseCard props */
type Project = {
  /** Vue router link */
  link: object,
  /** Font awesome class / symbol to use */
  icon: string,
  /** Display name in BaseCard component */
  name: string,
};

@Component({
  components: {
    BaseCard,
    BaseLanding
  },
})
export default class Home extends Vue {
  /** Text displayed as hero image on landing */
  public _message: string = 'I Enjoy Transforming Digital Experiences';

  /** Projects to be passed as props on home page */
  public _projects: Project[] = [
    {
      icon: 'fas fa-layer-group',
      link: { name: 'mesh'},
      name: 'Mesh'
    },
    {
      icon: 'fas fa-database',
      link: { name: 'hypetracker'},
      name: 'HypeTracker'
    },
    {
      icon: 'fas fa-chart-bar',
      link: { name: 'nycrime'},
      name: 'New York Crime Visualized'
    },
    {
      icon: 'fas fa-vr-cardboard',
      link: { name: 'virtuallysavinglives'},
      name: 'Virtually Saving Lives'
    },
  ];


}
</script>
