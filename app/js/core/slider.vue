<template lang="html">
<section :class='cname'>
  <swiper :options="options">
    <swiperSlide v-for="item in items" :key="item.src">
      <router-link :to="{ name: item.href, params: {} }">
        <img :src="item.src" alt="">
      </router-link>
    </swiperSlide>
    <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
  </swiper>
</section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    cname: { type: String, default: '' },
    options: {
      type: Object,
      default() {
        return {
          lopp: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
          },
          notNextTick: false,
        };
      }
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss">
@import '~swiper/dist/css/swiper.css';

</style>
