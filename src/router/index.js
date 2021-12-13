import { createRouter, createWebHistory } from 'vue-router'
import TheNav from '../components/UI/TheNav.vue'
import LandingComponent from "../components/UI/LandingComponent.vue"
import WelcomeComponent from "../components/UI/WelcomeComponent.vue"
import MeaningComponent from "../components/UI/MeaningComponent.vue"
import MenuComponent from "../components/UI/MenuComponent.vue"
import AboutComponent from "../components/UI/AboutComponent.vue"
import FaqComponent from "../components/UI/FaqComponent.vue"
import GalleryComponent from "../components/UI/GalleryComponent.vue"
import ContactComponent from "../components/UI/ContactComponent.vue"
import NotFound from "../components/UI/NotFound.vue"
import TheFooter from '../components/UI/TheFooter.vue'


const routes = [{
        path: '/',
        name: 'Home',
        components: {
            navbar: TheNav,
            landing: LandingComponent,
            welcome: WelcomeComponent,
            meaning: MeaningComponent,
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
        components: {
            navbar: TheNav,
            about: AboutComponent,
            footer: TheFooter
        }
    },
    {
        path: '/faq',
        name: 'Faq',
        components: {
            navbar: TheNav,
            about: FaqComponent,
            footer: TheFooter
        }
    },
    {
        path: '/gallery',
        name: 'Gallery',
        components: {
            navbar: TheNav,
            about: GalleryComponent,
            footer: TheFooter
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        components: {
            navbar: TheNav,
            about: ContactComponent,
            footer: TheFooter
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        components: {
            navbar: TheNav,
            about: NotFound,
            footer: TheFooter
        }
    }
]

const router = createRouter({
    mode: 'hash',
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router