import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView/HomeView.vue";
import AlbumsView from "./views/AlbumsView/AlbumsView.vue";
import CommentsView from "./views/CommentsView/CommentsView.vue";
import PhotosView from "./views/PhotosView/PhotosView.vue";
import PostsView from "./views/PostsView/PostsView.vue";
import TodosView from "./views/TodosView/TodosView.vue";
import UsersView from "./views/UsersView/UsersView.vue";
import UserItem from "./views/UsersView/UserItem/UserItem.vue";
import PhotoItem from "./views/PhotosView/PhotoItem/PhotoItem.vue";
import AlbumItem from "./views/AlbumsView/AlbumItem/AlbumItem.vue";
import PostItem from "./views/PostsView/PostItem/PostItem.vue";
import CommentItem from "./views/CommentsView/CommentItem/CommentItem.vue";
import TodoItem from "./views/TodosView/TodoItem/TodoItem.vue";
import AbumsSecondaryHeader from "./components/secondary-headers/AbumsSecondaryHeader.vue";
import CommentsSecondaryHeader from "./components/secondary-headers/CommentsSecondaryHeader.vue";
import PhotosSecondaryHeader from "./components/secondary-headers/PhotosSecondaryHeader.vue";
import PostsSecondaryHeader from "./components/secondary-headers/PostsSecondaryHeader.vue";
import TodosSecondaryHeader from "./components/secondary-headers/TodosSecondaryHeader.vue";
import UsersSecondaryHeader from "./components/secondary-headers/UsersSecondaryHeader.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      meta: { title: "Home page" },
      name: "home",
      path: "/",
      component: HomeView,
    },
    {
      meta: { title: "Albums" },
      name: "albums",
      path: "/albums",
      components: {
        default: AlbumsView,
        secondaryHeader: AbumsSecondaryHeader,
      },
      children: [
        {
          meta: { title: "Album details" },
          name: "album-detail",
          path: ":albumId",
          component: AlbumItem,
        },
      ],
    },
    {
      meta: { title: "Comments" },
      name: "comments",
      path: "/comments",
      components: {
        default: CommentsView,
        secondaryHeader: CommentsSecondaryHeader,
      },

      children: [
        {
          meta: { title: "Comment details" },
          name: "comment-details",
          path: "/comments/:commentId",
          component: CommentItem,
        },
      ],
    },
    {
      meta: { title: "Photos" },
      name: "photos",
      path: "/photos",
      components: {
        default: PhotosView,
        secondaryHeader: PhotosSecondaryHeader,
      },
      children: [
        {
          meta: { title: "Photos" },
          name: "photo-details",
          path: ":photoId",
          component: PhotoItem,
        },
      ],
    },
    {
      meta: { title: "Posts" },
      name: "posts",
      path: "/posts",
      components: { default: PostsView, secondaryHeader: PostsSecondaryHeader },
      children: [
        {
          path: ":postId",
          component: PostItem,
        },
      ],
    },
    {
      meta: { title: "Todos" },
      name: "todos",
      path: "/todos",
      components: { default: TodosView, secondaryHeader: TodosSecondaryHeader },
      children: [
        {
          meta: { title: "Todo details" },
          name: "todo-details",
          path: ":todoId",
          component: TodoItem,
        },
      ],
    },
    {
      meta: { title: "Users" },
      name: "users",
      path: "/users",
      components: { default: UsersView, secondaryHeader: UsersSecondaryHeader },
      children: [
        {
          meta: { title: "User details" },
          name: "user-details",
          path: ":userId",
          component: UserItem,
        },
      ],
    },
    {
      path: "/:notFound(.*)",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  console.log("before router:", { to, from });
  next();
});

router.afterEach((to, from, next) => {
  console.log("after router:", { to, from });
  next();
});

export default router;

/* 
  beforeEach(to:Route, from:Route, next:function(v:boolean)=>void): check with each time to enter route
  afterEach: check with each time to leave route
  beforeEnter: check before enter route(single check)

  meta: using when component need to authen(example)
*/
