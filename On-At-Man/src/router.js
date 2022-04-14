import { createRouter,createWebHistory} from 'vue-router';

import Attendence from './pages/attendance/AttendenceSheet.vue'
import SubjectSheet from './pages/attendance/SubAttendSheet.vue'
import MyProfile from './pages/Profile/MyProfile.vue'
import addSubject from './pages/addSub/addSubject.vue'

import notFound from './pages/NotFound.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/' ,redirect:'/attendance'},
        {path: '/attendance' ,component: Attendence },
        {path: '/attendance/320/subName' ,component: SubjectSheet},
        {path: '/addSubject' ,component: addSubject },
        {path: '/profile' ,component: MyProfile},
        {path: '/:notFound(.*)' ,name:"notFounded" ,component: notFound},
    ]
});

export default router;