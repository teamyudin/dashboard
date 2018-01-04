<template>
  <div id="glance-board">
    <glance container-id="glance-board" class="questionnaire" :animation-speed="250">
      <div slot="title"><div>Questionnaire</div></div>
      <div slot="summary">
        Summary
      </div>
      <div slot="detail">
        <el-table
         :data="tableData"
         style="width: 100%">
         <el-table-column
           prop="date"
           label="Date"
           width="180">
         </el-table-column>
         <el-table-column
           prop="name"
           label="Name"
           width="180">
         </el-table-column>
         <el-table-column
           prop="address"
           label="Address">
         </el-table-column>
       </el-table>
      </div>
    </glance>
  </div>
</template>

<script>
import glance from './card/glance.vue';

export default {
  data () {
    let tableData = [];

    for (let i = 0; i < 100; i++) {
      tableData.push({
        date: `${i}-2018`,
        name: `${i} Mc${i}siston`,
        address: `${i} ${i}st Street`
      });
    }

    return { tableData };
  },

  components: {
    glance
  }
};
</script>

<style lang="scss">
@import "../assets/colors";
@import "../assets/glance";

@mixin colorize-glance($color) {
  ::selection, .el-card__header {
    background-color: get-color('#{$color}');
  }
  .el-card__header {
    border-color: get-color('#{$color}');
  }
}

#glance-board {
  height: 90vh;
  width: auto;
  background-color: hsl(0, 0%, 96%);
  padding: 1%;
  position: relative;

  .glance {
     min-height: 200px;
     position: absolute;

     &.questionnaire {
       width: 600px;
       @include colorize-glance(teal);
     }
  }
}
</style>
