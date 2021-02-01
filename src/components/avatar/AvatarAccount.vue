<template>
  <v-card class="mx-auto" max-width="434" align="center" tile>
    <v-img height="100%" src="@/assets/bg1.jpg">
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-0" cols="12">
          
            <v-avatar color="warning lighten-2" size="164"></v-avatar>
  
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ customer.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ customer.age }}</v-list-item-subtitle>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card> 
</template>

<script>
import {mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth',[
      'customerdata'
    ]),
    customer(){
      return this.customerdata
    }
  },
  mounted(){
    this.getCustomer
  },
  methods: {
     ...mapActions('auth',[
      'getCustomer'
    ]),
  }
};
</script>