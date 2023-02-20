import { createStore } from 'vuex';

//separate module for Store
const counterModule={
    state(){
        return{
            counter:0,
        }
    },
    mutations:{
        increment(state){
            state.counter+=2
        },
        increase(state,payload){
            state.counter+=payload.value
        },
    },
    actions:{
        increment(context){
            setTimeout(() => {
                context.commit('increment')
            }, 2000);
        },
        increase(context,payload){
            setTimeout(() => {
                context.commit('increase',payload)
            }, 2000);
        },
    },
    getters:{
        finalCounter(state){
            return state.counter * 5
        },
    }
}
export const store= createStore({
    modules:{counterModule},
    state(){
        return{
            isLoggedIn:false,
        }
    },
    mutations:{
        setAuth(state,payload){
            state.isLoggedIn=payload.isAuth
        }
    },
    actions:{
        login(context){
            context.commit('setAuth',{isAuth:true})
        },
        logout(context){
            context.commit('setAuth',{isAuth:false})
        },
    },
    getters:{
        userAuthenticated(state){
            // console.log(state.isLoggedIn)
            return state.isLoggedIn
        },
    }
})