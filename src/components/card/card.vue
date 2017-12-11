<template>
  <el-card class="box-card" style="height:100%;">
    <div slot="header" class="clearfix">
      <span >{{name.toUpperCase()}}</span>
    </div>
    <slot name="body">
      <div v-for="o in 4" :key="o" class="text item">
        {{'List item ' + o }}
      </div>
    </slot>

  </el-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Card name'
    },
    config: {
      type: Object,
      default: () => ({
        headerBackgroundColor: '#46b567'
      })
    }
  }
}
</script>

<style>
  .text {
      font-size: 14px;
    }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

.el-card .el-card__header{
  background-color: #46b567;
  color: white
}

</style>
