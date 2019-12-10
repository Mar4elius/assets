// That is were we import Vue to our app
import Vue from 'Vue';
import VueRouter from 'vue-router'

import routes from './routes';

// add it as a plugin
Vue.use(VueRouter);

// Components, Plugin Setups, Etc
import './bootstrap';

// Main top level Vue instance
new Vue({
    el: '#app',

    // Intintiate new instance of the router and pass available routes to it
    router: new VueRouter(routes)

});