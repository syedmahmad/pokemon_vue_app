import { createRouter, createWebHistory } from "vue-router";
import Pokemon from "../views/pokemon.vue";
import Pokemon2 from "../views/pokemon2.vue"
import Pokemon3 from "../views/pokemon3.vue"
import Pokemon4 from "../views/pokemon4.vue"
import Pokemon5 from "../views/pokemon5.vue"

const routes = [
  {
    path: "/",
    name: "Pokemon",
    component: Pokemon,
  },
  {
    path: "/generation2",
    name: "Pokemon2",
    component: Pokemon2,
  },
  {
    path: '/generation3',
    name: 'Pokemon3',
    component: Pokemon3,
  },
  {
    path: '/generation4',
    name: 'Pokemon4',
    component: Pokemon4,
  },
  {
    path: '/generation5',
    name: 'Pokemon5',
    component: Pokemon5,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
