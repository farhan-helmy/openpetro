<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
      <transition>
      <router-view></router-view>
      </transition>
      <footer-nav></footer-nav>
  </v-app>
</template>

<script>
import FooterNav from '@/components/FooterNav';
export default {
  components:{
    FooterNav
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>