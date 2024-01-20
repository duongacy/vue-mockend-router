import "./assets/css/global.css";
import { createApp } from "vue";
import App from "./App.vue";
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

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/albums",
      component: AlbumsView,
      children: [
        {
          path: ":albumId",
          component: AlbumItem,
        },
      ],
    },
    {
      path: "/comments",
      component: CommentsView,
      children: [
        {
          path: "/comments/:commentId",
          component: CommentItem,
        },
      ],
    },
    {
      path: "/photos",
      component: PhotosView,
      children: [
        {
          path: ":photoId",
          component: PhotoItem,
        },
      ],
    },
    {
      path: "/posts",
      component: PostsView,
      children: [
        {
          path: ":postId",
          component: PostItem,
        },
      ],
    },
    {
      path: "/todos",
      component: TodosView,
      children: [
        {
          path: ":todoId",
          component: TodoItem,
        },
      ],
    },
    {
      path: "/users",
      component: UsersView,
      children: [
        {
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
});

const app = createApp(App);

app.use(router);

app.mount("#app");
