import Vue from 'vue';
import Router from 'vue-router';
import AddContact from './views/add-contact.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: AddContact,
        },
        {
            path: '/:id',
            name: 'edit-contact',
            component: () => import(/* webpackChunkName: "edit" */ './views/edit-contact.vue'),
        },
    ],
});
