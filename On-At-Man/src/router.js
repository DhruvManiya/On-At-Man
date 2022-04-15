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
        {path: '/attendance' ,name:"attendance" ,component: Attendence },
        {path: '/attendance/:subCode/:subName' ,name:"profile" ,component: SubjectSheet},
        {path: '/addSubject' ,name:"addSubject" ,component: addSubject },
        {path: '/profile' ,name:"profile" ,component: MyProfile},
        {path: '/:notFound(.*)' ,name:"notFounded" ,component: notFound},
    ]
});

export default router;