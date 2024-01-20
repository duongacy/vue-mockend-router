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
      path: "/",
      component: HomeView,
    },
    {
      name: "albums",
      path: "/albums",
      components: {
        default: AlbumsView,
        secondaryHeader: AbumsSecondaryHeader,
      },
      children: [
        {
          name: "album-detail",
          path: ":albumId",
          component: AlbumItem,
        },
      ],
    },
    {
      path: "/comments",
      components: {
        default: CommentsView,
        secondaryHeader: CommentsSecondaryHeader,
      },

      children: [
        {
          path: "/comments/:commentId",
          component: CommentItem,
        },
      ],
    },
    {
      path: "/photos",
      components: {
        default: PhotosView,
        secondaryHeader: PhotosSecondaryHeader,
      },
      children: [
        {
          path: ":photoId",
          component: PhotoItem,
        },
      ],
    },
    {
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
      path: "/todos",
      components: { default: TodosView, secondaryHeader: TodosSecondaryHeader },
      children: [
        {
          path: ":todoId",
          component: TodoItem,
        },
      ],
    },
    {
      path: "/users",
      components: { default: UsersView, secondaryHeader: UsersSecondaryHeader },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return {
      left: 0,
      top: 0,
    };
  },
});

const app = createApp(App);

app.use(router);

app.mount("#app");
