<template>
  <v-main>
    <div class="loader"></div>
  </v-main>
</template>

<style scoped>
.loader {
  margin: auto ;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid rgb(126, 126, 236);
  border-right: 16px solid rgb(3, 30, 104);
  border-bottom: 16px solid rgb(48, 235, 210);
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>