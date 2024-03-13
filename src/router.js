import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage/HomePage.vue';
import Login from './components/login/LoginPage.vue';
import View from './components/viewPage/ViewPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
     
      {
        path: '/home',
        component: Home // Use imported LoginForm component
      },
      {
        path: '/',
        component: Login // Use imported LoginForm component
      },
      {
        path: '/anime/:id',
        component: View // Use imported LoginForm component
      },
      
    ]
  });
  
  // Export the router instance to be used in the main Vue application
  export default router;