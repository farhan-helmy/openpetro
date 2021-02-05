<template>
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          INVOICE {{paymentdata._id}}
        </div>
        <v-list-item-title class="headline mb-1">
          OpenPetro~
        </v-list-item-title>
        <v-list-item-subtitle>Price:{{paymentdata.price}}</v-list-item-subtitle>
        <v-list-item-subtitle>Date:{{paymentdata.createdAt}}</v-list-item-subtitle>
        <v-list-item-subtitle>Fuel Pump No.:{{paymentdata.fuel_pump_no}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        @click="goHome"
      >
        HOME
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters('payment',[
            'datapayment'
        ]),
        paymentdata(){
            return this.datapayment
        }
    },
    methods:{
       goHome(){
           this.$router.push('home')
       }
    }
}
// {
//        ...mapActions('payment',[
//            'getTransactions'
//        ]),
</script>

