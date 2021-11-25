<template>
  <div class="login">
    <div class="row">
      <!-- <h3>Login</h3> -->
      <div class="col-md-12">
        <div class="box">
          <form>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="text" v-model="lemail" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input class="form-control" type="password" v-model="lpassword" />
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="onClick()">Login</button>
            </div>
            <div class="info">
              <p>
                For create account?<router-link to="/registration"
                  >Registration here</router-link
                >
              </p>
            </div>
          </form>
          <div class="image">
            <h2>
              Welcome<br />
              to<br />
              Vet-Executive
            </h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    onClick(){
      this.$router.push('/profile');
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.login .row {
  width: 100%;
  height: 100%;
  padding: 0;
  /* margin: 0; */
  margin-top: 100px;
}
.row h3 {
  font-size: 1.8rem;
  font-weight: 700;
  font-family: "Lobster", cursive;
  letter-spacing: 1px;
  text-align: center;
  padding: 5px;
  margin: 0;
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
  width: 60%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(to top, rgb(66, 8, 141), rgb(20, 107, 141));
  border-radius: 10px;
}
.col-md-12 .box form {
  width: 50%;
  height: 100%;
  padding: 40px;
  margin: 5px;
  background: #fff;
  border: 5px solid rgba(250, 249, 249, 0.493);
}
.col-md-12 .box form label {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
  font-family: "Lobster", cursive;
}
.col-md-12 .box form .info {
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
}
.col-md-12 .box form .info p {
  font-size: 1.2rem;
  font-weight: 500;
  color: black;
  font-family: "Lobster", cursive;
}
.col-md-12 .box form .info p a {
  font-size: 1.4rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
}
.col-md-12 .box .image {
  width: 50%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.box .image h2 {
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Lobster", cursive;
  letter-spacing: 1px;
  color: #fff;
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 20%;
  margin-bottom: 20%;
}
.box .image ul {
  padding: 0;
  margin:0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.image ul li {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
  margin: 5px;
  list-style: none;
  box-shadow: 2px -10px 10px rgb(255, 255, 255);
  transition: 0.5s box-shadow ease-out;
}
.image ul li:hover{
  box-shadow: none;
  transition: 0.3s box-shadow ease-out;
}

</style>