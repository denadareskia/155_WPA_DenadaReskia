import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../components/ServicesComponent.vue")
  },
  {
    path: "/promo",
    name: "promo",
    component: () => import("../components/ExploreComponent.vue")
  },
  {
    path: "/partners",
    name: "partners",
    component: () => import("../components/BrandComponent.vue")
  },
  {
    path: "/testimony",
    name: "review",
    component: () => import("../components/TestimonialComponent.vue")
  },
  {
    path: "/notfound",
    name: "not found",
    component: () => import("../components/NotFoundComponent.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
