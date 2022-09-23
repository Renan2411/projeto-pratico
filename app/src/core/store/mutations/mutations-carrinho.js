import { mutationTypes } from "@/core/constants";
import Vue from "vue";

export default {

    [mutationTypes.COMUM.CARRINHO.SET_ARRAY](state) {
        Vue.set(state, 'produtosCarrinho', [])
    },

    [mutationTypes.COMUM.CARRINHO.ADICIONAR_PRODUTO](state, item) {
        let obj = Object.assign({}, item);

        let add = true;
        let quantidade = 1;

        state.produtosCarrinho.map((element) => {
            if (element.id === obj.id) {
                element.quantidade++;
                add = false
            }
        });

        if (add) {
            obj.quantidade = quantidade;
            state.produtosCarrinho.push(obj);
        }
    },

    [mutationTypes.COMUM.CARRINHO.REMOVER_PRODUTO](state, item) {

        let removerElemento = false;

        state.produtosCarrinho.map((element) => {
            if (element.id === item.id) {

                element.quantidade--;

                (element.quantidade === 0) && (removerElemento = true)
            }
        });

        (removerElemento) && (state.produtosCarrinho =
            state.produtosCarrinho.filter(
                (element) => { if (element.id !== item.id) return element }
            ));
    }

}