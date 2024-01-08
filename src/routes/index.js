import Vue from "vue";
import Router from "vue-router";
import Login from "../views/Login.vue";
import Posts from "../post/AllPost.vue";
import CreatePost from "../post/CreatePost.vue";
import PostDetails from "../post/PostDetail.vue";
import Axios from "axios";
import NotFound from "../components/NotFound.vue"
import Nav from "../components/Nav.vue"
import Home from "../views/Home.vue";
Vue.use(Router);

const routes = [

  {
    name:'home',
    path: '/',
    components: {
      default: Home,
      navigation:Nav
    },
    
  },
  {
    name:'login',
    path: '/login',
    component:Login
  },
  {
    name:'AllPosts',
    path: '/posts',
    components: {
      default: Posts,
      navigation:Nav
    },
    children: [
      {
        name:'postDetails',
        path: ':id',
        component:PostDetails
      }
    ]
  },
  {
    name:'createPost',
    path: '/create-post',
    components: {
      default: CreatePost,
      navigation:Nav
    },
  }, {
    path:'/:NotFound(.*)*',component:NotFound
  }
]

const router = new Router({
  base: '/',
  mode: 'history',
  routes
})

router.beforeEach((to,from) => {
  console.log("to",to)
  console.log("from",from)
})

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export default router;