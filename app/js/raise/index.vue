<template lang="html">
<div>
  <Heador/>
  <Rslider/>
  <Daily/>
  <Li/>
  <Welfare/>
  <Footer/>
  <Navbar/>
</div>
</template>

<script>
import Heador from '../public/header.vue';
import Rslider from './rslider.vue';
import Daily from './daily.vue';
import Li from './ln.vue';
import Welfare from './welfare.vue';
import Footer from '../public/footer.vue';
import Navbar from '../public/navbar.vue';

export default {
  components: {
    Heador,
    Rslider,
    Daily,
    Li,
    Welfare,
    Footer,
    Navbar
  }
};
</script>

<style lang="scss">

</style>
