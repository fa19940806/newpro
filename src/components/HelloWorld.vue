<template>
  <div>
    <tabbar>
      <tabbar-item  link="/news">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/hh">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
    <!-- <router-link to="/news">新闻</router-link>
    <router-link>hh</router-link> -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";

export default {
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
}
</style>
