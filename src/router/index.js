import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue'),
			meta: { guest: true },
		},
		{
			path: '/detail/:id',
			component: () => import('../views/Detail.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/contact/',
			component: () => import('../views/Contact.vue'),
			meta: { guest: true },
		},
		{
			path: '/login/',
			component: () => import('../views/Login.vue'),
			meta: { guest: true },
		},
		{
			path: '/register/',
			component: () => import('../views/Register.vue'),
			meta: { guest: true },
		},
		{
			path: '/movies/',
			component: () => import('../views/Movies.vue'),
			meta: { guest: true },
		}
	],
});

/*
router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.isAuthenticated) {
			next();
			return;
		}
	next("/login");
	} else {
	next();
	}
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.guest)) {
		if (store.getters.isAuthenticated) {
			next("/posts");
			return;
		}
	next();
	} else {
		next();
	}
});
*/

export default router