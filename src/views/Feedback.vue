<template>
  <v-container fluid>
    <v-textarea
      v-model="feedback"
      clearable
      clear-icon="mdi-close-circle"
      label="feedback"
      value="This is clearable text."
    ></v-textarea>
    <v-btn class="white--text" color="deep-purple accent-4" @click="goSubmit">
      Submit
    </v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    feedback: "",
  }),
  methods: {
    goSubmit() {
      console.log(this.feedback);
      let feedback = this.feedback
      return new Promise((resolve, reject) => {
        axios({
          url: "http://192.168.0.139:3000/customers/feedback",
          data: { feedback },
          method: "POST",
        })
          .then((resp) => {
            console.log(resp.data);
            this.$router.push("thankyou");
            resolve(resp);
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