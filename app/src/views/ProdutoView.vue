<template>
  <data-table :items="items" :headers="headers" />
</template>

<script>
import dataTable from "../components/partials/DataTable.vue";

export default {
  components: { dataTable },
  beforeMount() {
    this.items = this.$store.state.produtosCadastrados;
  },
  data() {
    return {
      items: {},
      headers: [
        {
          text: "nome",
          align: "start",
          filterable: false,
          value: "nome",
        },
        { text: "Descrição", value: "descricao" },
        { text: "Quantidade", value: "quantidade" },
        { text: "Preço", value: "preco" },
      ],
    };
  },
};
</script>