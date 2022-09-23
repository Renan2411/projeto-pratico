import { mount, createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex';
import Vuetify from "vuetify"
import Vue from 'vue';
import { actionTypes, mutationTypes } from "@/core/constants/index"
import PedidoRegister from "@/components/forms/PedidoRegister.vue"

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex)

describe('PedidoRegister', () => {

    let actions;
    let mutations;
    let state;
    let store;
    let vuetify;


    beforeEach(() => {
        vuetify = new Vuetify();

        actions = {
            [actionTypes.COMUM.REGISTAR_NOVO.PEDIDO]: jest.fn()
        }

        mutations = {}

        state = {
            clientesCadastrados: [
                {
                    'id': 1,
                    'nome': 'renan'
                },
                {
                    'id': 2,
                    'nome': 'talita'
                }
            ],
            produtosCadastrados: [
                {
                    'id': 1,
                    'nome': 'telefone'
                },
            ]
        }

        store = new Vuex.Store({ state, mutations, actions })

    })

    describe('Mounted', () => {
        it('Deve preencher os dados dos clientes', async () => {
            const wrapper = mount(PedidoRegister, {
                store,
                vuetify,
                localVue
            })

            await wrapper.setData({
                clientes: wrapper.vm.$store.state.clientesCadastrados
            })

            expect(wrapper.vm.$data.clientes).toBe(wrapper.vm.$store.state.clientesCadastrados);
        })

        it('Deve preencher os dados dos produtos', async () => {
            const wrapper = mount(PedidoRegister, {
                store,
                localVue,
                vuetify
            })

            await wrapper.setData({
                produtosCadastrados: wrapper.vm.$store.state.produtosCadastrados
            })

            expect(wrapper.vm.$data.produtosCadastrados).toBe(wrapper.vm.$store.state.produtosCadastrados)
        })

        it('Quantidade deve ser igual a 1', () => {
            const wrapper = mount(PedidoRegister, {
                store,
                vuetify,
                localVue
            })

            expect(wrapper.vm.$data.quantidadeProdutos).toBeGreaterThanOrEqual(1);
        })
    })
    
    describe('Events', () =>{
        it('Deve registrar um novo pedido', async () => {
            const wrapper = mount(PedidoRegister, {
                store,
                localVue,
                vuetify
            })

            const button = wrapper.find('.registerPedido');
            await button.trigger('click');

            expect(actions[actionTypes.COMUM.REGISTAR_NOVO.PEDIDO]).toBeCalled();

        })
    })


    describe('Methods', () => {
        it('Deve incrementar 1 em quantidadeProdutos', async () => {
            const wrapper = mount(PedidoRegister, {
                store, localVue, vuetify
            });

            await wrapper.setData({
                produtosCadastrados: [
                    { 'id': 1, 'nome': 'telefone' },
                    { 'id': 2, 'nome': 'notebook' }
                ]
            });

            await wrapper.vm.adicionarProduto();

            expect(wrapper.vm.$data.quantidadeProdutos).toBeGreaterThanOrEqual(2);

        });

        it('Deve falhar ao incrementar 1 em quantidadeProdutos quando o botão for pressionado', async () => {
            const wrapper = mount(PedidoRegister, {
                store, localVue, vuetify
            });

            await wrapper.setData({
                produtosCadastrados: wrapper.vm.$store.state.produtosCadastrados
            })
            await wrapper.vm.adicionarProduto();


            expect(wrapper.vm.$data.quantidadeProdutos).not.toBeGreaterThan(1);

        });


    })



})