<template>
  <div class="events">
    <div class="row">
      <!-- <h3>events</h3> -->
      <div class="col-md-3">
        <h4>Notice board</h4>
        <ul>
          <li>Notice for members association this our finel dicision for vet_executive</li>
          <li>Notice for members association this our finel dicision for vet_executive</li>
          <li>Notice for members association this our finel dicision for vet_executive</li>
          <li>Notice for members association this our finel dicision for vet_executive</li>
          <li>Notice for members association</li>
          <li>Notice for members association</li>
          <li>Notice for members association</li>
          <li>Notice for members association</li>
          <li>Notice for members association</li>
          <li>Notice for members association</li>
          <li>Notice for members association</li>
          <li>Notice for members association</li>
        </ul>
      </div>
      <div class="col-md-6">
        <div class="card" v-for="gevent in groupEvent" :key="gevent.id">
          <div class="card-title">
            <h5>{{ gevent.title}}</h5>
          </div>
          <div class="card-body">
            <img :src="gevent.image"/>
          </div>
          <div class="card-footer">
            <p>
              {{gevent.des}}
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <h4>Up comming Events</h4>
        <ul>
          <li>make a plane for Vet-Executive make a plane for Vet-Executive make a plane for Vet-Executivmake a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
          <li>make a plane for Vet-Executive</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupEvent: [
        {
          id: 1,
          title: "Annual pricing event in 2021",
          des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nihil natus illum dolorem perferendis dicta vel expedita unde, tempora dolorum aperiam accusantium qui magnam eum ducimus, animi odit dolores velit.",
          image: require('../../assets/image/rocket.jpg'),
        },
        {
          id: 2,
          title: "Annual pricing event in 2020",
          des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nihil natus illum dolorem perferendis dicta vel expedita unde, tempora dolorum aperiam accusantium qui magnam eum ducimus, animi odit dolores velit.",
          image: require('../../assets/image/rocket.jpg'),
        },
      ],
    };
  },

    mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&display=swap");

.events {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
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
.row .col-md-3 {
  width: 25%;
  height: 100%;
  padding: 5px;
  margin: 0;
  background: #fff;
}

.row .col-md-3 h4 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  font-family: "Poppins", sans-serif;
  padding: 5px;
  margin: 0;
  border: 1px dotted green;
}
.col-md-3 ul {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.col-md-3 ul li {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  list-style: none;
  box-shadow: -5px 5px 5px rgb(66,8,141);

  /* border: 1px dotted rgb(66, 8, 141); */
}
/* .col-md-3 ul li:nth-child(1) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: black;
}
.col-md-3 ul li:nth-child(2) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: red;
}
.col-md-3 ul li:nth-child(3) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: green;
}
.col-md-3 ul li:nth-child(4) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: blue;
}
.col-md-3 ul li:nth-child(5) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: yellow;
}
.col-md-3 ul li:nth-child(6) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: violet;
}
.col-md-3 ul li:nth-child(7) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: skyblue;
}
.col-md-3 ul li:nth-child(8) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: white;
}
.col-md-3 ul li:nth-child(9) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: pink;
}
.col-md-3 ul li:nth-child(10) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: orange;
}
.col-md-3 ul li:nth-child(11) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: gold;
}
.col-md-3 ul li:nth-child(12) {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: silver;
} */

.row .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 5px;
  margin: 0;
  background: rgba(255, 255, 255, 0.712);
  border-left: 1px dotted black;
  border-right: 1px dotted black;
}
.col-md-6 .card{
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: #fff;
  border: none;
  border-bottom: 1px solid black;
}
.col-md-6 .card .card-title{
  width: 100%;
  height: 20%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: left;
  background: #fff;
}
.card .card-title h5{
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  padding: 0;
  margin: 0;
}
.card .card-body{
  width: 100%;
  height: 40%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.card .card-body img{
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.card .card-footer{
  width: 100%;
  height: 40%;
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  border: none;
  background: #fff;
}
.card .card-footer p{
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;

}
</style>