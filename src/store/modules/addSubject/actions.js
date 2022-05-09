export default {
    registerSubject(Context,data){
        const subData = {
            code:data.code,
            name:data.name,
            numberFrom: data.numberFrom,
            numberTo: data.numberTo
        }

        Context.commit('registerSubject',subData)
    }
};