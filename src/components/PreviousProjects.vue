<template>
  <div class="container overlay block--about">
  </div>
</template>

<script>
export default {
  name: "PreviousProject",
  data() {
    return {
    }
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {}
}
</script>

<style scoped>
.gallery {
  background: #EEE;
}

.gallery-cell {
  width: 66%;
  margin-top: 10px;
  height: 400px;
  margin-right: 10px;
  background: mediumseagreen;
  counter-increment: gallery-cell;
}

/* cell number */
.gallery-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}

.container, .overlay {
  position: relative;
  display: block;
}

.block--about {
  display: block;
  max-height: 550px;
  min-height: 450px;
  overflow: hidden;
}

@media screen and (max-width: 1140px) {
  .block--about {
    width: 90%;
  }
}
</style>