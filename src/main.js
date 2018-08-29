import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faUser,
    faPhone,
    faAt,
    faTimes,
    faTimesCircle,
    faPlusCircle,
    faArrowLeft,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import router from './router';
import store from './store';

library.add(faUser, faPhone, faAt, faTimes, faTimesCircle, faPlusCircle, faArrowLeft, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
