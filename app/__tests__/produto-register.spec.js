import { mount, createLocalVue } from '@vue/test-utils'
import { actionTypes } from '@/core/constants/index'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify';
import ProdutoRegister from '@/components/forms/ProdutoRegister.vue'

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex)

describe('PedidoRegister', () => {

    let actions;
    let store;
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();

        actions = {
            [actionTypes.COMUM.REGISTAR_NOVO.PRODUTO]: jest.fn()
        }

        store = new Vuex.Store({
            actions
        })
    })

    it('Deve registrar novo produto', async () => {
        const wrapper = mount(ProdutoRegister, {
            store, localVue, vuetify
        })

        const button = wrapper.find('.registerProduto');
        await button.trigger('click');

        expect(actions[actionTypes.COMUM.REGISTAR_NOVO.PRODUTO]).toBeCalled();
    })


})