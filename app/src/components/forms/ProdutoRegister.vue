<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="4" md="4">
          <v-text-field
            v-model="produto.nome"
            :counter="10"
            label="Nome"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4" md="4">
          <v-text-field
            v-model="produto.descricao"
            label="Descrição"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4" md="4">
          <v-text-field
            v-model="produto.preco"
            label="valor"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4" md="4">
          <v-text-field
            v-model="produto.quantidade"
            label="quantidade"
            required
          ></v-text-field>
        </v-col>

        
        <v-col cols="12">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4 registerProduto"
            @click="registerProduto"
          >
            Cadastrar
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { actionTypes } from '@/core/constants/index'

export default {
  data: () => ({
    valid: true,
    produto: {},
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
    registerProduto() {
      this.$store.dispatch(actionTypes.COMUM.REGISTAR_NOVO.PRODUTO, this.produto);
      // this.$store.commit("atualizarArrayPessoas", this.pessoa);
      this.produto = {};
    },
  },
};
</script>