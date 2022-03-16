<template>
  <div class="profile">
    <div class="row">
      <h3>profile</h3>
      <div class="col-md-12">
        <div class="box">
          <div class="left">
            <img src="../../assets/image/g.jpg" />
          </div>
          <div class="right">
            <ul>
              <li>
                <i class="fa fa-user" aria-hidden="true"></i>
                <p>Name</p>
              </li>
              <li>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <p>Email</p>
              </li>
              <li>
                <i class="fa fa-mobile" aria-hidden="true"></i>
                <p>+8801600000000</p>
              </li>
              <li>
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                <p>University name</p>
              </li>
              <li>
                <i class="fa fa-home" aria-hidden="true"></i>
                <p>Company name</p>
              </li>
              <li>
                <i class="fa fa-shield" aria-hidden="true"></i>
                <p>Current Status</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <h4>Address</h4>
        <div class="box2">
          <div class="left">
            <h5>Permanent Address</h5>
            <address>
              House No:40, Road No:01,<br />
              Block:#E, Bonosree,<br />
              Rampura,Dhaka.<br />
            </address>
          </div>
          <div class="right">
            <h5>Current Address</h5>
            <address>
              House No:40, Road No:01,<br />
              Block:#E, Bonosree,<br />
              Rampura,Dhaka.<br />
            </address>
          </div>
        </div>
      </div>

      <h3>Others</h3>

      <div class="intro">
        <ul>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ul>
        <ul>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ul>
      </div>
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
.profile {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.profile .row {
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
.row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.col-md-12 .box {
  width: 80%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  display: flex;
  border-bottom: 20px solid rgb(21, 4, 44);
}
.box .left {
  width: 30%;
  height: 300px;
  padding: 10px;
  margin: 10px;
}
.box .left img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.box .right {
  width: 70%;
  height: 300px;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.right ul {
  padding: 10px;
  margin: 5px;
  width: 100%;
  height: 100%;
}
.right ul li {
  list-style: none;
  display: flex;
  justify-content: left;
  padding: 5px;
  margin: 0;
}
.right ul li i {
  width: 40px;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 0;
}
.right ul li p {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 5px;
  margin: 0;
}
.col-md-8 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.col-md-8 h4 {
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Lobster", cursive;
  text-align: center;
  padding: 5px;
  margin: 5px;
}
.col-md-8 .box2 {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
}
.col-md-8 .box2 .left {
  width: 40%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.col-md-8 .box2 .right {
  width: 40%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.col-md-8 .box2 .right h5,
.col-md-8 .box2 .left h5 {
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
}
.col-md-8 .box2 .left address,
.col-md-8 .box2 .right address {
  font-size: 1.1rem;
  font-weight: 500;
  padding-left: 35%;
  margin: 0;
}
.row .intro{
  width: 80%;
  height: 100%;
  padding-left: 20%;
  margin: 0;
  display: flex;
  justify-content: center;

}
.row .intro ul{
  width: 50%;
  height: 100%;
  padding:10px;
  margin: 0;
  display: block;
}
.row .intro ul li{
  width: 100%;
  padding:5px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
    font-family: "Playfair Display", serif;
    list-style: none;
} 
</style>