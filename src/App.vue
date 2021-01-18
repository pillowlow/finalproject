<template>
  
  <div id="nav">
    <div class="block" style="width: 10vw;">
      開發中OuO
    </div>
    <div class="block" style="width: 14vw">
      <router-link to="/">首頁 Home</router-link> 
    </div>
    <div class="block" style="width: 14vw">
      <router-link to="/example2">關於我 About me</router-link>
    </div>
    <div class="block" style="width: 14vw">
      <router-link to="/example3">作品集 Protfolio</router-link>
    </div>
    <div class="block" style="width: 14vw">
      <router-link to="/example4">參與計畫</router-link>
    </div>
    <div class="block" style="width: 20vw">
      <marquee >試著在空曠處點擊或拖曳滑鼠吧! try to click or drag your mouse in blank side!</marquee>
    </div>
    
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
.block{
  background-color: black;
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  padding: 2px;
  height: 4vh;
  text-align:center;
  line-height: 4vh;
  float: left;
  margin-left: 2px;
  
}
.block:hover{
  transform: scale(1.1,1.1);
  z-index: 10;
}

</style>
