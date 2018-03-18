<template lang="html">
  <Panel title="理财专享" :class="$style.panel">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png" alt="">
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue';

export default {
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
.panel{
  >h4{display: none}
  img{
    width: 100%;
    height: 142px;
    display: block;
  }
}
</style>
