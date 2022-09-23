<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="250"
    v-if="produto.quantidade > 0"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" src="https://picsum.photos/250/250"></v-img>

    <v-card-title>{{ produto.nome }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">{{ produto.quantidade }} restantes</div>
      </v-row>

      <div class="my-4 text-subtitle-1">R$ • {{ produto.preco }}</div>

      <div>{{ produto.descricao }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="actionsCard">
      <v-btn
        class="adicionarCarrinho"
        icon
        color="deep-purple lighten-2"
        text
        large
        @click="adicionarCarrinho(produto)"
      >
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mutationTypes } from "@/core/constants/index";

export default {
  props: ["produto"],
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    adicionarCarrinho(item) {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 1000);

      this.$store.commit(mutationTypes.COMUM.CARRINHO.ADICIONAR_PRODUTO, item);

      this.$emit("atualizarCarrinho");
    },
  },
};
</script>