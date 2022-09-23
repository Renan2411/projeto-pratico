<template>
  <div>
    <tool-bar :carrinhoQuantidade="produtosCarrinho.length" />

    <div id="show-produtos">
      <produto-card
        v-for="produto in produtos"
        :key="produto.id"
        :produto="produto"
        @atualizarCarrinho="atualizarCarrinho"
      />
    </div>
  </div>
</template>

<script>
import ProdutoCard from "./ProdutoCard.vue";
import toolBar from "./ToolBar.vue";

export default {
  components: { ProdutoCard, toolBar },
  beforeMount() {
    this.produtos = this.$store.state.produtosCadastrados;
  },
  data() {
    return {
      produtos: [],
      produtosCarrinho: [],
    };
  },
  methods: {
    atualizarCarrinho() {
      this.produtosCarrinho = this.$store.state.produtosCarrinho;
    },
  },
};
</script>

<style scoped>
#show-produtos {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>