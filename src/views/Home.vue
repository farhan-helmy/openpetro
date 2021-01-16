<template>
  <div>
      <v-row>
          <v-col>
    <buy-fuel></buy-fuel>
    </v-col>
    </v-row>
  </div>
</template>

<script>
import BuyFuel from "@/components/buttons/BuyFuel";

export default {
  components: {
    BuyFuel,
  },
};
</script>