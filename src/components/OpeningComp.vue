<template>
  <div :class="{ 'disappear_animation': !this.showIpad, 'text-center hero mt-5': true}"
       @click="ipadPressed()">
    <img src="../assets/img/IPAD_LOS.png"
         class="heroIpad jiggle_animation"
         alt="Seems like not all images loaded...">
  </div>
  <div :class="{ 'disappear_animation': this.showIphone, 'text-center hero mt-5': true}"
       @click="iphonePressed()">
    <img src="../assets/img/IPHONE_LOS_V2.png"
         class="heroIphone jiggle_animation"
         :style="'display: '+this.displayIphone"
         alt="Seems like not all images loaded...">
  </div>
  <div class="text-center hero mt-5 fast">
    <small>Did you expect <br>something else?</small>
  </div>
  <div class="text-center hero">
    <h3 class="hero--text">Open the menu to begin!</h3>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: "OpeningComp",
  data() {
    return {
      showIpad: true,
      showIphone: false,
      displayIphone: 'none',
    }
  },
  beforeCreate() {

  },
  mounted() {
    this.showIpad = true;
    this.displayIphone = 'none';
    this.showIphone = false;
    anime({
      targets: '.fast',
      opacity: [0, 0, 0, 0, 1],
      duration: 6000,
    });
    anime({
      delay: 3500,
      targets: '.heroIpad',
      translateY: [-20, -20, 0],
      rotate: [0, 3, 0, 0],
      opacity: [0, 1, 1, 1],
      easing: 'easeInOutQuad',
      duration: 2200,
    });
    anime({
      delay: 500,
      targets: '.hero--text',
      opacity: [1, 1, 1, 1, 1, 1, 0],
      translateY: [1, 1, 1, 1, 1, 1, 120],
      // translateX: [20, 20],
      easing: 'easeInOutSine',
      duration: 3200,
    });
  },
  methods: {
    ipadPressed() {
      this.showIpad = !this.showIpad;
      this.displayIphone = 'block';
    },
    iphonePressed() {
      this.showIphone = !this.showIphone;
      this.showIpad = !this.showIpad;
      setTimeout(() => {
        this.displayIphone = 'none';
      }, 3000)
    }
  }
}
</script>

<style scoped>
.hero {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: visible;
}

.fast {
  opacity: 0;
  z-index: -5;
}

.hero--text {
  opacity: 1;
  z-index: -5;
  font-size: 22px;
}

.heroIpad {
  opacity: 0;
  height: 500px;
}

.heroIphone {
  height: 360px;
}

.disappear_animation {
  animation-name: disappear;
  animation-duration: 3s;
}

@keyframes disappear {
  100% {
    transform: translateX(500%);
    opacity: 0;
  }
}

.jiggle_animation {
  animation-name: jiggle;
  animation-delay: 7s;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}

@keyframes jiggle {
  50% {
    transform: rotate(0);
  }
  70% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-4deg);
  }
  80% {
    transform: rotate(0deg);
  }
}

@media (max-width: 1210px) {
  .heroIpad {
    height: 400px;
  }
}
</style>