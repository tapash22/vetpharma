<template>
  <div class="navigation">
    <nav>
      <a href="#">
        <img src="../assets/image/logo.png" />
      </a>
      <ul>
        <li>
          <router-link to="/"
            >Home
            <hr
          /></router-link>
        </li>
        <li>
          <router-link to="/about"
            >TVE
            <hr
          /></router-link>
        </li>
        <li>
          <router-link to="/events"
            >Events
            <hr
          /></router-link>
        </li>
        <li>
          <router-link to="/membership"
            >Membership
            <hr
          /></router-link>
        </li>
        <li>
          <router-link to="/gallery"
            >Gallery
            <hr
          /></router-link>
        </li>
        <li>
          <router-link to="/contactus"
            >Contact us
            <hr
          /></router-link>
        </li>
        <li>
          <router-link to="/login"
            >Login
            <hr
          /></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Playfair+Display&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap");

.navigation {
  width: 100%;
  height: 100px;
  padding: 0;
  margin: 0;
}
.navigation nav {
  width: 100%;
  height: 100px;
  padding: 0;
  margin: 0;
    position: fixed;
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 0 10px rgb(1, 1, 58);
  z-index: 999;
  /* background: linear-gradient(to top, rgb(21, 4, 44), rgb(61, 48, 78)); */
}
nav a {
  width: 40%;
  height: 100%;
  padding: 5px;
  margin: 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
}
nav a img {
  width: 200px;
  height: 100%;
  padding: 5px;
  margin: 0;
}
nav ul {
  width: 60%;
  height: 100%;
  padding: 20px;
  margin: 5px;
  display: flex;
  justify-content: center;
}
nav ul li {
  padding: 10px;
  margin: 5px;
  list-style: none;
  justify-content: center;
}
nav ul li a {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  margin: 0;
  padding: 0;
  display: inline;
  text-decoration: none;
  color: #000;
  line-height: 50px;
}
ul li a hr {
  width: 100%;
  height: 2px;
  visibility: hidden;
  border-radius: 3%;
  background: #fff;
  padding: 0;
  margin: 0;
}
nav ul li a:hover hr {
  width: 100%;
  height: 2px;
  visibility: visible;
  border-radius: 5%;
  animation: square 1s;
  background: #fff;
}
nav ul li a.router-link-exact-active hr {
  width: 100%;
  height: 2px;
  visibility: visible;
  border-radius: 10%;
  background: #fff;
}

@keyframes square {
  0% {
    transform: translateX(-10%);
    width: 0%;
  }
  10% {
    transform: translateX(-10%);
    width: 10%;
  }
  100% {
    transform: translateX(0%);
  }
}
</style>