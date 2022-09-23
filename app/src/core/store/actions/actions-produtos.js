import { actionTypes, mutationTypes, urls } from '@/core/constants'
import api from '@/core/apiclient'
import axios from 'axios'

export default {
    async [actionTypes.PRODUTO.CRIAR_PRODUTO]({ commit }, produto) {
        let { data } = await api.pedido.criar(produto)

        commit(mutationTypes.COMUM.ATUALIZAR_ARRAY.PRODUTOS, data)
    },

    async [actionTypes.PRODUTO.BUSCAR_LISTAGEM_PRODUTO]({ commit }) {
        let { data } = await api.produto.buscarListagem()

        commit(mutationTypes.COMUM.MOUNT_ARRAY.PRODUTOS, data)
    },

    async [actionTypes.PEDIDO_PRODUTO.BUSCAR_PEDIDO_PRODUTO_POR_PEDIDO_ID]({ commit }, pedido) {
        let { data } = await api.pedidoProduto.buscarPorPedidoId(pedido.id)

        commit(mutationTypes.COMUM.MOUNT_ARRAY.PRODUTOS_POR_PEDIDO, data)
    },
}
