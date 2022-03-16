import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Gallery from './components/pages/Gallery.vue';
import Events from './components/pages/Events.vue';
import Contactus from './components/pages/Contactus.vue';
import Login from './components/pages/Login.vue';
import Registration from './components/pages/Registration.vue';
import Membership from './components/pages/Membership.vue';

import PaymentMethod from './components/pages/PaymentMethod.vue';
import Profile from './components/pages/Profile.vue';

const routes = [
    { path: '/', component:Home },
    { path: '/about', component: About},
    { path: '/gallery', component: Gallery},
    { path: '/events', component: Events},
    { path: '/contactus', component: Contactus},
    { path: '/membership', component: Membership},
    { path: '/login', component: Login},
    { path: '/registration', component: Registration},
    { path: '/pamentm', component: PaymentMethod },
    { path:'/profile', component: Profile },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;