<template>
  <div class="content">
    <h1>{{ $t("pageTitles.about") }}</h1>
    <div class="about-wrapper">
      <div class="row info">
        <p>
          {{ $t("about.p1") }}
        </p>
        <p>
          {{ $t("about.p2") }}
        </p>
      </div>
      <div class="row links">
        <router-link :to="projectUrl" class="btn-link">{{ $t("pageTitles.projects") }}</router-link>
        <a href="https://github.com/jlaurikainen" target="_blank" class="btn-link">Github</a>
        <!--a href="#" target="_blank" class="btn-link">CV</a-->
      </div>
      <div class="row skills">
        <div class="col">
          <h2>{{ $t("strings.visu") }}</h2>
          <div class="text">
            <ul>
              <li>{{ $t("strings.adobe") }}</li>
              <li>GIMP</li>
              <li>InkScape</li>
              <li>{{ $t("strings.proto") }}</li>
            </ul>
            <ul>
              <li>Blender</li>
              <li>3DS Max</li>
              <li>Cinema 4D</li>
            </ul>
            <ul>
              <li>Unity 3D</li>
              <li>Substance Painter</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <h2>{{ $t("strings.tech") }}</h2>
          <div class="text">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
            </ul>
            <ul>
              <li>jQuery</li>
              <li>Node.js</li>
              <li>Three.js</li>
              <li>Vue.js</li>
            </ul>
            <ul>
              <li>PHP</li>
              <li>MySQL</li>
              <li>WordPress</li>
              <li>Laravel</li>
            </ul>
            <ul>
              <li>Visual Studio Code</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "../i18n";

export default {
  computed: {
    projectUrl() {
      return "/" + i18n.locale + "/projects";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/variables";

.content {
  margin: 0px auto;
}

h1 {
  margin: 1.5rem 0rem;
}

.about-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  h2 {
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.5;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    max-width: 55ch;

    &:last-child {
      margin-right: 0rem;
    }
  }

  &:last-child {
    padding-bottom: 0rem;
  }

  &.links {
    padding: 1.5rem 0rem 3rem 0rem;
    justify-content: center;
  }

  &.skills {
    display: flex;
    justify-content: space-between;

    .col {
      padding-right: 1.5rem;
      width: 50%;

      &:last-child {
        padding-right: 0rem;
      }
      
      .text {
        padding-left: 1rem;
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;

        ul {
          list-style-type: none;
          margin-right: 3rem;
          margin-bottom: 2rem;

          &:last-child {
            margin-right: 0rem;
          }

          li {
            display: flex;
            align-items: center;
            line-height: 1.75;
          }

          li::before {
            content: '';
            display: inline-block;
            height: 0.3rem;
            width: 0.3rem;
            margin-right: 0.5rem;
            border: 2px solid $clr-emp2;
            border-radius: 50%;
            background: transparent;
          }
        }
      }
    }
  }
}

.btn-link {
  padding: 1rem 1.5rem;
  margin-bottom: 0.5rem;
  border-color: $clr-emp2;
  color: $clr-flt;

  &:hover, &:focus {
    background: $clr-emp2;
  }
}

@media (max-width: 640px) {
  .row p {
    margin-right: 0rem;
  }

  .row.skills {
    flex-direction: column;

    .col {
      width: 100%;
    }
  }
}
</style>