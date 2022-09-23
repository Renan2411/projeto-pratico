<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="pedido.descricao"
            :counter="10"
            label="Descrição"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-select
            :items="clientes"
            label="Cliente"
            v-model="pedido.usuario"
            item-text="nome"
            item-value="id"
            single-line
            return-object
          ></v-select>
        </v-col>

        <div v-for="(item, index) in quantidadeProdutos" :key="index">
          <v-col cols="6">
            <v-select
              :items="produtosCadastrados"
              label="Produtos"
              v-model="produtosPedidos[item - 1]"
              item-text="nome"
              item-value="id"
              single-line
              return-object
            ></v-select>
          </v-col>

          <v-col cols="6" v-if="produtosPedidos[item - 1]">
            <v-text-field
              v-model="produtosPedidos[item - 1].quantidade"
              label="quantidade"
              required
            ></v-text-field>
          </v-col>
        </div>

        <v-col cols="12">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4 registerPedido"
            @click="registerPedido"
          >
            Cadastrar
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="blue" class="mr-4 adicionarProduto" @click="adicionarProduto"
            >Adicionar Produto</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { actionTypes } from "@/core/constants/index";

export default {
  Mount() {
    this.clientes = this.$store.state.clientesCadastrados;
    this.produtosCadastrados = this.$store.state.produtosCadastrados;
  },
  data: () => ({
    valid: true,
    pedido: {},
    pedidoProduto: {},
    clientes: [],
    produtosCadastrados: [],
    produtosPedidos: [],
    quantidadeProdutos: 1,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    registerPedido() {
      this.pedido.valor_final = this.calcularTotal();

      this.pedidoProduto = {
        pedido: this.pedido,
        produtos: this.produtosPedidos,
      };

      this.$store.dispatch(
        actionTypes.COMUM.REGISTAR_NOVO.PEDIDO,
        this.pedidoProduto
      );

      this.pedido = {};
      this.produtosPedidos = {};
      this.quantidadeProdutos = 1;
      this.pedidoProduto = {};
    },
    adicionarProduto() {
      if (this.quantidadeProdutos + 1 <= this.produtosCadastrados.length) {
        this.quantidadeProdutos++;
      }
    },
    calcularTotal() {
      let total = 0;

      this.produtosPedidos.forEach((element) => {
        total += parseInt(element.quantidade) * parseFloat(element.preco);
      });

      return total;
    },
  },
};
</script>