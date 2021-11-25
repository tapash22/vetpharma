<template>
  <div class="events">
    <div class="row">
      <h3>events</h3>
      <div class="col-md-3">
        <h4>Notice board</h4>

      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-title">

          </div>
          <div class="card-body">

          </div>
          <div class="card-footer">

          </div>
        </div>

      </div>
      <div class="col-md-3">
        <h4>It's going on</h4>

      </div>
    </div>
  </div>
</template>

<style scoped>
.events {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin:0;
}
.events .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 100px;
  display: flex;
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
.row .col-md-3{
  width: 25%;
  height: 100%;
  padding:5px;
  margin: 0;
  background: #fff;
}

.row .col-md-3 h4{
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  padding: 5px;
  margin: 0;
}

.row .col-md-6{
  width: 50%;
  height: 100%;
  padding: 5px;
  margin: 0;
  background: rgba(255, 255, 255, 0.712);
}
</style>