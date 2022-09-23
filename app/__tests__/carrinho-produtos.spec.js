import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { actionTypes, mutationTypes } from '@/core/constants'
import CarrinhoProdutos from '@/components/compras/CarrinhoProdutos.vue'

const localVue = createLocalVue();
Vue.use(Vuetify)
localVue.use(Vuex)

describe('CarrinhoProduto', () => {

    let store,
        state,
        mutations,
        actions,
        vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();

        state = {
            produtosCarrinho: [
                {
                    'id': 1,
                    'nome': 'telefone',
                    'quantidade': 1,
                    'preco': 30,
                    'descricao': 'teste'
                },
                {
                    'id': 2,
                    'nome': 'acessório para telefone',
                    'quantidade': 1,
                    'preco': 30,
                    'descricao': 'teste'
                },
            ]
        }

        actions = {
            [actionTypes.COMUM.REGISTAR_NOVO.PEDIDO]: jest.fn(),

        }
        mutations = {
            [mutationTypes.COMUM.CARRINHO.SET_ARRAY]: jest.fn(),
            [mutationTypes.COMUM.CARRINHO.ADICIONAR_PRODUTO]: jest.fn(),
            [mutationTypes.COMUM.CARRINHO.REMOVER_PRODUTO]:jest.fn()
        }


        store = new Vuex.Store({ actions, mutations, state })
    })

    it('deve atualizar a propriedade produtosCarrinho ao ser montado', () => {
        const wrapper = shallowMount(CarrinhoProdutos, {
            store, vuetify, localVue,
        })

        expect(wrapper.vm.$data.produtosCarrinho).toHaveLength(2);
    })

    it('deve chamar a mutations de adicionar produto ao carrinho', async () => {
        const wrapper = shallowMount(CarrinhoProdutos, {
            store, vuetify, localVue,
            stubs: {
                CarrinhoCard: {
                    template:
                        '<button class="stub" @click="$emit(\'adicionarProduto\', {id: 1, nome:\'renan\'})"></button>'
                }
            }
        })

        const button = wrapper.find('button[class="stub"]')
        await button.trigger('click')

        expect(mutations[mutationTypes.COMUM.CARRINHO.ADICIONAR_PRODUTO]).toHaveBeenCalled();
    })

    it('deve chamar a mutation de remover produto do carrinho', async () => {
        const wrapper = shallowMount(CarrinhoProdutos, {
            store, localVue, vuetify,
            stubs:{
                CarrinhoCard:{
                    template: 
                        '<button class="stub" @click="$emit(\'removerProduto\', {id: 1, nome: \'renan\'})"></button>'
                }
            }
        })

        const button = wrapper.find('.stub');
        await button.trigger('click')

        expect(mutations[mutationTypes.COMUM.CARRINHO.REMOVER_PRODUTO]).toHaveBeenCalled();
    })

    it('deve alterar o valor de total ao adicionar um produto', async () => {
        const wrapper = shallowMount(CarrinhoProdutos, {
            store, localVue, vuetify,
            stubs:{
                CarrinhoCard:{
                    template:
                        '<button class="stub" @click="$emit(\'adicionarProduto\', {id: 1, nome: \'renan\', preco: 123})"></button>'
                }
            }
        })

        const button = wrapper.find('.stub')
        await button.trigger('click')

        expect(wrapper.vm.$data.total).not.toBe(0);
    })

    it('não deve deixar finalizar pedido com sem produtos no carrinho', () => {
        state.produtosCarrinho = []

        const wrapper = shallowMount(CarrinhoProdutos, {
            store, localVue, vuetify,
        })

        const button = wrapper.find('.finalizarPedido')

        expect(button.exists()).toBe(false);
    })

    it('deve finalizar o pedido ao ser emitido o evento de click no botão', async () => {
        const wrapper = shallowMount(CarrinhoProdutos, {
            store, localVue, vuetify,
        })

        const button = wrapper.find('.confirmarPedido')

        await wrapper.setData({
            email: 'renan@gmail.com',
            pessoa: {
                'id': 1,
                'nome': 'renan',
                'email': 'renan@gmail.com'
            }
        })

        await button.trigger('click')

        expect(actions[actionTypes.COMUM.REGISTAR_NOVO.PEDIDO]).toHaveBeenCalled();
        expect(mutations[mutationTypes.COMUM.CARRINHO.SET_ARRAY]).toHaveBeenCalled()
    })


})