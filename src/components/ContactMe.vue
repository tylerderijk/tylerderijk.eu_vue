<template>
  <div class="container overlay block--about">
    <div class="block--about-text">
<!--      <h3 class="text-success mt-4">Contact me 🗞️</h3>-->
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Platform</th>
          <th scope="col">@Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><i class="fa-brands fa-linkedin" style="color: blue"></i> LinkedIn <small>(Fastest response)</small></td>
          <td><a target="_blank" href="https://www.linkedin.com/in/tyler-de-rijk-639a45211/">Tyler de Rijk</a></td>
        </tr>
        <tr>
          <td><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.404 7.06 12 11.859l9.596-4.797A2.4 2.4 0 0 0 19.2 4.8H4.8a2.4 2.4 0 0 0-2.396 2.26Z"></path>
            <path d="m21.6 9.742-9.6 4.8-9.6-4.8V16.8a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4V9.742Z"></path>
          </svg> E-Mail</td>
          <td><a target="_blank" href="mailto:tylerderijk@icloud.com">tylerderijk@icloud.com</a></td>
        </tr>
        <tr>
          <td><i class="fa-brands fa-square-github" style="color: darkblue"></i> GitHub</td>
          <td><a target="_blank" href="https://github.com/tylerderijk">tylerderijk</a></td>
        </tr>
        <tr>
          <td><i class="fa-brands fa-square-instagram" style="color: deeppink"></i> Instagram</td>
          <td><a target="_blank" href="https://www.instagram.com/tylerderijk/">tylerderijk</a></td>
        </tr>
        <tr>
          <td><i class="fa-brands fa-square-facebook" style="color: royalblue"></i> Facebook</td>
          <td><a target="_blank" href="https://www.facebook.com/profile.php?id=100004645056643">Tyler de Rijk</a></td>
        </tr>
        </tbody>
      </table>
    </div>
<!--    <div class="block&#45;&#45;about-image"></div>-->
  </div>
</template>

<script>
export default {
  name: "ContactMe"
}
</script>

<style scoped>
.block--about {
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
@media (max-width: 1210px) {
  .overlay {
    width: 90%;
  }
  .block--about-text {
    padding: 0;
  }
}
</style>