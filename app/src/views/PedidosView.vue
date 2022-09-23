<template>
  <div>
    <data-table :headers="headers" :items="pedidos">
      <template v-slot="item">
        <v-icon small class="mr-2" @click="montarPedidos(item)">
          mdi-eye
        </v-icon>
      </template>
    </data-table>

    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2"> Produtos </v-card-title>

          <v-card-text>
            <data-table
              :items="pedidosCliente"
              :headers="headersProdutos"
            ></data-table>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import DataTable from "../components/partials/DataTable.vue";
import {actionTypes} from '@/core/constants/index'

export default {
  components: { DataTable },
  data() {
    return {
      dialog: false,
      pedidos: [],
      pedidosCliente: [],
      headers: [
        {
          text: "Cliente",
          align: "start",
          filterable: false,
          value: "usuario.nome",
        },
        { text: "Email", value: "usuario.email" },
        { text: "Descrição", value: "descricao" },
        { text: "Total", value: "valor_final" },
        { text: "Actions", value: "actions" },
      ],
      headersProdutos: [
        {
          text: "Nome",
          align: "start",
          filterable: false,
          value: "produto.nome",
        },
        { text: "Quantidade", value: "quantidade" },
        { text: "Descrição", value: "produto.descricao" },
        { text: "Preço", value: "produto.preco" },
      ],
    };
  },
  beforeMount() {
    this.pedidos = this.$store.state.pedidosCadastrados;
  },
  beforeUpdate() {},
  methods: {
    montarPedidos(event) {
      // this.pedidosCliente = event.item.produtos;
      console.log(event.item);
      this.$store.dispatch(actionTypes.PEDIDO_PRODUTO.BUSCAR_PEDIDO_PRODUTO_POR_PEDIDO_ID, event.item);

      setTimeout(() => {
        this.pedidosCliente = this.$store.state.produtosPorPedido;

        this.dialog = true;
      }, 500);
    },
  },
};
</script>/watch