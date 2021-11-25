<template>
  <div class="footer">
    <div class="row">
      <div class="col-12">
        <div class="box">
          <h3>Vet-Executive</h3>
          <ul>
            <li>
              <router-link to="/">Home </router-link>
            </li>
            <li>
              <router-link to="/about">About </router-link>
            </li>
            <li>
              <router-link to="/newes">Newes </router-link>
            </li>
            <li>
              <router-link to="/events">Events </router-link>
            </li>
            <li>
              <router-link to="/contactus">Contact us </router-link>
            </li>
            <li>
              <router-link to="/login">Login </router-link>
            </li>
          </ul>
          <div class="first">
            <ul>
              <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
              <li><i class="fa fa-envelope-o" aria-hidden="true"></i></li>
              <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
            </ul>
          </div>
        </div>
        <div class="bottom">
            <p>All right reserved in &copy;Ultrawave.Digital</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.footer .row {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgb(61, 48, 78);
  display: flex;
  justify-content: center;
}
.row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.col-md-12 .box {
  width: 80%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.box h3 {
  font-size: 1.5em;
  font-weight: 700;
  font-family: "Lobster", cursive;
  letter-spacing: 1px;
  padding: 5px;
  margin: 5px;
  text-align: center;
  color: #fff;
}
.box ul {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: rgb(21, 4, 44);
}
.box ul li {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.box ul li a {
  font-size: 1rem;
  font-weight: 500;
  color: #f9f9fc;
  text-align: center;
  padding: 5px;
  margin: 5px;
}
.box .first {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.box .first ul {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.box .first ul li {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background: #fff;
  text-align: center;
  padding: 5px;
  margin: 10px;
  list-style: none;
  transition: 0.3s all ease-out;
}
.box .first ul li i {
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: auto;
  margin: auto;
}
.box .first ul li:hover {
   background: #123456;
  transition: 0.3s all ease-out;
}
.col-md-12 .bottom{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}
.bottom p{
    font-size: 0.8rem;
    font-weight: 500;
    padding: 5px;
    margin: 5px;
    text-align: center;
    color: rgb(204, 100, 15);
}
</style>