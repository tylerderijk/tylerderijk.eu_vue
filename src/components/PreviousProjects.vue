<template>
  <div class="container overlay block--about">
    <Carousel ref="myCarousel" :autoplay="4000" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";

const myCarousel = ref();
export default {
  name: "PreviousProject",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    const slideToBeginning = () => myCarousel.value.slideTo(0);
    return {
      slideToBeginning
    };
  },
  mounted() {
      console.log(myCarousel.value)},
  unmounted() {},
  methods: {
  },
};
</script>

<style scoped>
.gallery {
  background: #eee;
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

.container,
.overlay {
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

.carousel__item {
  /* min-height: 200px; */
  height: 44vh;
  width: 100%;
  background-color: mediumseagreen;
  color: #ffffff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>