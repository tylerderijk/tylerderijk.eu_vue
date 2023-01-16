<template>
  <div class="container overlay block--about">
    <div class="block--about-text">
      <h3 class="text-success">Who is this guy? 🤔</h3>
      Hi, my name is Tyler.
      I am a 22-year-old who specializes in programming in disparate digital fields.<br><br>
      In my past experience as a developer I've worked on different
      sized projects ranging from <i>enterprise web applications</i> to personal <i>Raspberry Pi</i> projects.
    </div>
    <div class="block--about-image"></div>
  </div>
</template>

<script>
export default {
  name: "WhoIsThisGuy"
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
@media screen and (max-width: 965px) {
  .block--about {
    width: 90%;
    flex-direction: column;
    overflow: scroll;
    justify-content: flex-start;
  }
  .block--about-text {
    width: 100%;
  }
  .block--about-image {
    width: 100%;
  }
}
</style>