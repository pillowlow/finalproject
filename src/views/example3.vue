<template>
<head>
  
</head>
<body>
    <el-container class="containerblock">
      <el-header height="70vh"  class="containerblock">

      
          <el-row class="containerblock headercol">
            <div id="p5Canvas"></div>
            <el-col :span="12" >
              <div id="logo"></div>
              <div id="webtitle">
                <h2>工程 X 藝術 X 文學</h2>
                <h6>Engineering X Art X Literature</h6>
                <h6>陳柏諭(培洛洛)個人網頁</h6>
              </div>
              
            </el-col>
            <el-col :span="12" >
              <div id="wordblock1">
                <br>
                <h5>  「簡單」的呼喚</h5 >
                <h6>
                  曾幾何時 我們頭也不回的奔向複雜的世界<br>
                  來不及理解的色彩 輪廓 符號從身邊擦身而過時<br>
                  那些撩亂的綻放 能否觸碰 我們心裡那  最簡單的呼喚<br>
                </h6>
                <h6>
                  Once  upon  a  time, we ran into a complex world without looking<br>
                  back .When  the  colors, outlines and symbols passing  <br>
                  through. Don't you wonder if those choatic blooms is<br>
                  beautiful enough to touch the simple and primative<br>
                  nature of our innermost being<br>
                </h6>
                <h5>call of "simple"</h5 >
              </div>
            </el-col>
          </el-row>
      
      </el-header>
      <el-main class="containerblock">
        <el-row>
          <el-col>
            <div class="marqee containerblock">
              <ul1>
                <li>可以試著在空白處 ，點擊 ，長按 或 拖曳 滑鼠試試看!</li>
                <li>Plz try to click, press or drag, on blank space</li>
              </ul1>
            </div>
          </el-col>
        </el-row>
        <el-row class="containerblock" id="wordblock02">
          <div class="flapCircle containerblock " id="flp01">
            <br>
            <h3>關於我</h3>
            <h6></h6>
          </div>
          <div class="flapCircle containerblock " id="flp02">
            12354545
          </div>
          <div class="flapCircle containerblock " id="flp03">
            12354545
          </div>
          <div class="flapCircle containerblock " id="flp04">
            12354545
          </div>
          <div class="flapCirclecon containerblock ">
            
          </div>
          <el-col :span="6" class="containerblock flap bg401" >
            
              
            
          </el-col>
          <el-col :span="6" class="containerblock flap bg402">
            
          </el-col>
          <el-col :span="6" class="containerblock flap bg403">
            
          </el-col>
          <el-col :span="6" class="containerblock flap bg404">
            
          </el-col>
        </el-row>
      </el-main>
      <el-footer class="containerblock">Footer</el-footer>
    </el-container>
    
</body>
  
</template>

<script>
import P5 from 'p5';
var html = document.documentElement;

