<template>
  <div class="registration">
    <div class="row">
      <h3>Registration Form</h3>
      <div class="col-md-12">
        <div class="box">
          <form>
            <div class="form-group">
              <label>Name</label>
              <input class="form-control" type="text" v-model="lname" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="text" v-model="lemail" />
            </div>
            <div class="form-group">
              <label>Mobile Personal</label>
              <input class="form-control" type="number" v-model="lmobile" />
            </div>
            <div class="form-group">
              <label>Mobile Official</label>
              <input class="form-control" type="number" v-model="lomobile" />
            </div>
            <div class="form-group">
              <label>National Id</label>
              <input class="form-control" type="number" v-model="lid" />
            </div>
            <div class="form-group">
              <label>National Id</label>
              <textarea class="form-control" v-model="laddress"></textarea>
            </div>
            <div class="form-group">
              <label>University </label>
              <input class="form-control" type="text" v-model="leducation" />
            </div>
            <div class="form-group">
              <label>Current Status</label>
              <input class="form-control" type="text" v-model="lstatus" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input class="form-control" type="password" v-model="lpassword" />
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input
                class="form-control"
                type="password"
                v-model="lcpassword"
              />
            </div>
            <div class="my-3">
              <button class="btn btn-primary">
                <router-link to="/pamentm">Submit</router-link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      persons: [],
      person: {
        lname: "",
        lemail: "",
        lmobile: "",
        lomobile: " ",
        lid: "",
        laddress: "",
        leducation: "",
        lstatus: "",
        lpassword: "",
        lcpassword: "",
      },
    };
  },

  methods: {
    onPayment() {
      this.showModal = true;
    },
    onClose() {
      this.showModal = false;
    },
    onPay() {},
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.registration {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.registration .row {
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
  width: 70%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  background: rgb(224, 221, 221);
  border-radius: 10px;
}
.col-md-12 .box form {
  width: 100%;
  height: 100%;
  padding: 20px;
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
.col-md-12 .box form .payment {
  width: 200px;
  height: 50px;
  background: rgb(61, 48, 78);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 1;
  /* transition: 0.6s opacity ease-out; */
}
.col-md-12 .box form .payment:hover {
  opacity: 0.9;
  color: rgba(0, 0, 0, 0.979);
  /* transition: 0.6s opacity ease-out; */
}
.box form .btn a {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-decoration: none;
}
</style>