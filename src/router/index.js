import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadcrumb: [{ name: "Home" }]
    }
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "/" }, { name: "Detail" }]
    }
  },
  {
    path: "/error",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/Error.vue"),
    meta: {
      breadcrumb: [{ name: "Home", link: "/" }]
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
