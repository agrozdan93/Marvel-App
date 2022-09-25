import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ComicDetails from "../components/Comics/ComicDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home page",
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About app",
    },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/comic/:id",
    name: "Comic",
    component: ComicDetails,
    meta: {
      title: "Comic details",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
