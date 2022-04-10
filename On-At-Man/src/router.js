import { createRouter,createWebHistory} from 'vue-router';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/attendance' ,component: null ,children:[
            {path: '/:subCode/:subName' ,component: null},
        ]},
        {path: '/addSubject' ,component: null ,children:[
            {path: '/:subCode/:subName' ,component: null},
        ]},
        {path: '/profile' ,component: null},
        {path: '/notFound' ,component: null},
    ]
});

export default router;