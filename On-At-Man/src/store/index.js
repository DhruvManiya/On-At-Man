import { createStore } from 'vuex';

import addSubjectModule from './modules/addSubject/index.js';
import mainSheetOfAttendencModule from './modules/mainSheetOfAttendence/index.js';

const store = createStore({
    modules:{
        addSubject:addSubjectModule,
        mainSheetOfAttendenc:mainSheetOfAttendencModule
    },
    state() {
        return{
            displayNevbar:true,
        }
    }
});

export default store;