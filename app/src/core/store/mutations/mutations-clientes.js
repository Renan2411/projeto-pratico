import { mutationTypes } from "@/core/constants";
import Vue from "vue";

export default {
    [mutationTypes.COMUM.MOUNT_ARRAY.CLIENTES](state, clientes) {
        Vue.set(state, 'clientesCadastrados', clientes);
    },

    [mutationTypes.COMUM.ATUALIZAR_ARRAY.CLIENTES](state, cliente) {
        state.clientesCadastrados.push(cliente);
    },

}