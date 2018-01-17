<template>
  <div>
    <div class="bamp-header-mock"/>
    <div class="bamp-header-bar"><span>Portfolio Details</span></div>
    <div class="breadcrumb-bamp">
      <a href="#">Due Diligence</a>
      <span>Detail</span>
    </div>
    <div id="glance-board">
      <div class="dd-identifier-header">
        <span class="dd-name">Dale Cooper</span>
        <span class="dd-subheader"/>SSN 123456789</span>
      </div>
      <div class="glance-row">

      </div>

      <div class="glance-row">
        <glance container-id="glance-board" :animation-speed="300">
          <div slot="title">Portfolio Review</div>
        </glance>
        <glance container-id="glance-board" :animation-speed="300">
          <div slot="title">Accounts</div>
        </glance>
        <glance container-id="glance-board" :animation-speed="300">
          <div slot="title">Customers</div>
        </glance>
      </div>

      <div class="glance-row">
        <glance container-id="glance-board" :animation-speed="300">
          <div slot="title">Portfolio Questions</div>
        </glance>
        <glance container-id="glance-board" :animation-speed="300">
          <div slot="title">Account Questions</div>
        </glance>
        <glance class="smaller" container-id="glance-board" :animation-speed="300">
          <div slot="title">Comments</div>
        </glance>
        <glance class="smaller" container-id="glance-board" :animation-speed="300">
          <div slot="title">Documents</div>
        </glance>
      </div>
    </div>
    <div class="bamp-footer-mock"/>
  </div>
</template>

<script>
import vuePerfectScrollbar from 'vue-perfect-scrollbar';
import glance from './card/glance.vue';

export default {
  components: {
    glance,
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
  margin-bottom: 10px;
  display: block;
}

.glance-row:last-of-type {
  margin-bottom: 0;
}

#glance-board {
  min-width: 1200px;
  overflow: hidden;
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

}

#glance-board .glance.smaller:first-of-type {
  margin-right: 10px;
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
