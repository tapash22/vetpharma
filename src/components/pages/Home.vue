<template>
  <div class="home">
    <div class="row">
      <h3>Home</h3>
      <div class="col-md-12"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.home .row {
  width: 100%;
  height: 100%;
  padding: 0;
  /* margin: 0; */
  margin-top: 100px;
}
.row h3 {
  font-size: 1.8rem;
  font-weight: 700;
  font-family: "Lobster", cursive;
  letter-spacing: 1px;
  text-align: center;
  padding: 5px;
  margin: 5px;
}
</style>