import { createRouter, createWebHistory } from "vue-router";
import Home from "@renderer/views/Home.vue";
import MotorConfig from "@renderer/views/MotorConfig.vue";
import DatasetConfig from "@renderer/views/DatasetConfig.vue";
import GraphConfig from "@renderer/views/GraphConfig.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,

    },
    {
      path: "/motorconfig",
      name: "MotorConfig",
      component: MotorConfig,
    },
    {
      path: "/datasetconfig",
      name: "DatasetConfig",
      component: DatasetConfig,
    },
    {
      path: "/graphconfig",
      name: "GraphConfig",
      component: GraphConfig,
    }
  ],
});

export default router;