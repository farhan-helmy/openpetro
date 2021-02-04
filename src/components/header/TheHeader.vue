<template>
     <div class="text-right">
    <v-btn
      rounded
      color="primary"
      dark
    > <v-icon>mdi-cash-multiple</v-icon>
      RM {{customerInfo.$numberDecimal}}
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
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
  },
};
</script>