<template>
  <div>
    <avatar-account></avatar-account>
    <logout-button></logout-button>
  </div>
</template>

<script>
import AvatarAccount from "@/components/avatar/AvatarAccount";
import LogoutButton from "@/components/buttons/Logout";
export default {
  components: {
    AvatarAccount,
    LogoutButton,
  },
};



</script>