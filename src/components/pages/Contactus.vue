<template>
  <div class="contact">
    <div class="row">
      <!-- <h3>contact</h3> -->
      <div class="col-md-6">
        <form>
          <h3>Countact Us</h3>
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Mobile No</label>
            <input type="number" class="form-control" />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea class="form-control"></textarea>
          </div>
          <div class="my-3">
            <button class="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <div class="box">
          <h5>Connecting with us</h5>
          <div class="info">
            <address>
              House No:40, Road No:01, <br />
              Block:#E, Bonosree<br />
              Rampura, Dhaka.<br />
              House No:40, Road No:01, <br />
              Block:#E, Bonosree<br />
              Rampura, Dhaka.
            </address>
          </div>
          <div class="info">
            <ul>
              <li><i class="fa fa-envelope-o" aria-hidden="true"></i></li>
              <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
              <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
              <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
    window.scrollTo(0, 0);
  },
}
</script>

<style scoped>
.contact {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.contact .row {
  width: 100%;
  height: 100%;
  padding: 10px;
  /* margin: 0; */
  margin-top: 100px;
}
.row .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.col-md-6 form {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0;
  background: rgba(255, 255, 255, 0.548);
  border: 10px solid rgb(20, 107, 141);
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
}
.col-md-6 form h3 {
  font-size: 1.8rem;
  font-weight: 700;
  font-family: "Lobster", cursive;
  letter-spacing: 1px;
  text-align: center;
  padding: 5px;
  margin: 5px;
}
.col-md-6 form label {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
  margin: 5px;
}
.col-md-6 form .form-control {
  border: 1px solid #000;
}

.col-md-6 .box {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 100px;
  display: block;
  background: linear-gradient(to top, rgb(66, 8, 141), rgb(20, 107, 141));
  /* background:rgb(214, 211, 211); */
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.col-md-6 .box h5 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  font-family: "Lobster", cursive;
  letter-spacing: 1px;
  color: #fff;
  padding: 5px;
  margin: 5px;
}
.col-md-6 .box .info {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
}
.col-md-6 .box .info address {
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;
  color: #000;
}
.col-md-6 .box .info ul {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.col-md-6 .box .info ul li {
  padding: 5px;
  margin: 5px;
  list-style: none;
}
.col-md-6 .box .info ul li i {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  color: rgb(66, 8, 141);
  font-size: 2rem;
  font-weight: 700;
  padding: 10px;
  margin: 5px;
}
.col-md-6 .box .info ul li i:hover {
  background: rgb(66, 8, 141);
  color: #fff;
}
</style>