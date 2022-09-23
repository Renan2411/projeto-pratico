import { mutationTypes } from '@/core/constants/index'
import Vue from 'vue'

export default {
    [mutationTypes.COMUM.MOUNT_ARRAY.PRODUTOS](state, produtos) {
        Vue.set(state, 'produtosCadastrados', produtos)
    },

    [mutationTypes.COMUM.ATUALIZAR_ARRAY.PRODUTOS](state, produto) {
        Array.isArray(produto)
            ? state.produtosCadastrados.map((Element) => {
                  produto.map((item) => {
                      Element.id === item.id && (Element.quantidade -= item.quantidade)
                  })
              })
            : state.produtosCadastrados.push(produto)
    },

    [mutationTypes.COMUM.MOUNT_ARRAY.PRODUTOS_POR_PEDIDO](state, pedidos) {
        let arrayPedidosPorProdutos = []

        pedidos.forEach((Element) => {
            Element.produto.quantidade = Element.quantidade
            arrayPedidosPorProdutos.push(Element)
        })

        Vue.set(state, 'produtosPorPedido', arrayPedidosPorProdutos)
    },
}
