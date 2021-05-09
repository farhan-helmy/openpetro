<template>
  <div>
    <div>
      <v-app-bar dense color="indigo darken-3" dark>
        <v-spacer></v-spacer>
        <div class="d-flex flex-column align-center mb-6">
          <p>test</p>
          <v-toolbar-title
            >Wallet Balance: RM {{ customerInfo }}</v-toolbar-title
          >
        </div>

        <v-spacer></v-spacer>
      </v-app-bar>
    </div>
    <div>
      <buy-fuel></buy-fuel>
    </div>
  </div>
</template>

<script>
import BuyFuel from "@/components/buttons/BuyFuel";
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    topup_balance: "0"
  }),
  components: {
    BuyFuel,
  },
  computed: {
    ...mapGetters("auth", ["customerdata"]),
    customerInfo() {
      return this.customerdata.topup_balance;
    },
  },
  mounted() {
    let balance = this.topup_balance
    console.log(balance)
    this.topupWallet({ balance })
      .then(() => console.log("done"))
      .catch((err) => console.log(err));
    this.getUsers()
      .then(() => console.log("done"))
      .catch((err) => console.log(err));
  },
  methods: {
    ...mapActions("auth", ["getUsers"]),
    ...mapActions("payment", ["topupWallet"]),
  },
};
</script>