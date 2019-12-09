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
      <router-link :to="projectUrl" tag="button" class="cta-btn">{{
        $t("pageTitles.projects")
      }}</router-link>
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
      return i18n.locale + "/projects";
    },
    interests() {
      return i18n.messages[i18n.locale].aboutInterests;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/color";

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
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  font-family: "Titillium Web", sans-serif;
  color: $clr-demp;
}

h2:nth-child(3) {
  margin-bottom: 3rem;
}

.cta-btn {
  display: block;
  margin: 0px auto;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: $clr-fnt;
  border: 3px solid $clr-fnt;
  background: transparent;
  cursor: pointer;
  transition: background 0.05s ease-in-out, color 0.05s ease-in-out, transition 0.05s ease-in-out;

  &:hover, &:focus {
    transform: scale(1.025);
    background: $clr-fnt;
    color: $clr-pri;
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
</style>
