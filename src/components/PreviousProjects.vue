<template>
  <div class="container overlay block--about">
    <Carousel class="carousel" ref="myCarousel" :autoplay="0" :wrap-around="true" :itemsToShow="1">
      <Slide v-for="slide in this.previousProjectsSlides" :key="slide">
        <div class="carousel__item">
          <div class="slide__items">
            <div class="slide__items-image">
              <img :src="require(`../assets/img/${slide.image}.png`)" alt="">
              <small>{{ slide.alt[0] + ' - ' + slide.alt[1] }}</small>
            </div>
            <div class="slide__items-text">
              <h3>{{ slide.title }}</h3>
              <small>{{ slide.tools }}</small>
              <p>{{ slide.desc }}</p>
              <small>Client: {{ slide.client }}</small>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation/>
        <Pagination/>
      </template>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import previous_projects_slides from '../assets/js/previous_projects_slides';
import {ref} from "vue";

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
      slideToBeginning,
      previousProjectsSlides: previous_projects_slides
    };
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {},
};
</script>

<style scoped>
.container,
.overlay {
  position: relative;
  display: block;
  overflow: scroll;
}

.block--about {
  display: block;
  max-height: 550px;
  min-height: 450px;
}

h3 {
  color: mediumseagreen;
  font-weight: 600;
  margin: 0 11px 0;
}

small {
  padding-top: 0;
  margin-left: 15px;
}

.slide__items {
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  flex-direction: row;
  height: 100%;
}

.slide__items-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.slide__items-image {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  height: auto;
  /*width: clamp(40%, 46%, 60%);*/
}

.slide__items-image > img {
  width: 80%;
}

.slide__items-image > small {
  opacity: 50%;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
}

.slide__items > div {
  padding: 10px;
  width: auto;
}

.slide__items-text small:nth-child(2) {
  color: mediumpurple;
}

.slide__items p {
  margin: 15px;
  width: 80%;
}

.slide__items small {
  opacity: 80%;
}

.carousel__item {
  text-align: left;
  /* min-height: 200px; */
  height: 100%;
  width: 100%;
  padding: 20px;
  /*margin-top: 20px;*/
  color: #ffffff;
  font-size: 14px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay {
  overflow: hidden;
}


@media screen and (max-width: 1140px) {
  .block--about {
    width: 90%;
  }

  .overlay {
    overflow: scroll;
  }

  .carousel__item {
    align-items: center;
  }

  .slide__items {
    flex-direction: column;
    width: auto;
  }

  .slide__items p {
    width: 100%;
  }

  .slide__items-text {
    margin-bottom: 30px;
  }

  .slide__items-image > img {
    width: 100%;
  }
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