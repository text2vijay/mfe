import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
//Mount function to start up the app
const mount = (e1) => {
  const app = createApp(Dashboard);
  app.mount(e1);
};

//if we are in dev mode and in isolation
//call mount immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// we are running though to contaner
//and we should export the mount function
export { mount };
