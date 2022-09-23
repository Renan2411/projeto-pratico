<template>

  <data-table :headers="headers" :items="pessoas" />
</template>

<script>
import DataTable from '../components/partials/DataTable.vue'

export default {
  components:{ DataTable },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nome",
          align: "start",
          filterable: false,
          value: "nome",
        },
        { text: "Email", value: "email" },
        { text: "Telefone", value: "phone" },
        { text: "Endereço", value: "endereco" },
      ],
      pessoas: [],
    };
  },
  beforeMount() {
    this.pessoas = this.$store.state.clientesCadastrados;
  },
};
</script>