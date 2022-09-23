<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="4" md="4">
          <v-text-field
            v-model="pessoa.nome"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4" md="4">
          <v-text-field
            v-model="pessoa.email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4" md="4">
          <v-text-field
            v-model="pessoa.senha"
            label="senha"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4" md="4">
          <v-text-field
            v-model="pessoa.telefone"
            label="Telefone"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4" md="8">
          <v-text-field
            v-model="pessoa.endereco"
            label="Endereço"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4 register"
            @click="registerPerson"
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
import { actionTypes } from "@/core/constants/index";

export default {
  data: () => ({
    valid: true,
    pessoa: {},
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
    registerPerson() {
      this.$store.dispatch(
        actionTypes.COMUM.REGISTAR_NOVO.CLIENTE,
        this.pessoa
      );
      this.pessoa = {};
    },
  },
};
</script>