<template>
  <div class="navigation">
    <nav>
      <a href="#">
        <h1>Vet-Executive</h1>
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
            >About
            <hr
          /></router-link>
        </li>
        <li>
          <router-link to="/newes"
            >Newes
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
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.navigation {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  position: fixed;
  z-index: 999;
}
.navigation nav {
  width: 100%;
  height: 100px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to top, rgb(21, 4, 44), rgb(61, 48, 78));
}
nav a {
  width: 40%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
}
nav a h1 {
  font-size: 3.5rem;
  font-weight: 700;
  font-family: "Alfa Slab One", cursive;
  padding: 0;
  margin: 0;
  color: rgb(117, 14, 66);
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
  font-weight: 500;
  margin: 0;
  padding:0;
  display: inline;
  text-decoration: none;
  color: #fff;
  font-family: "Poppins", sans-serif;
}
ul li a hr {
  width: 100%;
  height: 2px;
  visibility: hidden;
  border-radius: 3%;
  background: #fff;
}
nav ul li a:hover hr {
   width: 100%;
  height: 2px;
  visibility: visible;
  border-radius: 5%;
  animation: square 1s;
}
nav ul li a.router-link-exact-active hr{
       width: 100%;
  height: 2px;
  visibility: visible;
  border-radius: 10%;
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