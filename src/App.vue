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
@import "./assets/variables";

/* Global styles */

:root {
  font-size: 16px;
  color: $clr-flt;
  font-family: "Roboto", sans-serif;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

*:focus {
  outline: 0px;
}

html,
body {
  min-height: 100vh;
}

body {
  background: $clr-pri url("./assets/sai-kiran-anagani-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow-y: scroll;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

.wrapper {
  padding-top: 4rem;
}

.content {
  width: 80%;
}

.btn-link {
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  background: transparent;
  font-weight: bold;
  transition: background 0.15s ease-in-out, color 0.15s ease-in-out, transition 0.15s ease-in-out;
  border-width: 3px;
  border-style: solid;

  &:hover, &:focus {
    transform: scale(1.05);
  }
}

.shadow {
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
}

/* Local styles */

.nav {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  z-index: 1;

  img {
    display: block;
    float: left;
    height: 4rem;
    padding: 0.8rem;
    width: auto;
    transition: background 0.15s ease-in-out;

    &:hover, &:active {
      background: rgba(255,255,255,0.05);
    }
  }

  .links {
    float: right;

    a {
      text-decoration: none;
      color: rgba($clr-flt, 0.2);
      display: inline-block;
      padding: 0rem 1.5rem;
      font-size: 0.75rem;
      transition: background 0.15s ease-in-out;

      &.router-link-active {
        color: $clr-flt;
      }

      &:hover, &:active {
        background: rgba(255,255,255,0.05);
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
