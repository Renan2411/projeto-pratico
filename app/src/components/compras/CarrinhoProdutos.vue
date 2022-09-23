<template>
  <div>
    <tool-bar />

    <div id="carrinhoCompra">
      <div id="show-produtos" v-if="produtosCarrinho.length > 0">
        <carrinho-card
          v-for="produto in produtosCarrinho"
          :key="produto.id"
          :produto="produto"
          @removerProduto="removerProduto($event)"
          @adicionarProduto="adicionarProduto($event)"
        />
      </div>
      <span v-else>Nenhum Produto Adicionado ao Carrinho</span>

      <v-card max-width="375" id="info-compras">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-card-title>Total da Compra</v-card-title>

        <v-card-text>
          <v-divider class="mx-4"></v-divider>

          <div class="my-4 text-h5">Total: R$ {{ total }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn color="primary lighten-2" text link to="/compras/home">
            Continuar
          </v-btn>
          <v-btn
            color="success lighten-2"
            text
            class="finalizarPedido"
            v-if="produtosCarrinho.length > 0"
            @click="dialog = true"
          >
            Finalizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email"
                  label="email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="finalizarPedido" class="confirmarPedido">
              Confirmar Pedido
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import toolBar from "./ToolBar.vue";
import CarrinhoCard from "./CarrinhoCard.vue";
import axios from "axios";
import { actionTypes, mutationTypes } from '@/core/constants/index'

export default {
  components: { toolBar, CarrinhoCard },
  beforeMount() {
    this.produtosCarrinho = this.$store.state.produtosCarrinho;
  },
  data() {
    return {
      produtosCarrinho: [],
      total: 0,
      dialog: false,
      email: "",
      pessoa: {},
    };
  },
  methods: {
    adicionarProduto(item){
      this.$store.commit(mutationTypes.COMUM.CARRINHO.ADICIONAR_PRODUTO, item)

      this.calcularTotal();
    },
    removerProduto(item){
      this.$store.commit(mutationTypes.COMUM.CARRINHO.REMOVER_PRODUTO, item)

      this.calcularTotal();
    },

    calcularTotal() {
      this.total = 0;
      this.produtosCarrinho = this.$store.state.produtosCarrinho;
      this.produtosCarrinho.map(
        (Element) => (this.total += Element.quantidade * Element.preco)
      );
    },
    async finalizarPedido() {
      let response = await axios.get(
        `http://localhost:8080/pessoa/${this.email}`
      );

      let pedido = {
        valor_final: this.total,
        descricao: "Novo pedido",
        usuario: response.data,
      };

      let pedidoProduto = {
        pedido: pedido,
        produtos: this.produtosCarrinho,
      };

      this.$store.dispatch(actionTypes.COMUM.REGISTAR_NOVO.PEDIDO, pedidoProduto);
      this.$store.commit(mutationTypes.COMUM.CARRINHO.SET_ARRAY);

      this.atualizarCarrinho()
      this.dialog = false
    },
  },
};
</script>

<style scoped>
#show-produtos {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-center;
  align-items: center;
}

#carrinhoCompra {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#info-compras {
  margin-top: 20px;
  height: 218px;
}
</style>