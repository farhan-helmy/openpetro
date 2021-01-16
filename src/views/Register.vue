<template>
  <div>
    <top-bar></top-bar>
    <register-form></register-form>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";
import TopBar from "../components/TopBar";
export default {
  components: {
    RegisterForm,
    TopBar,
  },
};
</script>