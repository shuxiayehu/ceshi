<template lang="html">
  <div>
    <Heador/>
    <Mslider/>
    <Sjm/>
    <Money/>
    <Lczx/>
    <Finance/>
    <Ad/>
    <Footor :class="$style.mfooter"/>
    <Navbar/>
  </div>
</template>

<script>
import Heador from '../public/header.vue';
import Footor from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Mslider from './mslider.vue';
import Sjm from './sjm.vue';
import Money from './money.vue';
import Lczx from './lczx.vue';
import Ad from './ad.vue';
import Finance from './finance.vue';

export default {
  components: {
    Heador,
    Mslider,
    Sjm,
    Money,
    Lczx,
    Finance,
    Ad,
    Footor,
    Navbar
  }
};
</script>

<style lang="scss" module>
.mfooter{
  ul{
    li:first-child{
      display: none;
    }
  }
}
</style>
