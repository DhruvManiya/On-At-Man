import { createRouter,createWebHistory} from 'vue-router';

import Attendence from './pages/attendance/AttendenceSheet.vue'
import SubjectSheet from './pages/attendance/SubAttendSheet.vue'
import MyProfile from './pages/Profile/MyProfile.vue'
import AddSubject from './pages/addSub/AddSubject.vue'
import SignInUp from './pages/sign-in-up/SignInUp.vue'


import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/' ,redirect:'/attendance'},
        {path: '/sign-in-up' ,name:"SignInUp" ,component: SignInUp },
        {path: '/attendance' ,name:"attendance" ,component: Attendence },
        {path: '/attendance/:subCode/:subName/:numFrom/:numTo' ,name:"sheet" ,component: SubjectSheet},
        {path: '/addSubject' ,name:"addSubject" ,component: AddSubject },
        {path: '/profile' ,name:"profile" ,component: MyProfile},
        {path: '/:notFound(.*)' ,name:"notFounded" ,component: NotFound},
    ]
});

export default router;
