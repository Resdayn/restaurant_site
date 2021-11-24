<template>
  <router-view name="navbar"></router-view>
  <router-view name="landing"></router-view>
  <router-view name="welcome"></router-view>
  <router-view name="meaning"></router-view>
  <router-view name="menu"></router-view>
  <router-view name="about"></router-view>
  <router-view name="footer"></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
