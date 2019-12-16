<template>
  <div class="content">
    <div class="col">
      <h1>Juha Laurikainen</h1>
      <h2>{{ $t("aboutHeading") }}</h2>
      <transition name="slide-fade" mode="out-in">
        <h2 :key="interests[idx]">{{ interests[idx] }}</h2>
      </transition>
    </div>
    <div class="col">
      <router-link :to="projectUrl" class="btn-link emp">
        {{ $t("pageTitles.projects") }}</router-link>
      <router-link :to="aboutUrl" class="btn-link emp">
        {{ $t("pageTitles.aboutShort") }}
      </router-link>
    </div>
  </div>
</template>

<script>
import i18n from "../i18n";

export default {
  mounted() {
    setInterval(() => {
      if (this.idx < this.interests.length - 1) {
        this.idx++;
      } else {
        this.idx = 0;
      }
    }, 3000);
  },
  data() {
    return {
      idx: 0
    };
  },
  computed: {
    projectUrl() {
      return "/" + i18n.locale + "/projects";
    },
    aboutUrl() {
      return "/" + i18n.locale + "/about";
    },
    interests() {
      return i18n.messages[i18n.locale].aboutInterests;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  line-height: 1;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
}

h2 {
  color: $clr-fde;
}

h2:nth-child(3) {
  margin-bottom: 3rem;
}

.btn-link {
  border-color: $clr-emp2;
  color: $clr-flt;

  &.emp {
    padding: 1rem 1.5rem;
  }

  &:hover, &:focus {
    background: $clr-emp2;
  }
}

/* Vue transitions */

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-fade-enter {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

@media all and (max-height: 420px) {
  .content {
    display: block;
    margin: auto;
    position: relative;
    top: 0px;
    left: 0px;
    transform: translate(0%, 0%);
    width: 80%;
    margin-top: 1.5rem;

    .col:last-child {
      text-align: center;
    }
  }
}
</style>
