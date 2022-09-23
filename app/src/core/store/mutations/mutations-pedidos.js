import { mutationTypes } from '@/core/constants/index'
import Vue from 'vue';

export default {
    [mutationTypes.COMUM.MOUNT_ARRAY.PEDIDOS](state, pedidos) {
        Vue.set(state, 'pedidosCadastrados', pedidos)
    },

    [mutationTypes.COMUM.ATUALIZAR_ARRAY.PEDIDOS](state, pedido) {
        state.pedidosCadastrados.push(pedido);
    },
}