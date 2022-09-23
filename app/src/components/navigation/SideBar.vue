<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Vue.js </v-list-item-title>
        <v-list-item-subtitle> Lista de Tarefas </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in options" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["teste"],
  data() {
    return {
      drawer: this.$store.state.drawer,
      options: [
        {
          title: "Cadastrar Pessoa",
          icon: "mdi-account",
          to: "/user/register",
        },
        {
          title: "Listar Pessoas",
          icon: "mdi-account-group",
          to: "/user/list",
        },
        { title: "Fazer Pedido", icon: "mdi-file", to: "/pedido/register" },
        {
          title: "Listar Pedidos",
          icon: "mdi-file-multiple",
          to: "/pedido/list",
        },
        {
          title: "Cadastrar Produtos",
          icon: "mdi-package-variant-closed",
          to: "/produto/register"
        },
        {
          title: "Listar Produtos",
          icon: 'mdi-package-variant-closed-plus',
          to: '/produto/list'
        },
        {
          title: "Compras",
          icon: 'mdi-cart',
          to: '/compras/home'
        }
      ],
    };
  },
  watch: {
    teste() {
      this.drawer = this.$store.state.drawer;
    },
  },
};
</script>

<style scoped>
</style>