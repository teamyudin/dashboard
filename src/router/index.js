import Vue from 'vue';
import Router from 'vue-router';
import dashboard from '@/components/dashboard';
import dashboardGlance from '@/components/dashboard2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/glance',
      name: 'Dashboard (Glance)',
      component: dashboardGlance
    }
  ]
});
