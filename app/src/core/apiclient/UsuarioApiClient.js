import axios from 'axios'
import { urls } from '@/core/constants'

class UsuarioApiClient {
    async buscarListagem() {
        return await axios.get(urls.COMUM.URL_CLIENTE)
    }

    async buscarPorEmail(usuarioEmail) {
        return await axios.get(`${urls.COMUM.URL_CLIENTE}/${usuarioEmail}`)
    }

    async criar(payload) {
        return await axios.post(urls.COMUM.URL_CLIENTE, payload)
    }

    async editar(payload) {
        return await axios.put(urls.COMUM.URL_CLIENTE, payload)
    }

    async excluir(payload) {
        return await axios.delete(urls.COMUM.URL_CLIENTE, payload)
    }
}

export default new UsuarioApiClient()
