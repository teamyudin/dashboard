<template>
  <el-card class="glance">
    <div class="header" slot="header">
      <span class="title"><slot name="title"/></span>
      <el-button size="small" type="text" class="expander" @click="toggle">
        <i class="fa fa-expand"/>
      </el-button>
    </div>
    <div :class="`glance-container ${mode}`">
      <spinner v-if="mode === modes.expanding"></spinner>
      <div v-else-if="mode === modes.expanded" class="expanded">
        <slot name="detail"/>
      </div>
      <div v-else class="collapsed">
        <slot name="summary"/>
      </div>
    </div>
  </el-card>
</template>

<script>
import spinner from './cube-spinner.vue';
require('web-animations-js');


const frame = base => ({ ...base, position: 'fixed', zIndex: 1000 });

export default {
  components: { spinner },

  data () {
    const modes = {
      collapsed: 'collapsed',
      expanding: 'expanding',
      expanded: 'expanded'
    };

    return { animation: null, glance: null, mode: modes.collapsed, modes };
  },

  props: {
    animationSpeed: {
      type: Number,
      default: () => 300
    },

    containerId: {
      type: String,
      required: true
    }
  },

  mounted () {
    this.glance = this.getDomRect(this.$el);
  },

  methods: {
    collapse () {
      this.mode = this.modes.collapsed;

      let container = this.getContainer();

      let collapse = this.$el.animate([
        frame({ ...this.getContainer() }),
        frame({ ...this.glance })
      ], { duration: this.animationSpeed * 0.8, fill: 'none' });

      collapse.onfinish = () => {
        if (this.animation) { this.animation.cancel(); }

        collapse.cancel();
      }
    },

    expand () {
      let container = this.getContainer();

      this.mode = this.modes.expanding;

      this.animation = this.$el.animate([
        frame({ ...this.glance, transform: 'translate(0, 0)' }),
        frame({ ...container }),
        frame({ ...container, transform: 'none', easing: 'ease-out' }),
        frame({ ...container, transform: 'none' })
      ], { duration: this.animationSpeed, fill: 'forwards' });

      this.animation.onfinish = () => { this.mode = this.modes.expanded; };
    },

    getDomRect (el) {
      const rect = el.getBoundingClientRect();

      return ["top", "right", "bottom", "left", "height", "width"]
             .reduce((result, key) => Object.assign({
               [key]: `${rect[key]}px`
             }, result), {});
    },

    getContainer () {
      return this.getDomRect(document.getElementById(this.containerId));
    },

    toggle () {
      if (window && window.getSelection) {
        window.getSelection().removeAllRanges();
      }

      if (this.mode === this.modes.collapsed) {
        this.expand();
      } else {
        this.collapse();
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/glance.scss";
</style>
