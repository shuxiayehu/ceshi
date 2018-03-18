<template lang="html">
<Panel title="更多福利" :class="$style.panel">
  <router-link :to="{ name: '', params: {} }">专享福利></router-link>
  <div :class="$style.content">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg" alt="">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg" alt="">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg" alt="">
  </div>
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
@import '../../css/element.scss';

.panel{
  position: relative;
  top: 0px;
  left: 0px;
  a{
    position:absolute;
    top: 0px;
    right: 20px;
    font-size: 28px;
    color: #999;
    height: 112px;
    line-height: 112px;
    text-decoration: none;
  }
  .content{
    @include flex(row);
    justify-content: space-around;
    padding-bottom: 60px;
    img{
      width: 33.333333%;
      height: 280px;
    }
  }
}
</style>
