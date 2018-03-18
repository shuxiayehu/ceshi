<template lang="html">
  <Panel title="神卷满" :class="$style.panel">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png" alt="">
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
  img{ width:100%;height:230px}
}
</style>
