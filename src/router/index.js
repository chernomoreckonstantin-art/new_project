import { createRouter, createWebHistory } from "vue-router";
import ExcursionsView from "../views/ExcursionsView.vue";

const routes = [
    {
        path: '/',
        component : ExcursionsView
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router