
import mutations from './mutation.js';
import actions from './actions.js';
import getters from './getters.js';



export default {
    namespaced:true,
    state() {
        return{
            mySubjects:[
                {
                    code: '3140702',
                    name:'OS',
                    numberFrom:'200760107001',
                    numberTo:'200760107069'
                },
                {
                    code: '3140702',
                    name:'OS',
                    numberFrom:'200760107070',
                    numberTo:'200760107138'
                },
                {
                    code: '3140702',
                    name:'OS',
                    numberFrom:'200760107070',
                    numberTo:'200760107138'
                },
                {
                    code: '3140702',
                    name:'OS',
                    numberFrom:'200760107070',
                    numberTo:'200760107138'
                }

            ],
        }
    },
    mutations,
    actions,
    getters

};