export default {
  
  
  
  
  data() {
    screenWidth: document.body.clientWidth
    function fontS(){
      var hW = html.offsetWidth;
      var hS = hW / 1000;
      html.style.fontSize = hS + "px";
    }
    return {
      p5Canvas: null,
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth)
          that.init()
          that.timer = false
        }, 400)

        
      }
      fontS();
    }
    
    
  },
  created() {
    const sketch = p5 => {

      // start of p5

      let zoff = 0;
      let xp = 30,yp = 80;
      let ct =0,ct2 = 0;
      let r2 =0;



      p5.setup = () => {
        p5.createCanvas(p5.windowWidth, 0.7*p5.windowHeight);
        p5.background(0,0,0,1);
        //let r = floor(random(10000));
        //let r = 6273;//floor(random(10000));
        //console.log(r);
        //frameRate(1);
      }

      p5.draw = () => {
        //noiseSeed(frameCount);
        ct+=5;
        ct2+=p5.TWO_PI/40;
        let r3 = 50;
        xp = p5.windowWidth/1.5 +r3*(p5.cos(ct2));
        yp = p5.windowHeight/(100/35) +r3*(p5. sin(ct2));

        p5.print(p5.mouseX,p5.mouseY);
        if(p5.mouseIsPressed ){
          xp -= (xp-p5.mouseX);
          yp -= (yp-p5.mouseY);
        }
        p5.background(0,0,0,10);
        p5.translate(xp, yp);
        p5.stroke(255);
        p5.noFill();

        p5.beginShape();
        for (let a = 0; a < p5.TWO_PI; a += 0.04) {
          // let xoff = map(cos(a),-1,1,0,mouseX/100);
          // let yoff = map(sin(a),-1,1,0,mouseX/100);
          // let xoff = map(cos(a),-1,1,0,2);
          // let yoff = map(sin(a+phase),-1,1,0,2);
          let xoff = p5.map(p5.cos(a), -1, 1, 0, 2);
          let yoff = p5.map(p5.sin(a), -1, 1, 0, 2);
          const r = p5.map(p5.noise(xoff, yoff,zoff), 0, 1,200, 300)+ct;
          r2 = r%1000;
          if(r%1000 == 0){
            break;
          }
          let x = r2 * p5.cos(a);
          let y = r2 * p5.sin(a);
          p5.vertex(x, y);
        }
        p5.endShape(p5.CLOSE);



        zoff += 0.01;

        //p5.print(p5.windowWidth,p5.windowHeight,xp,yp,speed,derec);
        //save(frameCount + ".png");

      };

      //end of p5
    }

    this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
  unmounted () {
    this.p5Canvas = null;
  },
  
  
}
</script>


