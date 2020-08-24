<template>
  <div class="OE-container">
    <Nav />
    <div class="top">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="mail">
          <a-icon type="mail" />Navigation One
        </a-menu-item>
        <a-menu-item key="app" disabled>
          <a-icon type="appstore" />Navigation Two
        </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="setting" />Navigation Three - Submenu
          </span>
          <a-menu-item-group title="Item 1">
            <a-menu-item key="setting:1">Option 1</a-menu-item>
            <a-menu-item key="setting:2">Option 2</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="Item 2">
            <a-menu-item key="setting:3">Option 3</a-menu-item>
            <a-menu-item key="setting:4">Option 4</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-menu-item key="alipay">
          <a
            href="https://antdv.com"
            target="_blank"
            rel="noopener noreferrer"
          >Navigation Four - Link</a>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/nav.vue";
export default {
  name: "",
  props: "",
  components: { Nav },
  data() {
    return {
      current: ["mail"]
    };
  },
  methods: {}
};
</script>
<style scoped>
.OE-container .top {
  width: 90%;
  height: 80px;
  margin: 20px auto;
  background: #f6f6f6;
  border-radius: 20px;
  box-shadow: 0 0 4px;
}
</style>