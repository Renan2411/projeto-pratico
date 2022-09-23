import { actionTypes, mutationTypes, urls } from '@/core/constants/index'
import api from '@/core/apiclient'

export default {
    async [actionTypes.USUARIO.CRIAR_USUARIO]({ commit }, pessoa) {
        let { data } = await api.usuario.criar(pessoa)

        commit(mutationTypes.COMUM.ATUALIZAR_ARRAY.CLIENTES, data)
    },

    async [actionTypes.USUARIO.BUSCAR_LISTAGEM_USUARIO]({ commit }) {
        let { data } = await api.usuario.buscarListagem()

        commit(mutationTypes.COMUM.MOUNT_ARRAY.CLIENTES, data)
    },
}
