import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import ProdutosList from '@/components/compras/ProdutosList.vue'

const localVue = createLocalVue();
Vue.use(Vuetify)
localVue.use(Vuex)

describe('ProdutoList', () => {

    let store,
        actions,
        state,
        mutations;
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();

        state = {
            produtosCadastrados: [
                { 'id': 1, 'nome': 'telefone' },
                { 'id': 2, 'nome': 'KIller Queen' },
            ],
            produtosCarrinho: [
                { 'id': 1, 'nome': 'telefone' },
                { 'id': 2, 'nome': 'KIller Queen' },
            ]
        }

        store = new Vuex.Store({ state })
    })

    it('Deve pegar os produtos Cadastrados ao ser mountado', () => {
        const wrapper = shallowMount(ProdutosList, {
            store, localVue, vuetify
        })

        expect(wrapper.vm.$data.produtos[0]).not.toBeUndefined();
        expect(wrapper.vm.$data.produtos).toHaveLength(2);
    })

    it('Deve pegar os produtos do carrinho', async () => {
        const wrapper = shallowMount(ProdutosList, {
            store, vuetify, localVue,
        })

        await wrapper.vm.atualizarCarrinho();

        expect(wrapper.vm.$data.produtosCarrinho).toHaveLength(2);

    })
})