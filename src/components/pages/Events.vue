<template>
  <div class="events">
    <div class="image">
      <img src="../../assets/image/ev.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h4>Notice board</h4>
          <ul>
            <li>
              Notice for members association this our finel dicision for
              vet_executive
            </li>
            <li>
              Notice for members association this our finel dicision for
              vet_executive
            </li>
            <li>
              Notice for members association this our finel dicision for
              vet_executive
            </li>
            <li>
              Notice for members association this our finel dicision for
              vet_executive
            </li>
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
              <h5>{{ gevent.title }}</h5>
            </div>
            <div class="card-body">
              <img :src="gevent.image" />
            </div>
            <div class="card-footer">
              <p>
                {{ gevent.des }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <h4>Up comming Events</h4>
          <ul>
            <li>
              make a plane for Vet-Executive make a plane for Vet-Executive make
              a plane for Vet-Executivmake a plane for Vet-Executive
            </li>
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
          image: require("../../assets/image/rocket.jpg"),
        },
        {
          id: 2,
          title: "Annual pricing event in 2020",
          des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nihil natus illum dolorem perferendis dicta vel expedita unde, tempora dolorum aperiam accusantium qui magnam eum ducimus, animi odit dolores velit.",
          image: require("../../assets/image/rocket.jpg"),
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
  padding: 0;
  margin: 0;
}
.events .image {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
}
.events .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
}
.events .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
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
  font-weight: 600;
  text-align: center;
  font-family: "Playfair Display", serif;
  padding: 5px;
  margin-top: 10px;
  border: 3px double rgb(66, 8, 141);
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
  box-shadow: 0 0 5px rgb(66, 8, 141);
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
}
.row .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 5px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.712);
  /* border-left: 1px solid black;
  border-right: 1px solid black; */
}
.col-md-6 .card {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: #fff;
  border-bottom: 1px solid black;
}
.col-md-6 .card .card-title {
  width: 100%;
  height: 20%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: left;
  background: #fff;
}
.card .card-title h5 {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  color: #000;
  padding: 0;
  margin: 0;
}
.card .card-body {
  width: 100%;
  height: 40%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.card .card-body img {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.card .card-footer {
  width: 100%;
  height: 40%;
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  border: none;
  background: #fff;
}
.card .card-footer p {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
}
</style>