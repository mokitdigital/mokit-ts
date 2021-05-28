<template>
  <div id="app" class="container-fluid over-x bg-dark">
    <topbar />
    <sidebar/>
    <router-view/>
    <footer-component />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from './constants/Sidebar.vue'
import Topbar from './constants/Topbar.vue'
import FooterComponent from './constants/Footer.vue'

export default Vue.extend({
  components: { Topbar, Sidebar, 'footer-component': FooterComponent }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

html, body {
  // background-color: #000 !important;
  font-family: 'Roboto', sans-serif !important;
  max-width: 100%;
}

.over-x {
  overflow-x: hidden;
}

.hf-100 {
  height: 100vh;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
</style>
