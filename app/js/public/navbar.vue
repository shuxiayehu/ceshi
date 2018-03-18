<template lang="html">
    <ul :class="$style.navflex">
      <li>
        <router-link :to="{ name: 'home', params: {} }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png" alt="">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'money', params: {} }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png" alt="">
          <p>理财</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ious', params: {} }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png" alt="">
          <p>白条</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'raise', params: {} }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png" alt="">
          <p>众筹</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'home', params: {} }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png" alt="">
          <p>我的</p>
        </router-link>
      </li>
    </ul>
</template>

<script>
export default {
};
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.navflex{
  @include flex(row);
  height: 100px;
  width: 100%;
  justify-content: space-around;
  background: #fff;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 100;
  li{
    text-align: center;
    a{
      text-decoration: none;
    }
    img{
      width: 44px;
      height: 44px;
      display: inline-block;
      margin: 12px auto 6px;
    }
    p{
      font-size: 22px;
      color: #656565;
    }
  }
}
</style>
