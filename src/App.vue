<template>
  <the-nav></the-nav>
  <landing-component></landing-component>
  <welcome-component></welcome-component>
  <meaning-component></meaning-component>
</template>
<script>
import LandingComponent from "./components/UI/LandingComponent.vue"
import WelcomeComponent from "./components/UI/WelcomeComponent.vue"
import MeaningComponent from "./components/UI/MeaningComponent.vue"
export default {
  components: {
    LandingComponent,
    WelcomeComponent,
    MeaningComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
