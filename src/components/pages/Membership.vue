<template>
  <div class="membership">
    <div class="image">
      <img src="../../assets/image/member.jpg"/>
      <h1>Membership</h1>
    </div>
    <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h2>Eligibility Process</h2>
        <div class="box">
          <h3>Rule No 1</h3>
          <address>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
          </address>
        </div>
        <div class="box">
          <h3>Rule No 2</h3>
          <address>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
          </address>
        </div>
        <div class="box">
          <h3>Rule No 3</h3>
          <address>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
          </address>
        </div>
        <div class="box">
          <h3>Rule No 4</h3>
          <address>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
          </address>
        </div>
        <div class="box">
          <h3>Rule No 5</h3>
          <address>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            excepturi ullam veniam dolores! Doloribus corporis impedit, expedita
            eligendi fuga neque veniam ut consectetur, ullam nostrum minus sint
            ipsam, animi a.
          </address>
        </div>
      </div>
      <div class="col-md-2">
        <h2>Member Information</h2>
        <ul>
          <li><a href="#">Member list</a></li>
          <li><a href="#">Membership Form</a></li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>


<style scoped>
.membership {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.membership .image{
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
  position: relative;
}
.membership .image img{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  object-fit: cover;
}
.membership .image h1{
  position: absolute;
  font-size: 4rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;
  color: #fff;
  top: 40%;
  left: 10%;
  animation: member 5s linear infinite .4s;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 20px;
}
.row .col-md-10 {
  width: 75%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.row .col-md-10 h2 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 10px;
  margin: 0;
  text-align: center;
  position: relative;
}

.row .col-md-10 .box {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 5px;
  border-bottom: 2px solid rgb(1, 1, 44);
}
.row .col-md-10 .box h3 {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 20px;
  margin: 0;
}
.row .col-md-10 .box h3::before {
  content: "\27A3";
  position: absolute;
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: -25px;
  color: rgb(61, 24, 2);
}
.row .col-md-10 .box address {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: justify;
  font-family: "Playfair Display", serif;
}
.row .col-md-2 {
  width: 25%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.row .col-md-2 h2 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 10px;
  margin: 0;
  text-align: left;
}
.row .col-md-2 ul {
  display: block;
  padding: 5px;
  margin: 10px;
  width: 100%;
  height: 100%;
  border-left: 1px solid black;
}
.row .col-md-2 ul li {
  width: 100%;
  padding: 0;
  margin: 5px;
  list-style: lower-roman;
  display: flex;
  justify-content: center;
}
.row .col-md-2 ul li a {
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: center;
  padding: 5px;
  margin: 0;
}

@keyframes member{
  0%{
    opacity: 0;
    transform: scale(1);
  }
  80%{
    opacity: 1;
    transform: scale(1.5);
  }
  100%{
    opacity: 0.1;
    transform: scale(1.2);
  }
}
</style>