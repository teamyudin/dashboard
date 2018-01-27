<template>
  <div>
    <div class="bamp-header-mock"/>
    <div class="bamp-header-bar"><span>Portfolio Details</span></div>
    <div class="breadcrumb-bamp">
      <a href="#">Due Diligence</a>
      <span>Detail</span>
    </div>
    <div id="glance-board" class="glance-canvas">
      <div class="glance-row">
          <portfolio-overview/>
      </div>
      <div class="glance-row">
          <risk-rating/>
      </div>
    </div>
    <div class="bamp-footer-mock"/>
  </div>
</template>

<script>
import portfolioOverview from './hints/portfolio-overview.vue';
import riskRating from './hints/risk-rating.vue';
import vuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
  components: {
    portfolioOverview,
    riskRating,
    vuePerfectScrollbar
  }
};
</script>

<style lang="scss">
@import "../assets/colors";
@import "../assets/glance";
@import "../assets/dashboard2.scss";

.glance-row {
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
  height: calc(30% - 10px);
  margin-bottom: 0px;
  display: block;
}

.glance-row:last-of-type {
  margin-bottom: 0;
}

#glance-board {
  min-width: 1200px;
  overflow: hidden;
  top: 155px;
  bottom: 45px;
  padding: 9px 12px;
}


#glance-board .glance {
  width: calc(33% - 4px);
  display: inline-block;
  margin-right: 5px;

  &:last-of-type {
    margin-right: 0;
  }
}

#glance-board .glance.smaller {
  width: calc(16% + 1px);
  &:first-of-type { margin-right: 10px; }
}


@media screen and (max-width: 1500px) {
  #glance-board .glance.smaller {
    width: 15.75%;
    min-width: 10%;
    &:last-of-type {
      position: absolute;
      right: 2px;
    }
  }
}

@mixin colorize-glance($color) {
  ::selection, .el-card__header {
    background-color: get-color('#{$color}');
  }
  .el-card__header {
    border-color: get-color('#{$color}');
  }
}

.scrollable-content {
  position: relative;
  margin: auto;
  height: 91vh;
  width: 100%;
}
</style>
