import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	// 웹 주소 안에 #을 없애줌!
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});
