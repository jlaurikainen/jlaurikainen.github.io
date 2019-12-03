<template>
  <div class="wrapper">
    <transition appear name="down" mode="out-in">
      <div class="nav">
        <router-link :to="'/' + currentLocale"
          ><img
            class="logo"
            src="../public/emblem.svg"
            alt="Juha Laurikainen Emblem"
        /></router-link>
        <div class="links">
          <router-link :to="'/fi' + currentRoute">FI</router-link>
          <router-link :to="'/en' + currentRoute">EN</router-link>
        </div>
      </div>
    </transition>
    <transition appear name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import i18n from "./i18n";

export default {
  computed: {
    currentRoute() {
      if (this.$route.name == null || this.$route.name == "home") {
        return "";
      } else {
        return "/" + this.$route.name;
      }
    },
    currentLocale() {
      return i18n.locale;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/color";

/* Root and reset */

:root {
  font-size: 16px;
  color: $clr-fnt;
  font-family: "Titillium Web", sans-serif;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

html,
body {
  min-height: 100vh;
}

body {
  background: url("./assets/sai-kiran-anagani-unsplash.jpg"), $clr-pri;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow-y: scroll;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Dosis", sans-serif;
  color: $clr-emp;
}

/* Global and local styles */

.wrapper {
  padding-top: 4rem;
}

.content {
  width: 80%;
}

.de-emp {
  color: $clr-demp;
}

.emp {
  color: $clr-emp;
}

/* Local start */

.nav {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  background: rgba(0,0,0,0.25);
  backdrop-filter: blur(5px);
  z-index: 1;

  img {
    display: block;
    float: left;
    height: 4rem;
    padding: 0.8rem;
    width: auto;
  }

  .links {
    float: right;

    a {
      text-decoration: none;
      font-size: 0.75rem;
      color: rgba($clr-fnt, 0.2);
      display: inline-block;
      padding: 0rem 1.5rem;

      &.router-link-active {
        color: $clr-fnt;
      }
    }
  }
}

/* Vue transitions */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-timing-function: cubic-bezier(0.95, 0.05, 1, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.down-enter-active {
  transition: opacity 0.5s 0.5s, transform 0.5s 0.5s;
  transition-timing-function: ease-in-out;
}

.down-enter {
  opacity: 0;
  transform: translateY(-10px);
}

.up-enter-active {
  transition: opacity 0.5s 0.5s, transform 0.5s 0.5s;
  transition-timing-function: ease-in-out;
}

.up-enter {
  opacity: 0;
  transform: translateY(10px);
}
</style>
