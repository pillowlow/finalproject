<template>
  
  <div id="nav">
    <router-link to="/">Example 1</router-link> |
    <router-link to="/example2">Example 2</router-link> |
    <router-link to="/example3">Example 3</router-link> |
    <router-link to="/example4">Example 4</router-link>
  </div>
  <router-view :key="$route.fullPath"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  
  background-color: black;
  height: 5vh;
  width: 90vw;
  border-style: solid;
  border-color: white;
  border-width:2px;
  padding: 2px;
  position: fixed;
  z-index: 100;
  margin-left: 5vw;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: dimgray;
}
</style>
