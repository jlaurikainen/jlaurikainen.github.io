<template>
  <div class="content">
    <h1>{{ $t("pageTitles.projects") }}</h1>
    <div class="project-wrapper">
      <div
        class="project"
        v-for="project in projects"
        :key="project.id"
        :style="{
          backgroundColor: '#3c3c50',
          backgroundImage: `url(${project.src})`
        }"
        stagger="100"
        @click="toggleModal(project)"
      ></div>
    </div>
    <transition name="fade" mode="out-in">
      <ModalComponent
        v-bind:project="clickedProject"
        v-if="modalOpen"
        @clicked="toggleModal({})"
      />
    </transition>
  </div>
</template>

<script>
import i18n from "../i18n";
import ModalComponent from "../components/ModalComponent";

export default {
  components: {
    ModalComponent
  },
  computed: {
    projects() {
      return i18n.messages[i18n.locale].projects;
    }
  },
  data() {
    return {
      modalOpen: false,
      clickedProject: {}
    };
  },
  methods: {
    toggleModal(p) {
      this.clickedProject = p;
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/color";

.content {
  margin: 0px auto;
}

h1 {
  font-size: 3rem;
  margin: 1.5rem 0rem;
}

.project-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.project {
  position: relative;
  width: calc(100% / 3 - 0.5rem);
  margin-bottom: 0.75rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  /* 16:9 aspect ratio, based on parent width */
  padding-bottom: 18.75%;
  cursor: pointer;
}

@media (max-width: 640px) {
  .project {
    width: calc(100% / 2 - 0.5rem);
    /* Double the padding, for double width */
    padding-bottom: 28.125%;
  }
}

@media (max-width: 399px) {
  .project {
    width: 100%;
    /* Double again the padding, for double width */
    padding-bottom: 56.25%;
  }
}

/* Vue transitions */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
  transition-timing-function: ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
