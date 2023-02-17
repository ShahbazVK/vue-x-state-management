import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store= createStore({
    state(){
        return{
            counter:0,
            isLoggedIn:false,
        }
    },
    mutations:{
        increment(state){
            state.counter+=2
        },
        increase(state,payload){
            state.counter+=payload.value
        },
        setAuth(state,payload){
            state.isLoggedIn=payload.isAuth
        }
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
        login(context){
            context.commit('setAuth',{isAuth:true})
        },
        logout(context){
            context.commit('setAuth',{isAuth:false})
        },
    },
    getters:{
        finalCounter(state){
            return state.counter * 5
        },
        userAuthenticated(state){
            console.log(state.isLoggedIn)
            return state.isLoggedIn
        },
    }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
