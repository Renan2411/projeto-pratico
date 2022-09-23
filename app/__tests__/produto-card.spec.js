import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from 'vuex';
import Vuetify from "vuetify";
import { mutationTypes } from "@/core/constants";
import ProdutoCard from '@/components/compras/ProdutoCard.vue';

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

let teste = (produtosCarrinho, item) => {
    let obj = Object.assign({}, item);

    let add = true;
    let quantidade = 1;

    produtosCarrinho.map((element) => {
        if (element.id === obj.id) {
            element.quantidade++;
            add = false
        }
    });

    if (add) {
        obj.quantidade = quantidade;
        produtosCarrinho.push(obj);
    }
}

describe('ProdutoCard', () => {
    let vuetify,
        store,
        state,
        adicionarProduto,
        mutations;

    beforeEach(() => {
        vuetify = new Vuetify();

        state = {
            produtosCarrinho: []
        }

        mutations = {
            [mutationTypes.COMUM.CARRINHO.ADICIONAR_PRODUTO]: jest.fn(),
        }

        store = new Vuex.Store({ mutations, state });
    })

    it('deve chamar a mutation de adicionar produto ao carrinho', async () => {
        const wrapper = mount(ProdutoCard, {
            vuetify,
            store,
            localVue,
            propsData: {
                produto: { 'id': 1, 'nome': 'telefone', 'descricao': 'teste', 'quantidade': 1, 'preco': 1000 },
            }
        })

        const teste = wrapper.find('.adicionarCarrinho')
        await teste.trigger('click')

        expect(mutations[mutationTypes.COMUM.CARRINHO.ADICIONAR_PRODUTO]).toBeCalled();
    })

    it('Deve emitir a função de atualizar carrinho', async () => {
        const wrapper = mount(ProdutoCard, {
            vuetify,
            store,
            localVue,
            propsData: {
                produto: { 'id': 1, 'nome': 'telefone', 'descricao': 'teste', 'quantidade': 1, 'preco': 1000 },
            }
        })

        const teste = wrapper.find('.adicionarCarrinho')
        await teste.trigger('click')

        expect(wrapper.emitted().atualizarCarrinho).toBeTruthy();
    })

    it('deve adicionar um novo produto ao carrinho', async () => {
        const wrapper = mount(ProdutoCard, {
            vuetify,
            store,
            localVue,
            propsData: {
                produto: { 'id': 1, 'nome': 'telefone', 'descricao': 'teste', 'quantidade': 1, 'preco': 1000 },
            }
        })

        const button = wrapper.find('.adicionarCarrinho')
        await button.trigger('click')

        teste(wrapper.vm.$store.state.produtosCarrinho, wrapper.vm.$data.produto)

        expect(wrapper.vm.$store.state.produtosCarrinho).toHaveLength(1)
    })

    it('deve incrementar a quantidade de um produto no carrrinho', async () => {
        const wrapper = mount(ProdutoCard, {
            vuetify,
            store,
            localVue,
            propsData: {
                produto: { 'id': 1, 'nome': 'telefone', 'descricao': 'teste', 'quantidade': 1, 'preco': 1000 },
            }
        })

        teste(wrapper.vm.$store.state.produtosCarrinho, wrapper.vm.$data.produto)

        const button = wrapper.find('.adicionarCarrinho')
        await button.trigger('click')

        teste(wrapper.vm.$store.state.produtosCarrinho, wrapper.vm.$data.produto)

        expect(wrapper.vm.$store.state.produtosCarrinho[0].quantidade).toBe(2)
    })
})