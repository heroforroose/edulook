import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        nav:"1",
        aid:"1"
    },
    actions:{
        navChange(ctx,e) {
            ctx.commit("changeState",e)
        },
        toArticle(ctx,aid) {
            ctx.commit("changestateAid",aid)
        }
    },
    mutations:{
        changeState(state,e){
            state.nav = e
        },
        changestateAid(state,aid){
            state.aid=aid
        }
    }
})
