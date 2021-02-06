<template>
     <v-container style="height: 600px;">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col cols="6">
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
  <h1>Success!~</h1>
          <v-img src="@/assets/5288-05.png">

          </v-img>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
 const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
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
            }, 2000);
        }
    }
}

</script>