export default {
    mySubjects (state) {
        return state.mySubjects;
    },
    hasSubjects (state) {
        return state.mySubjects && state .mySubjects.length > 0 ;
    }
};