<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table :headers="headers" :items="items" :search="search">
        <template v-if="[`item.actions`]" v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="passarItemEdicao(item)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="passarItemExclusao(item)"> mdi-delete </v-icon>

          <slot v-bind:item="item"></slot>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["headers", "items"],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    passarItemEdicao(item) {
      this.$emit("editarItem", item);
    },
    passarItemExclusao(item) {
      this.$emit("excluirItem", item);
    },
  },
};
</script>