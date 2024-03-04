import { createApp } from 'vue';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
import clientAuth from './client-auth.vue';
import clientCreate from './client-create.vue';
import messenger from './messenger/messenger.vue';
import Vue3TouchEvents from 'vue3-touch-events';
import App from './App.vue';
import { VueHammer } from '../lib/vue3-hammer';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFile } from '@fortawesome/free-solid-svg-icons';

library.add(faFile);

const app = createApp(App);

app.use(VueHammer, {
  threshold: 25,
  direction: 'right'
});

app.use(Vue3TouchEvents);

// app.component('icon', Icon);
app.component('app', App);
app.component('scale-loader', ScaleLoader);
app.component('client-auth', clientAuth);
app.component('client-create', clientCreate);
app.component('messenger', messenger);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
