<template>
  <hint :class="`risk-rating ${lowerCaseDescription}`" size="smaller">
    <div class="hint-title">
      <span class="section-name">Risk Rating</span>
    </div>
    <div class="hint-body">
      <strong class="risk-rating-emphasis">{{riskRating}}</strong>
    </div>
  </hint>
</template>

<script>
import hint from '../card/hint.vue';

export default {
  components: { hint },

  props: {
    riskRating: {
      type: String,
      default: () => ('Low')
    }
  },

  computed: {
    lowerCaseDescription () {
      return this.riskRating.toLowerCase();
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/colors";

$low: darken(get-color('green'), 5);

.risk-rating {
  &.hint {
    min-width: calc(455px / 3);
    text-align: center;
  }

  font-weight: 500;

  .hint-title {
    border-bottom: none;
  }

  .hint-body {
    padding-top: 0;
    border-top: none;
    padding-bottom: 12px;
    padding-left: 0;
  }

  &.low {
    border-color: $low;

    .hint-title {
      color: darken($low, 3);
    }

    .hint-body {
      border-bottom-color: $low;
    }

    .hint-body {
      color: $low;
    }
  }

  .risk-rating-emphasis {
    font-size: 24px;
    font-weight: 600;
    font-family: Montserrat, open-sans, sans-serif;
  }
}
</style>
