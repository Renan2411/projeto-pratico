import axios from 'axios'
import { urls } from '@/core/constants'

class PedidoProdutoApiClient {
    async buscarListagem() {
        return await axios.get(urls.COMUM.URL_PEDIDOS_PRODUTOS)
    }

    async buscarPorPedidoId(pedidoId) {
        return await axios.get(`${urls.COMUM.URL_PEDIDOS_PRODUTOS}/${pedidoId}`)
    }

    async criar(payload) {
        return await axios.post(urls.COMUM.URL_PEDIDOS_PRODUTOS, payload)
    }
}

export default new PedidoProdutoApiClient()
