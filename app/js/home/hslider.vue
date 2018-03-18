 <template lang="html">
  <article class="">
    <slider :items='items' :cname='$style.slider'/>
    <section :class="$style.list">
        <div :class="$style.item" v-for="item in enters" :key="item.src">
          <router-link :to="{ name: item.href}">
            <img :src="item.src" alt="">
            <h4>{{item.title}}</h4>
          </router-link>
        </div>
    </section>
  </article>
</template>

<script>
import slider from '../core/slider.vue';

export default {
  components: { slider },
  data() {
    return {
      items: [
        { href: 'home', src: '//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg' },
        { href: 'home', src: '//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg' },
        { href: 'home', src: '//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg' }
      ],
      enters: [
        { href: 'home', src: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png', title: '优惠券' },
        { href: 'home', src: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png', title: '领红包' },
        { href: 'home', src: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png', title: '抢钢镚' },
        { href: 'home', src: '//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png', title: '领京豆' },
        { href: 'home', src: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png', title: '白条提额' }
      ]
    };
  }
};

</script>

<style lang="scss" module>
@import '../../css/element.scss';

.slider{
  margin-top: 120px;
  img{
    width: 100%;
  }
}
.list{
  @include list(row);
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a{
    text-decoration: none;
  }
  .item{
    text-align: center;
    img{
      display: inline-block;
      outline: none;
      width: 90px;
      height: 90px
    }
    h4{
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>
