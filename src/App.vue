<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}" >
      <transition>
      <router-view></router-view>
      </transition>
      <span v-if="isLoggedIn && $route.name!=='buyfuel' && $route.name!=='logins' && $route.name!=='loading' && $route.name!=='register' && $route.name!=='invoiceview' && $route.name!=='topuppage' && $route.name!=='loadingtopup' && $route.name!=='successtopup'">
       <v-footer app>
      <footer-nav></footer-nav>
      </v-footer>
      </span>
  </v-app>
</template>

<script>
import FooterNav from '@/components/FooterNav';
import { mapGetters } from 'vuex';

export default {
  components:{
    FooterNav
  },
  computed:{
    ...mapGetters('auth',[
      'isLoggedIn'
    ]),
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