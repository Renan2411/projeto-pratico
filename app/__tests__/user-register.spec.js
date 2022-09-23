import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import { actionTypes } from '@/core/constants/index'
import UserRegister from '@/components/forms/registrar-usuario/UserRegister.vue';
import Vuetify from "vuetify";
import Vue from "vue";

const localVue = createLocalVue();

Vue.use(Vuetify);
localVue.use(Vuex);

describe('teste unitário do componente de registro de usuários', () => {

    let actions;
    let store;
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();

        actions = {
            [actionTypes.COMUM.REGISTAR_NOVO.CLIENTE]: jest.fn()
        }

        store = new Vuex.Store({
            actions
        })
    })

    it('Deve chamar a action de registrar novo cliente', async () => {
        const wrapper = mount(UserRegister, { store, localVue, vuetify })

        const button = wrapper.find('.register')

        await button.trigger('click')

        expect(actions[actionTypes.COMUM.REGISTAR_NOVO.CLIENTE]).toBeCalled()
    })

})