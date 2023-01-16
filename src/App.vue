<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
  margin: 0;
  font-family: 'Karla', sans-serif;
  color: black;
  box-sizing: border-box;
}
body {
  background-color: ivory;
  background-image: linear-gradient(ivory, #f6f6e7, #d3dac3);
  height: 100vh;
  width: 100vw;
  margin: 0;
}
.overlay {
  margin-top: 5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.53);
  border-radius: 50px;
  /*background: #e0e0e0;*/
  box-shadow:  20px 20px 60px #bebebe,
  -20px -20px 60px #e8e7d1;
  /*box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);*/
  /*border-radius: 2rem;*/
  /*border: 1px solid rgba(255, 255, 255, 0.125);*/
}
</style>
