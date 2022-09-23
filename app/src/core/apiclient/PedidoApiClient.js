import axios from 'axios'
import { urls } from '@/core/constants'

class PedidoApiClient {
    async buscarListagem() {
        return await axios.get(urls.COMUM.URL_PEDIDOS)
    }

    async criar(payload) {
        return await axios.post(urls.COMUM.URL_PEDIDOS, payload)
    }

    async editar(payload) {
        return await axios.put(urls.COMUM.URL_PEDIDOS, payload)
    }

    async excluir(payload) {
        return await axios.delete(urls.COMUM.URL_PEDIDOS, payload)
    }
}

export default new PedidoApiClient()
