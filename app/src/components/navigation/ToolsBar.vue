<template>
  <div>
    <side-bar :teste="drawer" />

    <v-app-bar
      app
      color="#fcb69f"
      dark
      @click="changeDrawer"
      prominent
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";

export default {
  components: { SideBar },
  data(){
    return{
      drawer:''
    }
  },
  methods: {
    changeDrawer() {
      this.$store.commit("changeDrawer");

      this.drawer = this.$store.state.drawer;
    },
  },
};
</script>