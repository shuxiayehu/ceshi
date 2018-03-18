<template lang="html">
  <article>
    <Slider :items="items" :cname="$style.slider" />
  </article>
</template>

<script>
import Slider from '../core/slider.vue';

export default {
  components: {
    Slider
  },
  data() {
    return {
      items: [
        { href: 'ious', src: '//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg' },
        { href: 'ious', src: '//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg' }
      ]
    };
  }
};
</script>

<style lang="scss" module>
  .slider{
    margin-top: 120px;
    img{
      width: 100%;
      height:350px;
    }
  }
</style>
