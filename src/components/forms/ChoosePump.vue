<template>
  <div>
    <div>
      <v-alert v-if="this.alert == true" type="warning">
        INSUFFICIENT FUND
      </v-alert>
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group v-model="pumpno" class="pa-4" show-arrows>
          <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="125"
              width="50"
              @click="toggle"
            >
              <!-- <v-card-title>{{ n }}</v-card-title> -->
              <v-icon color="white" size="48"
                >mdi-numeric-{{ n }}-circle-outline</v-icon
              >
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon v-if="active" color="white" size="30"
                    >mdi-numeric-{{ n }}-circle</v-icon
                  >
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>

        <v-expand-transition>
          <v-sheet v-if="pumpno != null" height="300" tile>
            <v-row class="fill-height" align="center" justify="center">
              <v-col cols="10" class="py-2">
                <p>AMOUNT (l)</p>
                <v-slide-group>
                  <v-btn-toggle v-model="amount" borderless>
                    <v-btn value="20"> 20 l <label for=""></label> </v-btn>

                    <v-btn value="40">
                      <span class="hidden-sm-and-down"></span>

                      40 l
                    </v-btn>

                    <v-btn value="60">
                      <span class="hidden-sm-and-down"></span>

                      60 l
                    </v-btn>

                    <v-btn value="80">
                      <span class="hidden-sm-and-down"></span>

                      80 l
                    </v-btn>
                    <v-btn value="100">
                      <span class="hidden-sm-and-down"></span>

                      100 l
                    </v-btn>
                  </v-btn-toggle>
                </v-slide-group>
                <v-text-field v-model="amount_keyin" label="Enter amount?">
                </v-text-field>
              </v-col>
              <v-col cols="10" class="py-2">
                <p>Fuel Type</p>
                <v-btn-toggle v-model="fueltype" borderless>
                  <v-btn value="RON97" color="green"> RON97 </v-btn>

                  <v-btn value="RON95" color="yellow">
                    <span class="hidden-sm-and-down"></span>

                    RON95
                  </v-btn>
                </v-btn-toggle>
              </v-col>
              <h3 class="title">Pump {{ pumpno + 1 }} Drive Safe!</h3>
            </v-row>
          </v-sheet>
        </v-expand-transition>
      </v-sheet>
    </div>
    <div>
      <v-row class="fill" align="center" justify="center">
        <h1>Choose pump number</h1>
      </v-row>
    </div>
    <div>
      <v-footer color="primary lighten-1" app>
        <v-row justify="center" no-gutters>
          <v-btn x-large color="primary" dark @click="goPay">
            PAY . RM {{ this.true_amount }} 
          </v-btn>
        </v-row>
      </v-footer>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  data: () => ({
    true_amount: "",
    pumpno: null,
    text: "center",
    amount: "",
    amount_keyin: "",
    toggle_none: null,
    toggle_one: 0,
    toggle_exclusive: 1,
    toggle_multiple: [0, 1, 2],
    fueltype: "",
    alert: false,
  }),
  computed: {
    ...mapGetters("auth", ["customerdata"]),
    customerInfo() {
      return this.customerdata.topup_balance;
    },
  },
  watch:{
    amount: function(){
      this.getFuelPrice().then((fuel_price_true) => {
        this.true_amount = this.amount * fuel_price_true
      })
    },
     amount_keyin: function(){
      this.getFuelPrice().then((fuel_price_true) => {
        this.true_amount = this.amount_keyin * fuel_price_true
      })
    }
  },
  mounted() {
    this.getFuelPrice();
  },
  methods: {
    ...mapActions("payment", ["pay"]),
    goPay() {
      console.log(this.amount_keyin);
      this.getFuelPrice().then((fuel_price_true) => {
        if (this.amount !== "") {
          let topup_balance = this.customerInfo - (this.amount * fuel_price_true);
          if (topup_balance > this.customerInfo) {
            this.alert = true;
          } else {
            let fuel_pump_no = this.pumpno + 1;
            let fuel_amount = this.amount;
            let true_amount = fuel_price_true * this.amount;
            console.log("hey ni harga betui" + fuel_price_true);
            let fuel_type = this.fueltype;
            this.pay({ fuel_pump_no, fuel_amount, fuel_type })
              .then(() =>
                this.$router.push({
                  path: "loading",
                  query: { fuel_amount: true_amount, fuel_litre: fuel_amount },
                })
              )
              .catch((err) => console.log(err));
          }
        } else{
          let topup_balance = this.customerInfo - (this.amount_keyin * fuel_price_true);

          console.log("topup bal" + topup_balance)
          if (topup_balance > this.customerInfo) {
            this.alert = true;
          } else {
            let fuel_pump_no = this.pumpno + 1;
            let fuel_amount = this.amount_keyin;
            let true_amount = fuel_price_true * this.amount_keyin;
            this.true_amount = true_amount
            console.log("this is true amount" + true_amount)
            console.log("hey ni harga betui" + fuel_price_true);
            let fuel_type = this.fueltype;
            this.pay({ fuel_pump_no, fuel_amount, fuel_type })
              .then(() =>
                this.$router.push({
                  path: "loading",
                  query: { fuel_amount: true_amount, fuel_litre: fuel_amount },
                })
              )
              .catch((err) => console.log(err));
          }
        }
      });
    },
    getFuelPrice() {
      var utc = new Date().toJSON().slice(0, 10);
      console.log(utc);
      return new Promise((resolve, reject) => {
        axios({
          url: "http://hargaminyak.test/hargaminyak/"+utc,
          method: "GET",
        })
          .then((resp) => {
            var fuel_price = resp.data[0].ron95;
            var real = fuel_price.split("RM");
            var fuel_price_true = real[1];
            console.log(fuel_price_true);
            resolve(fuel_price_true);
          })
          .catch((err) => {
            console.log(err.body);
            reject(err);
          });
      });
    },
  },
};
</script>