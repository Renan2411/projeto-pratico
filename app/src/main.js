import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from '@/core/store'
import vuetify from './plugins/vuetify'
import { actionTypes } from '@/core/constants'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    created() {
        this.$store.dispatch(actionTypes.USUARIO.BUSCAR_LISTAGEM_USUARIO)
    },
    render: (h) => h(App),
}).$mount('#app')
