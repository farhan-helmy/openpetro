<template>
  <v-row align="center" class="spacer" justify="center" no-gutters>
    <v-col cols="4" sm="2" md="1">
      <v-btn color="secondary" elevation="5" x-large @click="logoutAction"
        >LOGOUT</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions('auth', [
      'logout', //also supports payload `this.nameOfAction(amount)`
    ]),
    logoutAction() {
      this.logout()
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>