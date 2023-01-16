<template>
  <div class="container overlay block--about">
    <div class="block--about-text">
      <h3 class="text-success skills">My current skills <svg width="40" height="40" fill="mediumseagreen" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8 5.765A9.562 9.562 0 0 0 6.6 4.8a9.58 9.58 0 0 0-4.2.965v12a9.563 9.563 0 0 1 4.2-.965c2.003 0 3.862.612 5.4 1.662a9.554 9.554 0 0 1 5.4-1.662 9.58 9.58 0 0 1 4.2.965v-12a9.561 9.561 0 0 0-4.2-.965 9.58 9.58 0 0 0-4.2.965V14.4a1.2 1.2 0 1 1-2.4 0V5.765Z"></path>
      </svg></h3>
      <table class="table">
        <tbody>
        <tr>
          <td class="fs-italic">Vue.JS</td>
          <td class="underline">Springboot</td>
          <td class="underline">Java</td>
        </tr>
        <tr>
          <td>HTML</td>
          <td>CSS</td>
          <td>Javascript</td>
        </tr>
        <tr>
          <td>MySQL</td>
          <td>NoSQL</td>
          <td>Hibernate</td>
        </tr>
        <tr>
          <td>Cypress.io</td>
          <td>JavaFX</td>
          <td>And more!</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--    <div class="block&#45;&#45;about-image"></div>-->
  </div>
</template>

<script>
export default {
  name: "CurrentSkills"
}
</script>

<style scoped>
td {
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  border: none;
  padding: 20px;
}
td:hover {
  font-family: "Fredoka One", sans-serif;
  font-weight: 1000;
  transform: scale(1.1);
  /*padding: 15px;*/
  transition: all 200ms ease-in-out;
}
table {
  height: 100%;
}

.block--about {
  align-items: flex-start;
  max-height: 500px;
  min-height: 400px;
  flex-direction: row;
  width: 60%;
}

.block--about-text {
  padding: 40px;
  flex: 1;
  width: 50%;
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
@media screen and (max-width: 830px) {
  td {
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    padding: 0 !important;
  }
  .skills {
    text-align: center;
    /*display: none;*/
  }
  td:hover {
    transform: scale(1);
  }
  .block--about {
    width: 90%;
  }
}
</style>