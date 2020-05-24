import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import UserInformation from '../components/UserInformation';
import NotFound from '../components/NotFound';

Vue.use(Router);

const routes = [
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		name: 'user-information',
		path: '/user-information/:username/:email/:location',
		component: UserInformation
	},
	{
		name: 'not-found',
		path: '*',
		component: NotFound
	}
];

const router = new Router({
	routes
});

export default router;