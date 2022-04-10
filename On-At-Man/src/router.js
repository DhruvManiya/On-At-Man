import { createRouter,createWebHistory} from 'vue-router';

import Attendence from './pages/attendance/AttendenceSheet.vue'

import notFound from './pages/NotFound.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/' ,redirect:'/attendance'},
        {path: '/attendance' ,component: Attendence ,children:[
            {path: '/:subCode/:subName' ,component: null},
        ]},
        {path: '/addSubject' ,component: null ,children:[
            {path: '/:subCode/:subName' ,component: null},
        ]},
        {path: '/profile' ,component: null},
        {path: '/:notFound(.*)' ,component: notFound},
    ]
});

export default router;