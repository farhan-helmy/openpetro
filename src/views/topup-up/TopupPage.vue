<template>
  <div>
    <v-app-bar dense color="indigo darken-3" dark>
      <v-btn icon @click="goHome"> <v-icon>mdi-arrow-left</v-icon></v-btn>
      <v-spacer></v-spacer>
      <div class="d-flex flex-column align-center mb-6">
        <p>test</p>
        <v-toolbar-title
          >Wallet Balance: RM {{ customerInfo }}</v-toolbar-title
        >
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" align="center" justify="center">
          <p>Select topup amount:</p>

          <v-btn-toggle v-model.number="amount_1">
            <v-btn value="20" x-large> RM20 </v-btn>
            <v-btn value="40" x-large> RM40 </v-btn>
            <v-btn value="60" x-large> RM60 </v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col cols="12" sm="6" align="center" justify="center">
          <v-btn-toggle v-model.number="amount_2">
            <v-btn value="80" x-large> RM80 </v-btn>
            <v-btn value="100" x-large> RM100 </v-btn>
            <v-btn value="120" x-large> RM120 </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-container>

    <v-footer color="indigo darken-3" app>
      <v-row justify="center" no-gutters>
        <v-btn
          v-if="this.amount_1 == null"
          x-large
          color="blue"
          dark
          @click="goPayTopup"
        >
          TOPUP . RM {{ this.amount_2 }}
        </v-btn>
        <v-btn v-else x-large color="blue" dark @click="goPayTopup">
          TOPUP . RM {{ this.amount_1 }}
        </v-btn>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      text: "center",
      icon: "justify",
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
      amount_2: null,
      amount_1: null,
      //balance: this.customerInfo.topup_balance
    };
  },
  computed: {
    ...mapGetters("auth", ["customerdata"]),
    customerInfo() {
      return this.customerdata.topup_balance;
    },
  },
  mounted() {
    this.getUsers()
      .then(() => console.log("done"))
      .catch((err) => console.log(err));
  },
  methods: {
    ...mapActions("auth", ["getUsers"]),
    ...mapActions("payment", ["topupWallet"]),
    goHome() {
      this.$router.push("topup");
    },
    goPayTopup() {
      if (this.amount_1 == null) {
        let topup_amount = this.amount_2
        let topup_bal = this.customerInfo
        let topup_balance = topup_amount + topup_bal;
        console.log(isNaN(topup_amount))
         console.log(isNaN(topup_bal))
        console.log({topup_balance})
        this.topupWallet({ topup_balance })
          .then(() => this.$router.push("loadingtopup"))
          .catch((err) => console.log(err));
      } else {
        let topup_amount = this.amount_1
        let topup_bal = this.customerInfo
        let topup_balance = topup_amount + topup_bal ;
        console.log(!isNaN(topup_amount))
         console.log(!isNaN(topup_bal))
         console.log({topup_balance})
        this.topupWallet({ topup_balance })
          .then(() => this.$router.push("loadingtopup"))
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>