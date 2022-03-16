<template>
  <div class="payment">
    <div class="row">
      <h3>Payment Method</h3>
      <div class="col-md-12">
        <div class="box">
          <ul>
            <li><img src="../../assets/image/rocket.jpg" /></li>
            <li>
              <input
                class="form-control"
                type="number"
                v-model="rocket"
                placeholder="enter your number"
              />
            </li>
            <li>
              <button class="btn btn-success" @click.prevent="onRocket()">
                Send
              </button>
            </li>
          </ul>
          <ul>
            <li><img src="../../assets/image/bkash.jpg" /></li>
            <li>
              <input
                class="form-control"
                type="number"
                v-model="bkash"
                placeholder="enter your number"
              />
            </li>
            <li>
              <button class="btn btn-success" @click.prevent="onBkash()">
                Send
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" v-if="showMsg">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Vet-Executive</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click.prevent="onClose()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Congratulation!Name,<br/> New member of Vet-Executive</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMsg: false,
    };
  },

  methods: {
    onRocket() {
      this.showMsg = true;
    },
    onBkash() {
      this.showMsg = true;
    },
    onClose() {
      this.showMsg = false;
      this.$router.push("/");
    },
  },
  mounted(){
      window.scrollTop(0,0);
  }
};
</script>

<style scoped>
.payment {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.payment .row {
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
.row .col-md-12 .box {
  width: 60%;
  height: 100%;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
}
.box ul {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.box ul li {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 5px;
  display: flex;
  justify-content: center;
}
.box ul li img {
  width: 300px;
  height: 200px;
  padding: 5px;
  margin: 0;
}
.box ul li .btn {
  margin-top: 10px;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
}
.box ul:first-child {
  border-right: 2px solid black;
}
.modal {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.486);
  display: flex;
  justify-content: center;
}
.modal .modal-content {
  width: 300px;
  height: 200px;
  padding: 0;
  margin-top: 50%;
}
.modal .modal-content .modal-header {
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
}
.modal-header .modal-title {
  font-size: 1.8rem;
  font-weight: 500;
  font-family: "Lobster", cursive;
  padding: 5px;
  margin: 5px;
}
.modal-header .close {
  width: 50px;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #000;
}
.modal-header .close span {
  font-size: 2.2rem;
  font-weight: 700;
  padding: auto;
  margin: auto;
  color: #fff;
}
</style>