import Home from '~/components/Pages/Home';
import Login from '~/components/Pages/Login';
import CreateOrder from "./components/Orders/CreateOrder";

export const routes = {
    '/home': {
        component: Home,
        meta: { needsAuth: true }
    },
    '/login': {
        component: Login,
        meta: { needsAuth: false }
    },
    '/order': {
        component: CreateOrder,
        meta: { needsAuth: true }
    },
};
