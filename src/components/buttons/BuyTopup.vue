<template>
  <v-row align="center" class="spacer" justify="center" no-gutters>
    <v-col cols="4" sm="2" md="1">
      <v-btn color="red" elevation="5" x-large @click="goTopup">TOPUP</v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  methods:{
    goTopup(){
      this.$router.push('topuppage')
    }
  }
};
</script>