<template>
  <div class="backdrop">
    <div class="content">
      <div class="modal-title">
        <h2>{{ project.type }}</h2>
        <button @click="closeModal"><i class="material-icons">close</i></button>
      </div>
      <div class="modal-body">
        <div class="modal-img">
          <carousel
            class="shadow"
            v-if="project.slides"
            :perPage="1"
            :navigationEnabled="true"
            :paginationEnabled="false"
            :navigationClickTargetSize="24"
          >
            <slide v-for="slide in project.slides" :key="slide">
              <a :href="slide" target="_blank"><img :src="slide"/></a>
            </slide>
          </carousel>
          <a v-else :href="project.src" target="_blank"
            ><img class="shadow" :src="project.src"
          /></a>
        </div>
        <div class="modal-text">
          <h2>{{ project.recipient }}</h2>
          <p v-for="text in project.description" :key="text">{{ text }}</p>
          <a
            class="btn-link"
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            >Demo</a
          >
          <a
            class="btn-link"
            v-if="project.code"
            :href="project.code"
            target="_blank"
            >Github</a
          >
          <a
            class="btn-link"
            v-if="project.url"
            :href="project.url"
            target="_blank"
            >{{ $t("strings.ladec-article") }}</a
          >
          <h4>
            {{ $t("strings.tools") }}: <span>{{ project.tools }}</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  props: ["project"],
  methods: {
    closeModal(event) {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.backdrop {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.content {
  width: 90vw;
  max-height: 80vh;
  margin-top: 10vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.modal-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  background: $clr-pri;
  z-index: 3;

  h2 {
    padding: 1rem;
  }

  button {
    display: block;
    background: transparent;
    border: 0;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    color: $clr-flt;

    i {
      transition: all 0.3s cubic-bezier(0.5,-0.5, 0.5, 1.5);
    }

    &:hover, &:focus {
      background: rgba(0, 0, 0, 0.25);

      i {
        transform: rotate(90deg);
      }
    }
  }
}

img {
  display: block;
  width: 100%;
}

.modal-body {
  background: $clr-bck;
  display: flex;
  overflow-y: auto;

  .modal-img {
    width: 65%;
    padding: 1rem;
  }

  .modal-text {
    line-height: 1.5;
    width: 50%;
    padding: 1rem;
    color: $clr-pri;

    h2 {
      margin-bottom: 1.5rem;
    }

    h4 {
      margin-top: 2rem;

      span {
        font-weight: normal;
      }
    }

    p {
      margin-bottom: 1rem;
    }

    .btn-link {
      border-color: $clr-emp2;
      color: $clr-pri;

      &:hover, &:focus {
        background: $clr-emp2;
        color: $clr-flt;
      }
    }
  }
}

@media (max-width: 639px) {
  .modal-body {
    flex-direction: column;

    .modal-img,
    .modal-text {
      width: 100%;
    }
  }
}
</style>
