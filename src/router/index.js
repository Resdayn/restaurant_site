import { createRouter, createWebHistory } from 'vue-router'
import TheNav from '../components/UI/TheNav.vue'
import LandingComponent from "../components/UI/LandingComponent.vue"
import WelcomeComponent from "../components/UI/WelcomeComponent.vue"
import MeaningComponent from "../components/UI/MeaningComponent.vue"
import MenuComponent from "../components/UI/MenuComponent.vue"
import TheFooter from '../components/UI/TheFooter.vue'


const routes = [{
        path: '/',
        name: 'Home',
        components: {
            navbar: TheNav,
            landing: LandingComponent,
            welcome: WelcomeComponent,
            meaning: MeaningComponent,
            menu: MenuComponent,
            footer: TheFooter
        }
    },
    {
        path: '/menu',
        name: 'Menu',
        components: {
            navbar: TheNav,
            menu: MenuComponent,
            footer: TheFooter
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router