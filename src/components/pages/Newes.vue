<template>
  <div class="newes">
    <div class="row">
      <!-- <h3>nwews</h3> -->
      <div class="col-md-8">
        <div class="box">
          <h2>title of the topic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur numquam incidunt doloremque tempore esse adipisci qui
            illum porro voluptate voluptatum ipsa vel nihil, sequi unde,
            molestiae nulla error, eius cum.
          </p>
          <router-link to="/">Read More...</router-link>
        </div>
        <div class="box">
          <h2>title of the topic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur numquam incidunt doloremque tempore esse adipisci qui
            illum porro voluptate voluptatum ipsa vel nihil, sequi unde,
            molestiae nulla error, eius cum.
          </p>
          <router-link to="/">Read More...</router-link>
        </div>
        <div class="box">
          <h2>title of the topic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur numquam incidunt doloremque tempore esse adipisci qui
            illum porro voluptate voluptatum ipsa vel nihil, sequi unde,
            molestiae nulla error, eius cum.
          </p>
          <router-link to="/">Read More...</router-link>
        </div>
        <div class="box">
          <h2>title of the topic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur numquam incidunt doloremque tempore esse adipisci qui
            illum porro voluptate voluptatum ipsa vel nihil, sequi unde,
            molestiae nulla error, eius cum.
          </p>
          <router-link to="/">Read More...</router-link>
        </div>
        <div class="box">
          <h2>title of the topic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur numquam incidunt doloremque tempore esse adipisci qui
            illum porro voluptate voluptatum ipsa vel nihil, sequi unde,
            molestiae nulla error, eius cum.
          </p>
          <router-link to="/">Read More...</router-link>
        </div>
        <div class="box">
          <h2>title of the topic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur numquam incidunt doloremque tempore esse adipisci qui
            illum porro voluptate voluptatum ipsa vel nihil, sequi unde,
            molestiae nulla error, eius cum.
          </p>
          <router-link to="/">Read More...</router-link>
        </div>

      </div>
      <div class="col-md-4">
        <h4>Catagory</h4>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>
            C
            <ul class="ul">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>
          <li>
            D
            <ul class="ul">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>
          <li>E</li>
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
}
</script>

<style scoped>
.newes {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.newes .row {
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
  margin: 5px;
}
.row .col-md-8 {
  width: 75%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.row .col-md-8 .box {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  box-shadow: -10px 2px 5px rgb(66,8,141);
  border-left: 20px solid rgb(20, 107, 141);
}
.col-md-8 .box h2 {
  padding: 5px;
  margin: 5px;
  font-size: 1.5rem;
  font-size: 500;
}
.col-md-8 .box p {
  font-size: 1rem;
  font-weight: 500;
  padding: 10px;
  margin: 0;
  text-align: justify;
}
.col-md-8 .box a{
  font-size: 1.2rem;
  font-weight: 500;
  color: blue;
  text-decoration: none;
  padding: 5px;
  cursor: pointer;
}
.col-md-8 .box a:hover{
  color: #000;
}
.col-md-4 {
  width: 25%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.col-md-4 h4 {
  font-size: 1.8rem;
  font-weight: 500;
  padding: 5px;
  margin: 0;
  text-align: center;
  font-family: "Lobster", cursive;
}
.col-md-4 ul {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 5px;
  background: #fff;
}
.col-md-4 ul li {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
  margin: 5px;
  list-style: none;
}
.col-md-4 ul li .ul{
  padding-left: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
}
.col-md-4 ul li::before {
  content: "\27A3";
  font-size: 1.8rem;
  font-weight: 500;
  text-align: left;
  color: #000;
  padding: 5px;
  margin: 0;
}
</style>