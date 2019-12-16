import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About";
import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/projects",
    redirect: `/${i18n.locale}/projects`
  },
  {
    path: "/about",
    redirect: `/${i18n.locale}/about`
  },
  {
    path: "/:lang",
    component: {
      render: c => c("router-view")
    },
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "projects",
        name: "projects",
        component: Projects
      },
      {
        path: "about",
        name: "about",
        component: About
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
