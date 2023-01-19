<template>
  <div class="container overlay block--about">
    <div class="block--about-text">
<!--      <h3 class="text-success">Work experience</h3>-->
      <ul class="timeline">
        <li>
          <h5><strong>Full-stack developer</strong></h5>
          <small class="float-right">Augustus 2021 - <i style="text-decoration: underline">current</i></small>
          <p>Started study <i class="text-success">Software Engineering</i> @Hogeschool van Amsterdam</p>
        </li>
        <li>
          <h5>Coffeecompany</h5>
          <small class="float-right">December 2021 - <i style="text-decoration: underline">current</i></small>
          <p>Barista</p>
        </li>
        <li>
          <h5>Cérclair Clothing</h5>
          <small class="float-right">March 2020 - Februari 2022</small>
          <p>CEO & Creative Director - 8 employees</p>
        </li>
      </ul>
    </div>
    <div class="block--about-text">
      <h4>&nbsp;</h4>
      <ul class="timeline">
        <li>
          <h5>Deen & Vomar supermarkt</h5>
          <small class="float-right">November 2018 - December 2021</small>
          <p>Hoofd Kassière</p>
        </li>
        <li>
          <h5>Spoedtest</h5>
          <small class="float-right">April 2021 - October 2021</small>
          <p>Corona tester</p>
        </li>
        <li>
          <h5>Albert Heijn</h5>
          <small class="float-right">January 2014 - July 2017</small>
          <p>Verkoopmedewerker</p>
        </li>
      </ul>
    </div>

<!--    <div class="block&#45;&#45;about-image"></div>-->
  </div>
</template>

<script>
export default {
  name: "WorkExperience"
}
</script>

<style scoped>

h5 {
  margin-bottom: 0;
}
strong {
  color: rebeccapurple;
}
ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: ' ';
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: ' ';
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #22c0e8;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
.block--about {
  align-items: center;
  max-height: 500px;
  min-height: 400px;
  flex-direction: row;
  width: 60%;
}

.block--about-text {
  padding: 40px;
  flex: 1;
  width: 45%;
  /*min-width: 50%;*/
  font-size: 18px;
  min-height: auto;
}

.block--about-image {
  filter: saturate(0%);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /*background: url(../img/nick.jpg) calc(50% + 1px) bottom no-repeat;*/
  background: url("../assets/img/LinkedInfotoTyler-Transparant.png") calc(50% + 1px) bottom no-repeat;
  min-height: 400px;
  background-size: 400px;
  min-width: 40%;
  width: 40%;
  flex: 1;
}
@media screen and (max-width: 1140px) {
  .block--about {
    width: 90%;
    overflow: scroll;
  }
  h4 {
    display: none;
  }
  h3 {
    margin-top: 10px;
    height: fit-content;
  }
  div.block--about-text {
    width: 100%;
    padding: 0 10px 0 10px;
    transform: translateY(30%);
  }
  ul.timeline > li:before {
  }
  ul.timeline > li {
    padding-left: 15px;
  }
  ul.timeline {
    height: auto;
    margin-top: 50px;
  }
  .container {
    flex-direction: column;
  }
  h3 {
    position: fixed;
    top: 0;
  }
}
</style>