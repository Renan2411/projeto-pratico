import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/core/store/actions'
import mutations from '@/core/store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
})
