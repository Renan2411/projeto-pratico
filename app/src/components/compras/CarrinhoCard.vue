<template>
  <v-card class="teste" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="200" color="grey">
        <v-img height="250" src="https://picsum.photos/250/250"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <div class="text-overline mb-4">{{ produto.nome }}</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ produto.descricao }}
        </v-list-item-title>
        <v-list-item-subtitle
          >Preco: R${{
            produto.quantidade * produto.preco
          }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        dark
        fab
        color="teal"
        @click="$emit('adicionarProduto', produto)"
      >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

      <span>{{ produto.quantidade }}</span>

      <v-btn
        outlined
        rounded
        text
        dark
        fab
        color="red"
        @click="$emit('removerProduto', produto)"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["produto"],
  methods: {},
};
</script>

<style scoped>
.teste {
  width: 700px;
  margin-bottom: 5px;
}
</style>