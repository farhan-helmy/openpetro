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
          Processing topup...
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="indigo darken-4"
            indeterminate
            rounded
            height="12"
          ></v-progress-linear>
          <v-img src="@/assets/5288-02.png">

          </v-img>
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
            this.$router.push("successtopup");
        },
        timeOut() {
            setTimeout(() => {
              this.nextPage();
            }, 3000);
        }
    }
}
</script>