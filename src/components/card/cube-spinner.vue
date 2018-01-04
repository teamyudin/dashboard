<template>
  <div class="sk-folding-cube" style="visibility: hidden">
    <div class="sk-cube1 sk-cube"></div>
    <div class="sk-cube2 sk-cube"></div>
    <div class="sk-cube4 sk-cube"></div>
    <div class="sk-cube3 sk-cube"></div>
  </div>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      default: () => (0)
    }
  },

  mounted () {
    setTimeout(() => { this.$el.style.visibility = 'visible'; }, this.delay);
  }
};
</script>

<style lang="scss">
@import "../../assets/colors.scss";

$color: get-color('blue') !default;

@mixin prefix($prop, $val) {
  #{-ms- + $prop}: $val;
  #{-webkit- + $prop}: $val;
  #{$prop}: $val;
}

.sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  @include prefix(transform, rotateZ(45deg));
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  @include prefix(transform, scale(1.1));
}

.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color;
  @include prefix(animation, sk-foldCubeAngle 2.4s infinite linear both);
  @include prefix(transform-origin, 100% 100%);
}

.sk-folding-cube .sk-cube2 {
  @include prefix(transform, scale(1.1) rotateZ(90deg));
  &::before { @include prefix(animation-delay, 0.3s); }
}

.sk-folding-cube .sk-cube3 {
  @include prefix(transform, scale(1.1) rotateZ(180deg));
  &::before { @include prefix(animation-delay, 0.6s); }
}

.sk-folding-cube .sk-cube4 {
  @include prefix(transform, scale(1.1) rotateZ(270deg));
  &::before { @include prefix(animation-delay, 0.9s); }
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    @include prefix(transform, perspective(140px) rotateX(-180deg));
    opacity: 0;
  } 25%, 75% {
    @include prefix(transform, perspective(140px) rotateX(0deg));
    opacity: 1;
  } 90%, 100% {
    @include prefix(transform, perspective(140px) rotateY(180deg));
    opacity: 0;
  }
}
</style>
