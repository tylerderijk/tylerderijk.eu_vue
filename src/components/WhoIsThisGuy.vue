<template>
  <div class="container overlay block--about">
    <div class="block--about-text">
      <h3 class="text-success">Who is this guy? 🤔</h3>
      Hi, my name is Tyler.
      I am a 22-year-old who specializes in programming in disparate digital fields.
      <span class="mobile">If you want to see what I look like, scroll down!</span>
      <br><br>
      In my past experience as a developer I've worked on different
      sized projects ranging from <i>enterprise web applications</i> to personal <i>Raspberry Pi</i> projects.
      <p><br>
         Feel free to add me on &nbsp;
        <a class="btn pushable btnSave" href="https://www.linkedin.com/in/tyler-de-rijk-639a45211/" target="_blank" style="background: mediumblue;" >
      <span class="front" style="background: dodgerblue">
        <i class="fa-brands fa-linkedin" style="color: white"></i>&nbsp; LinkedIn
      </span>
        </a>
      </p>
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
  background: url("../assets/img/LinkedInfotoTyler-Transparant.png") calc(50% + 1px) bottom no-repeat;
  min-height: 400px;
  background-size: 400px;
  min-width: 40%;
  width: 40%;
  flex: 1;
}

.btn {
  margin: 1.5rem 1rem 1rem 0;
  font-weight: bolder;
  box-shadow: inset 1px 1px 4px #222;
  -webkit-appearance: button;
  -moz-appearance: button;
  text-decoration: none;
  color: initial;
}

.btn:hover {
  color: #313131;
}

.pushable {
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
}

.front {
  display: block;
  padding: 7px 10px 7px 10px;
  border-radius: 12px;
  font-size: 1rem;
  color: white;
  transform: translateY(-6px);
}

.front:hover {
  color: #313131;
  transform: translateY(-4.5px);
}

.pushable:active .front {
  transform: translateY(-1px);
}

.mobile {
  display: none;
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
  .mobile {
    display: block;
  }
}
</style>