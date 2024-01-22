import "./assets/css/global.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
router.isReady().then((_) => {
  app.mount("#app");
});
