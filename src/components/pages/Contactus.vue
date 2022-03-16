<template>
  <div class="contact">
    <div class="image">
      <img src="../../assets/image/contact.jpg" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form>
            <h3>Contact Us</h3>
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
              <label>Subject</label>
              <input type="text" class="form-control" />
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
                House No: 66, Road No: 11, <br />
                DIT PROJECT<br />
                Merul-Badda, Dhaka.<br />
              </address>
            </div>
            <div class="info">
              <ul>
                <li>
                  <a href=""
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href=""
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href=""
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
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
};
</script>

<style scoped>
.contact {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.contact .image {
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
}
.contact .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
}
.contact .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 0;
  margin-top: 10px;
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
  font-weight: 600;
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
  text-align: center;
  padding: 5px;
  margin: 5px;
}
.col-md-6 form label {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
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
  margin-top: 150px;
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
  font-family: "Playfair Display", serif;
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
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
  color: #fff;
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
  margin: 10px;
  list-style: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
}
.col-md-6 .box .info ul li a {
  padding: 0;
  margin: 0;
}
.col-md-6 .box .info ul li a i {
  font-size: 1.8rem;
  font-weight: 900;
  padding: 5px;
  margin: 0;
  color: #fff;
}
</style>