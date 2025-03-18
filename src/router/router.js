// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Layout from '../components/Layout.vue';
import Page3 from '../views/Page3.vue';
import Page4 from '../views/Page4.vue';
import Page5 from '../views/Page5.vue';
import Page6 from '../views/Page6.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Layout,
    meta: { requiresAuth: true }, // 表示该路由需要登录才能访问
    children: [
      {
        path: 'page1',
        name: 'Page1',
        component: Page1
      },
      {
        path: 'page2',
        name: 'Page2',
        component: Page2
      },
      {
        path: 'page3',
        name: 'Page3',
        component: Page3
      },
      {
        path: 'page4',
        name: 'Page4',
        component: Page4
      },
      {
        path: 'page5',
        name: 'Page5',
        component: Page5
      },
      {
        path: 'page6',
        name: 'Page6',
        component: Page6
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由守卫，确保只有登录用户才能访问需要登录的页面
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;