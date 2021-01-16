<template>
  <div>
    <v-main>
      <round-icon></round-icon>
      <v-card class="mx-auto" color="#A9A9A9" dark max-width="400" elevation="7">
        <v-card-title>
          <v-icon color="black">mdi-account</v-icon>
          <span class="title font-weight-bold text--primary">Login Here</span>
        </v-card-title>

        <v-card-text>
          <v-text-field label="E-mail" prepend-icon="mdi-account-circle"  hint="test@email.com" />
          <v-text-field label="Password" prepend-icon="mdi-lock" />
          <v-row justify="center">
          <v-btn>Login</v-btn>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-row align="center" justify="center">
        <v-card-actions>
        <span class="title font-weight-light text--primary">Not a member yet? <router-link to="/register">Register Here</router-link></span>
          
        </v-card-actions>
        </v-row>
      </v-card>
      <v-row align="center" justify="center">
      <!--<v-img
        contain
        lazy-src="../assets/logo.png"
      ></v-img> -->
      </v-row>
    </v-main>
  </div>
</template>

<script>
import RoundIcon from "./animation/Round";
export default {
  components: {
    RoundIcon,
  },
  methods: {
    
  }
};
</script>

<style scoped>
a{
  color: white;
}
</style>