import Home from '~/components/Pages/Home';
import Login from '~/components/Pages/Login';

export const routes = {
    '/home': {
        component: Home,
        meta: { needsAuth: true }
    },
    '/login': {
        component: Login,
        meta: { needsAuth: false }
    },
};
