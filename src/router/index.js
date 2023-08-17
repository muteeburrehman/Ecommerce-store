import Vue from 'vue';
import VueRouter from 'vue-router';
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';
import LoginComp from '@/views/LoginComp.vue'; // Import the LoginComp component
import SignupComp from "@/views/SignupComp.vue"; // Import the RegisterComp component

Vue.use(VueRouter);

const routes = [
    {
        path: '/products',
        name: 'Products',
        component: ProductsPage,
    },
    {
        path: '/products/:id',
        name: 'ProductDetail',
        component: ProductDetailPage,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartPage,
    },
    {
        path: '/login', // Define the route for the Login page
        name: 'Login',
        component: LoginComp,
    },
    {
        path: '/register', // Define the route for the Register page
        name: 'Register',
        component: SignupComp,
    },
    {
        path: '/',
        redirect: '/products',
    },
    {
        path: '*',
        component: NotFoundPage,
    },
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
