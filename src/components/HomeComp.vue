<template>
  <body data-nav="false">
  <div v-if="this.loading" id="loading-screen">
    <span class="loader"></span>
    <span class="loader-text">{{ this.loading_msg }}</span>
  </div>
  <div class="section--page">
    <main class="section--intro">
      <div class="position-relative text-center mt-3 logo">
        <router-link to="/">
          <img class="logoImg slow-opacity" src="../assets/img/tylerLogo.png" alt="">
        </router-link>
        <h1 class="logoName slow-opacity mt-1" v-if="this.showLogoText">Tyler Anthony de Rijk</h1>
        <h2 class="logoText slow-opacity" v-if="this.showLogoText">Full-stack developer 👨🏻‍💻</h2>
      </div>
      <router-view/>
      <button class="menu--button" @click="toggleNav()">MENU</button>
    </main>
    <nav>
      <div id="nav-links">
        <router-link class="nav-link" to="/about">
          <p class="nav-text">
            AB
            OU
            T
          </p>
        </router-link>
        <router-link class="nav-link" to="/skills">
          <p class="nav-text">
            SK
            IL
            LS
          </p>
        </router-link>
        <router-link class="nav-link" to="/projects">
          <p class="nav-text">
            PRO
            JEC
            TS
          </p>
        </router-link>
        <router-link class="nav-link" to="/experience">
          <p class="nav-text2 ml-5">
            EXP
            ERI
            ENC
            E
          </p>
        </router-link>
        <router-link class="nav-link" to="/contact">
          <p class="nav-text">
            CON
            TAC
            T
          </p>
        </router-link>
      </div>
    </nav>
    <div class="progress" v-if="this.progress.charged !== '110%'" :style="'width: '+this.progress.charged">
      <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
  </body>
</template>

<script>
import anime from 'animejs';
import loading_messages from '../assets/js/loading_messages.js';

export default {
  name: "HomeComp",
  data() {
    return {
      showLogoText: true,
      showNav: false,
      loading_msg: null,
      progress: {
        charged: '0%',
      },
      loading: true,
    }
  },
  watch: {
    '$route'() {
      document.body.dataset.nav = "false";
      console.log('routechange')
      this.checkRoute();
    }
  },
  beforeUpdate() {
  },
  created() {
    this.loading_msg = loading_messages[Math.floor(Math.random() * 261)];
    if (this.loading) {
      window.setInterval(() => {
        this.loading_msg = loading_messages[Math.floor(Math.random() * 261)];
      }, 600)
    }
    // this.checkRoute();
  },
  mounted() {
    this.checkRoute();
    setTimeout(() => {
      this.startOpening();
    }, 900)
    anime({
      delay: 900,
      targets: this.progress,
      charged: '110%',
      round: 1,
      easing: 'easeInOutQuad',
      duration: 4000
    });
    anime({
      delay: 900,
      targets: '.progress',
      opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      easing: 'linear',
      duration: 4000
    });
    anime({
      delay: 300,
      targets: '.slow-opacity',
      opacity: [-1, -1, -1, 1],
      easing: 'easeInOutQuad',
      duration: 3000,
    });
    anime({
      delay: 2000,
      targets: '.menu--button',
      translateY: [200, 0],
      translateX: [-50, -50, -50],
      easing: 'easeInOutQuad',
      duration: 2000,
    });
  },
  methods: {
    startOpening() {
      this.loading = false;
    },
    toggleNav() {
      document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
    },
    checkRoute() {
      if (this.$route.matched[1].path === '/') {
        this.showLogoText = true;
        console.log(true)
      } else {
        this.showLogoText = false;
        console.log(false)
      }
    }
  }
}
</script>

<style scoped>
body[data-nav="true"] main {
  transform: translateY(-50%);
}

