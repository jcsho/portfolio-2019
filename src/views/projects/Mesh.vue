<template>
  <section class="project">
    <h1 class="project__title">mesh</h1>

    <img
      class="project__image"
      src="@/assets/final-prototype-compressed.png"
      alt="Final Prototype of Mesh"
    >

    <Button
      link="https://drive.google.com/drive/folders/13BCeZ3rq0o5FiYMtpHGPKnA5K7-Qlnco?usp=sharing"
      icon="fas fa-external-link-alt"
      text="See Full Project"
    />

    <section class="project__info">
      <dl class="project__list">
        <dt class="project__list-heading">Skills</dt>
        <dd class="project__list-item">UX Research</dd>
        <dd class="project__list-item">Software System Architecture</dd>
        <dd class="project__list-item">Project Proposal</dd>
      </dl>

      <dl class="project__list">
        <dt class="project__list-heading">Info</dt>
        <dd class="project__list-item">Timeframe: 4 months</dd>
        <dd class="project__list-item">Team Size: 3</dd>
      </dl>
    </section>

    <h2 class="project__heading">Overview</h2>

    <p class="project__text">
      Mesh is a UX research project on supporting a designer's creative process by exploring solutions when working with alternative designs in the web development domain. My team of three iterated the concept in three distinct phases, from initial planning to architecture to final prototype. The final prototype is a
      <abbr title="Content Management System">CMS</abbr> style prototype software which can create connections between prototyped webpages through an inheritance hierarchy. These connections are used for new designs through positional or style regression based comparisons.
    </p>

    <h2 class="project__heading">Problem</h2>

    <p
      class="project__text"
    >The project's theme is to improve supporting designer's creative process when using digital design tools. For example, current digital design tools only support designing in a linear manner, lacking the ability to manipulate or reuse parts of a design without much effort from the user. At the beginning, I created a pitch in the domain I was familiar with, web development, and convinced two others to join me for the rest of the project. As a user of prototyping tools, I understood the limitations that often come with them. For example, it is often easier to sketch out designs using pen and paper before creating a digital prototype despite the software offering more accurate drawing tools. The issue comes when comparing, contrasting, or modifying the many sketches being generated; software based tools do not assist my needs as a designer to create changes without destructive properties or using software like paper (copying and pasting for every change). This was the main problem my team and I targetted in the project.</p>

    <figure>
      <img src="@/assets/initial-prototype-compressed.png" alt="Initial Prototype of Web Design Tool" class="project__image">
      <figcaption class="project__caption">Initial Pitch of a Web Design Tool with Self Contained "Pages" of Design(s)</figcaption>
    </figure>

    <h2 class="project__heading">Process</h2>

    <p
      class="project__text"
    >I was responsible for overseeing the project progress and facilitating team meetings to progress in the team's work. One of the main features I designed in our project was the merging of existing prototypes which have a parent-child relationship. This article will mostly focus on my thought process in creating and iterating on the feature without discussing the other parts of the system. The intial concept came when brainstorming about using multiple derivatives of the same / similar design. I wanted to improve on the design process of iteration when deciding between these related designs.</p>

    <figure>
      <img src="@/assets/phase-1-prototype-compressed.png" alt="" class="project__image">
      <figcaption class="project__caption">Multiple variations of the same design, with individual history tracking</figcaption>
    </figure>

    <h3 class="project__subheading">Adding Context Between Designs</h3>

    <p
      class="project__text"
    >To resolve this issue, I first targetted the process of iterating sketches. Referencing a few design processes using digital tools, I can see that deriving from a concept often started by duplicating such a design first. Since the design tool cannot make a connection between the two designs, I proposed to add an additional step between duplicating the designs by adding a parent-child relationship between the original design and its derivitive. By adding a relationship between the two designs, the software can now visualize connections between user generated content as well as provide methods for the user to manipulate connected content on both designs.</p>

    <figure>
      <img src="@/assets/nested-alternative-compressed.png" alt="" class="project__image">
      <figcaption class="project__caption">Working with a Derivative of a Design, with a Nested Structure Tracked on the Sidebar</figcaption>
    </figure>

    <h3 class="project__subheading">Quantifying the Differences</h3>

    <p
      class="project__text"
    >After discussions with our professor, classmates, and potential users, we discovered that this particular feature was a quality of life improvement that was not particularly useful as it did not help the designer decide between the variations. No problem, time to iterate. In the second phase, the team started to focus on the prototype and refining the interactions of the features. During this time, I focused on defining differentiations between the linked designs. Although the method is crude, I decided that in the web development domain, layout and styling are the most important quantifiable parameters the system can use to determine differences between designs. To elaborate, the system will treat each item on the page as an HTML element with attached CSS styling, the system can now display the differences between the designs using coded differences as guidelines.</p>

    <figure>
      <img src="@/assets/merging-sketch-1-compressed.jpg" alt="" class="project__image project__image--half">
      <img src="@/assets/merging-sketch-2-compressed.jpg" alt="" class="project__image project__image--half">
      <figcaption class="project__caption">Ideation Sketches of Comparison Use Case Flow</figcaption>
    </figure>

    <h3 class="project__subheading">Generate New Designs</h3>

    <p
      class="project__text"
    >Through another round of discussions, we received feedback that this was a useful feature in deciding between variations through visual comparisons, but still lacked a definitive resulting design that the user can reference. At this time, the merging idea came about. Since users wished to have a system that will help identify and create the best iteration, I proposed a "merging" system which takes a pair of connected designs and exposes the variations in the form of a list, allowing the user to rapidly toggle between the element differences, and generate a new design with those parameters. The result was a complete use case which took the designer from creating an initial design, duplicating it, making changes to the copy, and merging the desired layout or styling to create a new design.</p>

    <h3 class="project__subheading">Prototype Demo</h3>

    <iframe class="project__video" src="https://www.youtube-nocookie.com/embed/vU5WZ6okkmE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <h2 class="project__heading">Reflection</h2>

    <p
      class="project__text"
    >Throughout this project, I learnt and applied skills such as project management, user experience design, and system architecture to iterate a concept from ideation to prototype. Although I am proud of what our team has accomplished, I felt responsible for some critical decisions the team made during each phase which may have slowed our progress and affected the end result. I believe if I approached our use cases more decisively, by including more user testing, the team could have polished the concept and final project more than what we have presented. That being said, this project was the first time any of the team members worked with software design in-depth, often having to redesign or reiterate parts of the system at various points of the project in order to create a meaningful part of the system.</p>
  </section>
</template>

<script lang="ts">
import Button from '@/components/Button.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Button,
  },
})
export default class Mesh extends Vue {}
</script>

<style lang="scss" src="@/styles/projects.scss" />
