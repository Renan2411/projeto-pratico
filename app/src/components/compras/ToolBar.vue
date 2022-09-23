<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar>
      <v-toolbar-title>Compras</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon large link to="/compras/home">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon large link to="/compras/carrinho">
        <v-badge
          color="red"
          :content="carrinhoQuantidade"
          v-if="carrinhoQuantidade > 0"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>

        <v-icon v-else>mdi-cart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  props: ["carrinhoQuantidade"],
};
</script>