import {createRouter,createWebHistory} from "vue-router";
// import HelloWorld from "../components/HelloWorld.vue";
// import Test from "../view/test"
const routes = [
    {
        path:"/",
        name:"index",
        component:()=>import("../components/HelloWorld.vue")
    },
    {
        path:"/test",
        name:"Test",
        component:()=>import("../view/test.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
	routes
});

export default router
