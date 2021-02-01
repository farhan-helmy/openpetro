<template>
  <div>
    <top-bar></top-bar>
    <login-form></login-form>
  </div>
</template>
<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";
import TopBar from "@/components/TopBar.vue";

export default {
  name: 'login',
  components: {
    'login-form' : LoginForm,
    TopBar
  },
  
};
</script>
