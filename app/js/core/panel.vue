<template lang="html">
<section :class='[panelclass,cname]'>
  <h4>-{{title}}-</h4>
  <slot/>
</section>
</template>

<script>
export default {
  props: { cname: { type: String, default: '' }, title: { type: String, default: '' } },
  data() {
    return { panelclass: 'panel' };
  }
};
</script>

<style lang="scss">
@import '../../css/element.scss';
.panel{
  @include panel;
}
</style>
