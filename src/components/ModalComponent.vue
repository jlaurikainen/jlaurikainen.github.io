<template>
  <div class="backdrop">
    <div class="content">
      <div class="modal-title">
        <h2>{{ project.type }}</h2>
        <button @click="closeModal">X</button>
      </div>
      <div class="modal-body">
        <div class="modal-img">
          <carousel
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
            ><img :src="project.src"
          /></a>
        </div>
        <div class="modal-text">
          <h3>{{ project.recipient }}</h3>
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
@import "../assets/color";

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
  align-items: center;
}

.content {
  width: 90vw;
  max-height: 80vh;
  background: $clr-pri;
  border-radius: 3px;
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
  background: $clr-pri;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
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
    color: $clr-fnt;

    &:hover {
      background: rgba(0, 0, 0, 0.25);
    }
  }
}

img {
  display: block;
  width: 100%;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
}

.modal-body {
  background: #f8f8f8;
  display: flex;
  overflow-y: auto;

  .modal-img {
    width: 65%;
    padding: 1rem;
  }

  .modal-text {
    color: #000;
    width: 50%;
    padding: 1rem;

    h3 {
      color: #333;
      margin-bottom: 1.5rem;
    }

    h4 {
      margin-top: 2rem;
      color: #000;

      span {
        font-weight: normal;
      }
    }

    p {
      margin-bottom: 1rem;
    }

    .btn-link {
      display: inline-block;
      text-decoration: none;
      padding: 0.5rem 1rem;
      margin-right: 0.5rem;
      color: $clr-pri;
      border: 3px solid $clr-pri;
      font-weight: bold;
    }
  }
}

button.VueCarousel-navigation-button.VueCarousel-navigation-next {
  background: red;
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
