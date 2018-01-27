<template>
  <div :class="`hint ${size}`">
    <slot/>
  </div>
</template>

<style lang="scss">
@import "../../assets/hint.scss";
</style>

<script>
export default {
  props: {
    size: {
      type: String,
      default: () => 'standard'
    }
  }
};
</script>
