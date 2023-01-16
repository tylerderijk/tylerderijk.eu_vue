import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import OpeningComp from '@/components/OpeningComp';
import ContactMe from '@/components/ContactMe';
import CurrentSkills from '@/components/CurrentSkills';
import HomeComp from "@/components/HomeComp";
import PreviousProjects from '@/components/PreviousProjects';
import WhoIsThisGuy from '@/components/WhoIsThisGuy';
import WorkExperience from '@/components/WorkExperience';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomeComp,
            children: [
                { path: '', component: OpeningComp },
                { path: 'about', component: WhoIsThisGuy },
                { path: 'contact', component: ContactMe },
                { path: 'skills', component: CurrentSkills },
                { path: 'projects', component: PreviousProjects },
                { path: 'experience', component: WorkExperience },
            ]
        },
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition;
    //     }
    //     return { left: 0, top: 0 };
    // }
})

createApp(App).use(router).mount('#app')
