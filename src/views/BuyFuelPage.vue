<template>
  <div>
    <div><the-header></the-header></div>

    <div>
      <choose-pump></choose-pump>
    </div>
  </div>
</template>

<script>
import ChoosePump from "@/components/forms/ChoosePump";
import TheHeader from "@/components/header/TheHeader";
export default {
  components: {
    ChoosePump,
    TheHeader,
  },
};
</script>