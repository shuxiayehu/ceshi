<template lang="html">
<Panel :class="$style.panel">
  <swiper :options="options" :class="$style.swiper">
    <swiperSlide>百万白条券免费送，速来领取！！ <em>></em></swiperSlide>
    <swiperSlide>签到领流量，1元500M！<em>>></em></swiperSlide>
  </swiper>
</Panel>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Panel from '../core/panel.vue';

export default {
  components: {
    Panel,
    swiper,
    swiperSlide
  },
  data() {
    return {
      options: {
        autoplay: true,
        loop: true,
        direction: 'vertical',
      }
    };
  }
};
</script>
<style lang="scss">
.swiper-slide{
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #333;
  em{
    color: #ddd;
    float: right;
    margin-right: 20px;
  }
}
</style>

<style lang="scss" module>
@import '../../css/element.scss';

.panel{
  margin-top: 120px!important;
  padding-left: 178px !important;
  background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
  >h4{
    display: none;
  }
  .swiper{
    height: 72px;
    line-height: 72px;
    overflow: hidden;
  }
}
</style>
