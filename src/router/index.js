import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import StudentEdit from "../views/StudentEdit.vue";
import StudentShow from "../views/StudentShow.vue";
import ExperienceEdit from "../views/ExperienceEdit.vue";
import EducationEdit from "../views/EducationEdit.vue";
import SkillsEdit from "../views/SkillsEdit.vue";
import CapstoneEdit from "../views/CapstoneEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: "/student/:id/edit",
    name: "student_edit",
    component: StudentEdit
  },
  {
    path: "/student/:id",
    name: "student_show",
    component: StudentShow
  },
  {
    path: "/experience/:id/edit",
    name: "experience_edit",
    component: ExperienceEdit
  }, 
  {
    path: "/education/:id/edit",
    name: "education_edit",
    component: EducationEdit
  },
  {
    path: "/skills/:id/edit",
    name: "skills_edit",
    component: SkillsEdit
  }, 
  {
    path: "/capstone/:id/edit",
    name: "capstone_edit",
    component: CapstoneEdit
  },  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
