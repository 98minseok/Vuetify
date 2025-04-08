import DashBoard from "@/views/DashBoard.vue";
import GridSystem from "@/views/GridSystem.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes =[
    {
        path:'/',
        name : 'DashBoard',
        component : DashBoard
    },
    {
        path:'/grid-system',
        name : 'GridSystem',
        component : GridSystem
    }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })