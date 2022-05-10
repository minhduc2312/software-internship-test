<template lang="html">
  <div class='wrap__content'>
    <div class='tab__content' v-show='title===selectedTitle'>
        <slot ></slot>
      </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  props: ["title"],
  setup() {
    const selectedTitle = inject("selectedTitle");
    return {
      selectedTitle,
    };
  },
};
</script>

<style lang="css">
</style>

