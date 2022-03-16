<template>
<div id="app">
  <Navigation />
  <div class="intro">
    <router-view></router-view>
  </div>
  <Footer/>
</div>
</template>

<script>
import Navigation from "./services/Navigation.vue";
import Footer from "./services/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style scoped>
#app{
  padding:0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.intro{
  width: 100%;
  height: 100%;
  padding: 0;
  margin:0;
}
</style>






