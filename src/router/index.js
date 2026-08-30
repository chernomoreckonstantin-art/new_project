import { createRouter, createWebHistory } from "vue-router";
import ExcursionsView from "../views/ExcursionsView.vue";
import ExcursionDetailView from "../views/ExcursionDetailView.vue";

const routes = [
    {
        path: '/',
        component : ExcursionsView
    },
    {
        path: '/tours/:id',
        component : ExcursionDetailView
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router