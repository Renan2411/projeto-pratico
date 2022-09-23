import { actionTypes, mutationTypes, urls } from '@/core/constants'
import api from '@/core/apiclient'

export default {
    async [actionTypes.PEDIDO.BUSCAR_LISTAGEM_PEDIDO]({ commit }) {
        let { data } = await api.pedido.buscarListagem()

        commit(mutationTypes.COMUM.MOUNT_ARRAY.PEDIDOS, data)
    },

    async [actionTypes.PEDIDO.CRIAR_PEDIDO]({ commit }, pedido) {
        let { data } = await api.pedido.criar(pedido)

        commit(mutationTypes.COMUM.ATUALIZAR_ARRAY.PEDIDOS, data)
        commit(mutationTypes.COMUM.ATUALIZAR_ARRAY.PRODUTOS, pedido.produtos)
    },
}
