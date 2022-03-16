<template>
  <div class="news">
    <div class="image">
      <img src="../../assets/image/gallery.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <!-- <h3>nwews</h3> -->
        <div class="col-md-8">
          <div class="container">
            <div class="row">
            <div class="col-md-6" v-for="gallery in gallerys" :key="gallery.id">
              <div class="card">
                <img :src="gallery.image" />
                <div class="overlay">
                  <h3>{{ gallery.name }}</h3>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h4>Catagory</h4>
          <ul>
            <li><router-link to="/">Picnic</router-link></li>
            <li><router-link to="/">Events</router-link></li>
            <li><router-link to="/">Exibitions</router-link></li>
            <li><router-link to="/">Image</router-link></li>
            <li><router-link to="/">Travel</router-link></li>
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
      gallerys: [
        {
          id: 1,
          name: "Picnic",
          image: require("../../assets/image/bkash.jpg"),
        },
        {
          id: 2,
          name: "Event",
          image: require("../../assets/image/bkash.jpg"),
        },
        { id: 3, name: "Tour", image: require("../../assets/image/bkash.jpg") },
        {
          id: 4,
          name: "Exibitions",
          image: require("../../assets/image/bkash.jpg"),
        },
        {
          id: 5,
          name: "Image",
          image: require("../../assets/image/bkash.jpg"),
        },
        {
          id: 6,
          name: "Travel",
          image: require("../../assets/image/bkash.jpg"),
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
.news {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.news .image {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
}
.news .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
}
.news .row {
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
.row .col-md-8 {
  width: 75%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.row .col-md-8 .row .col-md-6{
  width: 45%;
  padding:0;
  margin: 10px;
}
.row .col-md-8 .row .col-md-6 .card {
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.row .col-md-8 .row .col-md-6 .card img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
  transform: scale(1);
  transition: 0.3s transform ease-in;
}
.row .col-md-8 .row .col-md-6 .card .overlay {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  position: absolute;
  background: rgba(0, 0, 255, 0.267);
  opacity: 0;
}
.row .col-md-8 .row .col-md-6 .card .overlay h3 {
  position: absolute;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  left: 40%;
  top: 50%;
  font-family: "Playfair Display", serif;
}
.row .col-md-8 .row .col-md-6 .card:hover img {
  transform: scale(1.09);
  transition: 0.3s transform ease-out;
}

.row .col-md-8 .row .col-md-6 .card:hover .overlay {
  opacity: 1;
  transition: 0.4 all ease-out;
}

.col-md-4 {
  width: 25%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.col-md-4 h4 {
  font-size: 1.8rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
  text-align: center;
  font-family: "Lobster", cursive;
}
.col-md-4 ul {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 5px;
  background: #fff;
}
.col-md-4 ul li {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
  list-style: none;
}
.col-md-4 ul li a {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-decoration: none;
}
.col-md-4 ul li::before {
  content: "\27A3";
  font-size: 1.8rem;
  font-weight: 500;
  text-align: left;
  color: #000;
  padding: 5px;
  margin: 0;
}
</style>