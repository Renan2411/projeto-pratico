<template>
  <v-app id="inspire">

    <tools-bar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>


<script>
import ToolsBar from "./components/navigation/ToolsBar.vue";
import { actionTypes, mutationTypes } from '@/core/constants/index'

export default {
  components: { ToolsBar },
  name: "App",

  data: () => ({}),
  created() {
    this.$store.dispatch(actionTypes.PRODUTO.BUSCAR_LISTAGEM_PRODUTO);
    this.$store.dispatch(actionTypes.PEDIDO.BUSCAR_LISTAGEM_PEDIDO);

    this.$store.commit(mutationTypes.COMUM.CARRINHO.SET_ARRAY)
  },
};
</script>
