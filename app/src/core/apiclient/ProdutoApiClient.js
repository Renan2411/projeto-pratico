import axios from "axios";
import { urls } from "@/core/constants"

class ProdutoApiClient{
    async buscarListagem(){
        return await axios.get(urls.COMUM.URL_PRODUTOS);
    }

    async criar(payload){
        return await axios.post(urls.COMUM.URL_PRODUTOS, payload)
    }

    async editar(payload){
        return await axios.put(urls.COMUM.URL_PRODUTOS, payload);
    }

    async excluir(payload){
        return await axios.delete(urls.COMUM.URL_PRODUTOS, payload)
    }
}

export default new ProdutoApiClient()