<style>
.el-main{
  padding: 1px;
}
.el-header{
  padding: 1px;
  margin-top: 5vh;
}
.el-row{
  padding: 0;
}
.el-col {
  padding: 0;
}
.bg401{
  background-image: url('../assets/4bg-01.svg');
  background-repeat: no-repeat;
}
.bg402{
  background-image: url('../assets/4bg-02.svg');
  background-repeat: no-repeat;
}
.bg403{
  background-image: url('../assets/4bg-03.svg');
  background-repeat: no-repeat;
}
.bg404{
  background-image: url('../assets/4bg-04.svg');
  background-repeat: no-repeat;
}
#p5Canvas {
  
  position: absolute;
  
  left:0%;
  top: 0%;
}
#webtitle{
  position: relative;
  width: 40vw;
  height: 30vh;
  margin-left: 5vw;
  margin-top: 4vh;
  line-height: 1vh;
  letter-spacing: 0.5vw;
}
#logo{
  background-image: url("../assets/logo.svg");
  opacity: 0.8;
  mix-blend-mode: lighten;
  position: relative;
  width: 10vw;
  height: 10vw;
  border-radius: 15vw;
  border-color: white;
  border-style: solid;
  border-width: 1px;
  left:20vw;
  margin-top:15vh;
  
}
#logo:hover{
  transform: scale(1.02,1.02);
  -webkit-animation: logo 1s linear infinite;
}
@-webkit-keyframes logo {
  0%{
    transform: rotate3d(0,1,0,0deg);
  }
  25%{
    transform: rotate3d(0,1,0,180deg);
  }
  50%{
    transform: rotate3d(0,1,0,360deg);
  }
  75%{
    transform: rotate3d(0,1,0,-180deg);
  }
  100%{
    transform: rotate3d(0,1,0,0deg);
  }
}
#wordblock1{
  position: absolute;
  margin-left: 5vw;
  font-weight: bold;
  line-height: 3vh;
  color: white;
  border-color: rgba(255,255,255,0.4);
  border-width: 1px;
  border-style: solid;
  align-content: center;
  background-color: rgba(0,0,0,0.7);
  height: 70vh;
  width: 40vw;
  background-image:
      linear-gradient(rgba(255,255,255,.2) 1px, transparent 0),
      linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 0),
      linear-gradient(rgba(255,255,255,0.4) 1px, transparent 0),
      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 0);
  background-size: 1.5vw 1.5vw, 1.5vw 1.5vw, 7.5vw 7.5vw, 7.5vw 7.5vw;

}
#wordblock1:hover{
  -webkit-animation: grid 2s ease-in-out 1;
  transform: scale(1.02,1.02);
  background-image:
      linear-gradient(rgba(255,255,255,.2) 1px, transparent 0),
      linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 0),
      linear-gradient(rgba(255,255,255,0.4) 1px, transparent 0),
      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 0);
  background-size: 2vw 2vw, 2vw 2vw, 10vw 10vw, 10vw 10vw;
}
@-webkit-keyframes grid {
  from{
    background-image:
        linear-gradient(rgba(255,255,255,.2) 1px, transparent 0),
        linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 0),
        linear-gradient(rgba(255,255,255,0.4) 1px, transparent 0),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 0);
    background-size: 1.5vw 1.5vw, 1.5vw 1.5vw, 7.5vw 7.5vw, 7.5vw 7.5vw;
  }
  to{
    background-image:
        linear-gradient(rgba(255,255,255,.2) 1px, transparent 0),
        linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 0),
        linear-gradient(rgba(255,255,255,0.4) 1px, transparent 0),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 0);
    background-size: 2vw 2vw, 2vw 2vw, 10vw 10vw, 10vw 10vw;
  }
}
.containerblock{
  background-color: rgba(0,0,0,0);
  border-width: 1px;
  border-color: white;
  border-style: solid;
  overflow: hidden;
}
.headercol{
  height: 69vh;
}
ul1{
  font-size: 0.15rem;
}
.marqee {
  
  height: 5vh;
  margin: 0 auto;
  line-height: 5vh;
  overflow: hidden;
  position: relative;
  background: rgba(0,0,0,0.3);
  
}
.marqee > ul1 {
  padding-left: 0;
  display: flex;
  list-style-type: none;
  animation: marqee 15s linear infinite;
  position: absolute;
}
.marqee > ul1 > li {
  white-space: nowrap;
  margin-right: 1rem;
  font-weight: bold;
  color: white;
}
@keyframes marqee {
  0% {
    left: 100%;
    transform: translateX(0%);
  }

  100% {
    left: 0;
    transform: translateX(-100%);
  }
}
#wordblock02{
  height: 25vw;
}
.flap{
  z-index: 2;
  opacity: 0.4;
}
.flap:hover{
  z-index: 3;
  
  -webkit-animation: logo 1s linear 1;
  
  
}
.flapCircle{
  z-index: 6;
  position: absolute;
  
  margin-top: 2.5vw ;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 1.7rem;
  background-color: rgba(0,0,0,0.7);
}
#flp01{
  margin-left: 0.4rem;
}
#flp02{
  margin-left: 2.8rem;
}
#flp03{
  margin-left: 5.2rem;
}
#flp04{
  margin-left: 7.6rem;
}
.flapCircle:hover{
  transform: scale(1.02,1.02);
  
}
.flapCirclecon{
  width:100vw;
  height: 25vw;
  margin-left: 0;
  position: absolute;
  background-image:
      linear-gradient(rgba(255,255,255,.2) 1px, transparent 0),
      linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 0),
      linear-gradient(rgba(255,255,255,0.4) 1px, transparent 0),
      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 0);
  background-size: 1.5vw 1.5vw, 1.5vw 1.5vw, 7.5vw 7.5vw, 7.5vw 7.5vw;
  z-index: 1;
}
body{
  background-color: black;
}
p{ font-size: 0.4rem; }
h1{
  font-size: 0.4rem;
  line-height: 0.2rem;
}
h2{
  font-size: 0.35rem;
  line-height: 0.2rem;
}
h3{
  font-size: 0.3rem;
}
h4{
  font-size: 0.25rem;
}
h5{
  font-size: 0.15rem;
  line-height: 1vh;
}
h6{
  font-size: 0.1rem;
}
</style>