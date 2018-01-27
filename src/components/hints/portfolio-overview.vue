<template>
  <hint class="portfolio-overview">
    <div class="hint-title">
      <span class="section-name">Customer</span>
    </div>
    <div class="hint-body">
      <div class="hint-row">
        <span class="field">Name:</span>
        <span class="value">Dale Cooper</span>
      </div>
      <div class="hint-row">
        <span class="field">ID:</span>
        <span class="value">SSN 123456789</span>
      </div>
      <div class="hint-row">
        <span class="field">Customer Since:</span>
        <span class="value">Jan 01, 1990</span>
      </div>
    </div>
  </hint>
</template>

<script>
import hint from '../card/hint.vue';

export default {
  components: {
    hint
  }
};
</script>

<style lang="scss">
@import "../../assets/colors.scss";

$transition: color, border-color .2s ease-in-out;

.portfolio-overview.hint {
  ::selection {
    background-color: darken(get-color('gray-bg'), 5);
  }

  background-color: white;

  .hint-title {
    background-color: #ffffff;

    .portfolio-identifier {
      font-weight: 400;
    }
  }

  .hint-body {
    .hint-row {
       line-height: 24px;
       margin-bottom: 5px;
       font-size: 15px;
     }

    .field {
      font-weight: 500;
      margin-right: 5px;
    }

    .value { font-weight: 400; }
  }
}
</style>