main {
  background-image: linear-gradient(ivory, #f6f6e7, #d3dac3);
  height: 100vh;
  width: 100vw;
  margin: 0;
  z-index: 2;
  transition: transform 500ms cubic-bezier(.13, .53, .38, .97);
}

.menu--button {
  position: fixed;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
}

.logo {
  right: -10px;
}

.logoImg {
  height: 130px;
}

.logoName {
  font-size: x-large;
  font-weight: 200;
}

.logoText {
  font-size: large;
}

.slow-opacity {
  opacity: 1;
}

.progress-bar, .progress {
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: mediumseagreen;
}

.section--intro {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section--page {
  display: grid;
  flex-direction: row;
  grid-template-rows: 100vh fit-content(100%);
}

nav {
  height: 50vh;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  overflow: auto;
}

#nav-links {
  gap: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  margin-top: clamp(2rem, 2vw, 3rem);
  padding: 0 clamp(1rem, 2vw, 2rem);
  transform: translateY(70%) scale(0.9);
  transition: transform 500ms cubic-bezier(.13, .53, .38, .97);
}

.nav-link:hover {
  transform: scale(1.04);
  padding: 5px;
  transition: all 200ms cubic-bezier(.13, .53, .38, .97);
}

.nav-text {
  line-height: 0.7;
  text-align: left;
  font-weight: bold;
  font-size: clamp(70px, 190px, 190px);
  width: fit-content;
}

.nav-text2 {
  line-height: 0.7;
  text-align: left;
  font-weight: bold;
  font-size: 150px;
  width: fit-content;
}

.nav-text:hover, .nav-text2:hover {
  color: mediumseagreen;
  transition: color 300ms ease-in-out;
}

body[data-nav="true"] nav #nav-links {
  transform: translateY(0%) scale(1);
}

#nav-links .nav-link .nav-link-label {
  color: #181818;
  font-size: 1.25rem;
  margin: 0;
  text-transform: uppercase;
}

#nav-links .nav-link .nav-link-image {
  width: 15vw;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
  object-fit: cover;
}

/* BUTTON */
button {
  width: 120px;
  bottom: 5%;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 20px;
  border-radius: 2em;
  cursor: pointer;
  transition: 0.1s ease;
  border-width: 0;
  box-shadow: 1px 5px 0 0 mediumseagreen;
}

button:hover {
  transform: translateY(-4px) translateX(-50%);
  box-shadow: 1px 9px 0 0 mediumseagreen;
}

button:active {
  transform: translateY(4px) translateX(-50%);
  box-shadow: 0 0 0 0 mediumseagreen;
}

/* Loading screen */
#loading-screen {
  position: fixed;
  top: 0;
  z-index: 100000;
  background-image: linear-gradient(ivory, #f6f6e7, #d3dac3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transition: opacity ease-out 1s;
}

.loader-text {
  margin-left: 5px;
  font-style: italic;
}

.loader-text::before {
  content: '> ';
}

.loader {
  width: 96px;
  height: 96px;
  display: inline-block;
  position: relative;
}

.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: mediumseagreen;
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader 2s linear infinite;
}

.loader::after {
  animation-delay: 300ms;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}


/* MOBILE OPTIMIZATION */

@media (max-width: 1210px) {
  .overlay {
    border-radius: 12px;
  }

  #nav-links {
    justify-content: flex-start;
    align-items: center;
    gap: 8%;
  }

  .nav-text {
    font-size: 110px;
    line-height: 0.8;
    margin-top: 5px;
  }

  .nav-text2 {
    margin-top: 20px;
    font-size: 90px;
    line-height: 0.8;
  }

  nav {
    height: auto;
    overflow: scroll;
    display: flex;
    justify-content: flex-start;
  }

  .menu--button {
    bottom: 2rem;
  }

  .nav-link {
    display: flex;
    /*justify-content: center;*/
  }

  /*  .block--about {*/
  /*    overflow: hidden;*/
  /*    flex-direction: column;*/
  /*    width: 70%;*/
  /*  }*/
  /*  .block--about-text {*/
  /*    width: 100%;*/
  /*  }*/
  /*  .block--about-image {*/
  /*    width: 100%;*/
  /*  }*/
  /*.tab--menu {*/
  /*  width: fit-content;*/
  /*}*/
}

/**/
</style>