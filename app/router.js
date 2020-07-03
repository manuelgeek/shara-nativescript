import Home from '~/components/Pages/Home';
import Login from '~/components/Pages/Auth/Login';
import Register from '~/components/Pages/Auth/Register';
import CreateOrder from "./components/Orders/CreateOrder";

export const routes = {
    '/home': {
        component: Home,
        meta: { needsAuth: true }
    },
    '/order': {
        component: CreateOrder,
        meta: { needsAuth: true }
    },
    '/register': {
        component: Register,
        meta: { needsAuth: false }
    },
    '/login': {
        component: Login,
        meta: { needsAuth: false }
    },
};
