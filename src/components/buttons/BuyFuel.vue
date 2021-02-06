<template>
  <v-row align="center" class="spacer" justify="center" no-gutters>
    <v-col cols="4" sm="2" md="1">
       <v-img src="@/assets/5288-02.png"></v-img>
      <v-btn color="blue" elevation="5" x-large @click="buyFuel">BUY FUEL</v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  methods: {
    buyFuel() {
      this.$router.push('buyfuel')
    }
  }
};
</script>