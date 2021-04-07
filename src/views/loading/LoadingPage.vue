<template>
  <div>
    <div>
      <v-sparkline
        :value="value"
        :gradient="gradient"
        :smooth="radius || false"
        :padding="padding"
        :line-width="width"
        :stroke-linecap="lineCap"
        :gradient-direction="gradientDirection"
        :fill="fill"
        :type="type"
        :auto-line-width="autoLineWidth"
        auto-draw
      ></v-sparkline>
    </div>
    <div><v-text-field color="success" loading disabled></v-text-field></div>
    <div><h1 class="text-center">Loading ...</h1></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
    // balance: this.customerInfo.$numberDecimal
  }),
  computed: {
    ...mapGetters("auth", ["customerdata"]),
    customerInfo() {
      return this.customerdata.topup_balance;
    },
  },
  mounted() {
    this.timeOut();
    this.iotPump();
  },
  methods: {
    // ...mapActions("auth", ["getUsers"]),
    //...mapActions("payment", ["updateBalance"]),
    nextPage() {
      this.$router.push("invoiceview");
    },
    timeOut() {
      let topup_balance = this.customerInfo - this.$route.query.fuel_amount;
      console.log({ topup_balance });
      return new Promise((resolve, reject) => {
        axios({
          url: "http://192.168.0.139:3000/customers/topup",
          data: { topup_balance },
          method: "PATCH",
        })
          .then((resp) => {
            console.log(resp.data);
            setTimeout(() => {
              this.nextPage();
            }, 1000);
            resolve(resp);
          })
          .catch((err) => {
            console.log(err.body);
            reject(err);
          });
      });
    },
    iotPump() {
      var req = new XMLHttpRequest();
      req.open("GET", "http://192.168.0.248:5000/fuelpump/10", true);
      req.send();
    },
  },
};
</script>


 updateBalance(topbal){
        return new Promise((resolve, reject) => {
          axios({url: 'http://localhost:3000/customers/topup', data: topbal, method: 'PATCH'})
          .then(resp => {
            console.log(resp.data)
            resolve(resp)
          })
          .catch(err => {
            console.log(err.body)
            reject(err)
          })
        })
    }



