<template>
  <v-bottom-navigation v-model="value" :background-color="color" dark fixed>
    <v-btn to="/home">
      <span>Home</span>

      <v-icon>mdi-home-circle-outline</v-icon>
    </v-btn>

    <v-btn to="/topup">
      <span>Topup</span>

      <v-icon>mdi-cash-multiple</v-icon>
    </v-btn>

    <v-btn to="/invoice">
      <span>History</span>

      <v-icon>mdi-receipt</v-icon>
    </v-btn>

    <v-btn to="/feedback">
      <span>Feedback</span>

      <v-icon>mdi-book-education-outline</v-icon>
    </v-btn>
    
    <v-btn to="/account">
      <span>Account</span>

      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  components: {},
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
        case 4:
          return "black";
        default:
          return "blue-grey";
      }
    },
  },
};
</script>