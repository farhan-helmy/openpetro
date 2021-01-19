<template>
    <v-bottom-navigation v-model="value" :background-color="color" dark shift fixed >
      
      <v-btn to="/home">
        <span>Home</span>

        <v-icon>mdi-home-circle-outline</v-icon>
      </v-btn>

      <v-btn to="/topup">
        <span>Topup</span>

        <v-icon>mdi-cash-multiple</v-icon>
      </v-btn>

      <v-btn  to="/invoice">
        <span>History</span>

        <v-icon>mdi-receipt</v-icon>
      </v-btn>

      <v-btn  to="/user">
        <span>Account</span>

        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-bottom-navigation>
  
</template>

<script>

export default {
  components:{

  },
  data: () => ({ value: 1 }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
};
</script>