<template>
  <div>
    <div>
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
                <p>AMOUNT (RM)</p>
                <v-slide-group>
                  <v-btn-toggle v-model="amount" borderless>
                    <v-btn value="20"> RM 20 </v-btn>

                    <v-btn value="40">
                      <span class="hidden-sm-and-down">Center</span>

                      RM 40
                    </v-btn>

                    <v-btn value="60">
                      <span class="hidden-sm-and-down">Right</span>

                      RM 60
                    </v-btn>

                    <v-btn value="80">
                      <span class="hidden-sm-and-down">Justify</span>

                      RM 80
                    </v-btn>
                    <v-btn value="100">
                      <span class="hidden-sm-and-down">Justify</span>

                      RM 100
                    </v-btn>
                  </v-btn-toggle>
                </v-slide-group>
              </v-col>
              <v-col cols="10" class="py-2">
                <p>Fuel Type</p>

                <v-btn-toggle v-model="fueltype" borderless>
                  <v-btn value="RON97" color="green"> RON97 </v-btn>

                  <v-btn value="RON95" color="yellow">
                    <span class="hidden-sm-and-down">Center</span>

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
            PAY . RM {{ this.amount }}
          </v-btn>
        </v-row>
      </v-footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    pumpno: null,
    text: "center",
    amount: "",
    toggle_none: null,
    toggle_one: 0,
    toggle_exclusive: 1,
    toggle_multiple: [0, 1, 2],
    fueltype: "",
  }),
  methods: {
    ...mapActions('payment',[
      'pay'
    ]),
    goPay() {
      let fuel_pump_no = this.pumpno + 1
      let fuel_amount = this.amount
      let fuel_type = this.fueltype
      this.pay({fuel_pump_no,fuel_amount,fuel_type})
      .then(() => this.$router.push({ path: 'loading', query: { fuel_amount: this.amount }}))
      .catch(err => console.log(err))
    },
  },
};
</script>