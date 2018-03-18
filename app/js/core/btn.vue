<template lang="html">
  <div :class="[btnclass,cname]">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    cname: { type: String, default: '' }
  },
  data() {
    return {
      btnclass: 'btn'
    };
  }
};
</script>

<style lang="scss">
// @import '../../css/element.scss';
// .btn{
//   @include btn ;
// }
</style>
