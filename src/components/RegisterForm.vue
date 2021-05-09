<template>
  <v-main>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <round-icon></round-icon>
        <v-card
          ref="form"
          class="mx-auto"
          color="#A9A9A9"
          dark
          max-width="400"
          elevation="7"
        >
          <v-card-title>
            <v-icon color="black">mdi-account</v-icon>
            <span class="title font-weight-bold text--primary"
              >Register Here</span
            >
          </v-card-title>
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="Full Name"
              prepend-icon="mdi-account-circle"
              required
            ></v-text-field>
            <v-text-field
              ref="email"
              v-model="email"
              :rules="[() => !!email || 'This field is required']"
              :error-messages="errorMessages"
              label="Email"
              prepend-icon="mdi-email"
              required
            ></v-text-field>
            <v-text-field
              v-model="icno"
              label="Icno"
              prepend-icon="mdi-account-box-outline"
              hint=""
            />
            <v-text-field
              v-model="age"
              label="Age"
              prepend-icon="mdi-airplane-takeoff"
              hint="test@email.com"
            />
            <v-text-field
              ref="password"
              v-model="password"
              :rules="[() => !!password || 'This field is required']"
              :error-messages="errorMessages"
              label="Password"
              type="password"
              prepend-icon="mdi-lock"
              required
            ></v-text-field>

            <v-row justify="center">
              <v-btn color="" @click="registerAction"> Sign UP </v-btn>
            </v-row>
            <v-spacer></v-spacer>
            <v-row justify="center">
              <router-link to="/login">BACK</router-link>
            </v-row>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import RoundIcon from "./animation/Round";
//import Auth from "@/services/Auth";
import { mapActions } from "vuex";
export default {
  components: {
    RoundIcon,
  },
  data: () => ({
    errorMessages: "",
    email: "",
    password: "",
    name: "",
    icno: "",
    age: "",
    topup_balance: "0",
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
        email: this.email,
        password: this.password,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    ...mapActions("auth", [
      "register", //also supports payload `this.nameOfAction(amount)`
    ]),
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    registerAction() {
      let age = this.age;
      let icno = this.icno;
      let name = this.name;
      let email = this.email;
      let password = this.password;
      let topup_balance = this.topup_balance
      console.log({ email, password });
      this.register({ email, password, name, age, icno, topup_balance })
        .then(() => this.$router.push("/home"))
        .catch((err) => console.log(err));
    },
  },
};
</script>