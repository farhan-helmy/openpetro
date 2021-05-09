<template>
    <v-container style="height: 600px;">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >   
        </v-col>
        <v-col cols="6">
          <v-img src="@/assets/5288-06.png"> 
          </v-img>
          <h3>THANK YOU FOR YOUR FEEDBACK! Doakan saya punya fyp </h3>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    mounted(){
        this.timeOut()
    },
    methods:{
        nextPage(){
            this.$router.push("home");
        },
        timeOut() {
            setTimeout(() => {
              this.nextPage();
            }, 3000);
        }
    }
}
</script>