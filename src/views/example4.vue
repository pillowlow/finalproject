<template>
  <head>

  </head>
  <body>
  <el-container >
    <el-header height="100vh"  >
      <div id="p5Canvas-02"></div>
      <el-row class=" headercol " ></el-row>
      <el-row  >

        <el-col :span="4" >
        </el-col>
        <el-col :span="16"   style="margin-top: 1rem">
          <el-container id="wordblock1-02">
            
            <el-container >
              <el-aside class="containerblock " width="3rem" height="3rem">
                <h5>sticker</h5>
                <div id="logo-02"></div>
              </el-aside>
              <el-main class="containerblock " style="padding: 0 0.3rem  0 0.3rem ">
                <h5>  文字創作...</h5 >
                <h6>
                  &emsp; 主要是我寫過的詩或之前比過賽的小說之類的吧 本來還想寫點什麼但真的來不及啦...
                  <br><br>
                  &emsp;&emsp;作業作態感@@

                </h6>

              </el-main>
            </el-container>
            <el-footer class="containerblock " height="1.5rem" style="border-radius: 0 0 0.4rem 0.4rem ;padding: 0 0.3rem  0 0.3rem">
              <h6>
                A student of engineering background with a sensitive heart.Usually do strange things,
                such us drawing stuff behind math test papers or sitting in the waves and
                typing codes
                Despite understanding that being special do hot mean being useful, I still decided to
                be so, beliving that all free moments will eventually nourish every possible future.
              </h6>
              <h5>About me</h5 >

            </el-footer>
          </el-container>
          
        </el-col>
        <el-col :span="4" >
        </el-col>
      </el-row>
      

    </el-header>
    <el-main class=" newspaper" >
      <div class="containerblock switchblock">
      <el-carousel :interval="5000" :height="dataHeight" >
        <el-carousel-item class="newspapaer containerblock" v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      </div>
      
    </el-main>
    <el-footer class="containerblock ">
      <el-row class="containerblock footerow" >
        <el-col :span="8">
          <a target="_blank" href="https://www.instagram.com/pillowlowchen/?hl=en"
             style="color:white;font-size: 0.1rem;margin-top: 0.1rem;position: absolute">
            <span >Instagram</span>
          </a>
        </el-col>
        <el-col :span="8">
          <a target="_blank" href="https://github.com/pillowlow"
             style="color:white;font-size: 0.1rem;margin-top: 0.1rem;position: absolute">
            <span >Github</span>
          </a>
        </el-col>
        <el-col :span="8">

          <a target="_blank" href="mailto:tmps9930613@gmail.com"
             style="color:white;font-size: 0.1rem;margin-top: 0.1rem;position: absolute"
          >
            Email
          </a>
        </el-col>

      </el-row>
    </el-footer>
  </el-container>

  </body>

</template>

<script>
import P5 from 'p5';
var html = document.documentElement;

export default {

  name: 'carousel',
  props: {
    dataHeight: {
      type: String,
      default: '3rem'
    }
  },


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
  /*
  created() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    };
    const sketch02 = p5 => {

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

        //p5.print(p5.mouseX,p5.mouseY);
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

    this.p5Canvas02 = new P5(sketch02, 'p5Canvas-02');
  },
  unmounted () {
    console.log(this.p5Canvas02)
    this.p5Canvas02 = null;
    console.log(this.p5Canvas02)
  },
   */

}
</script>


<style>
el-main{
  padding: 1px;
  
}
el-header{
  padding: 1px;
  margin-top: 5vh;
  
  
  
}
el-row{
  padding: 0;
}
el-col {
  padding: 0;
}
.el-footer{
  padding: 1px;
  height: 2rem;

}
switch{
  height: 30vh;
  position: absolute;
  margin-top: 100px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
  height: 3rem;
  
}

.el-carousel__item:nth-child(2n) {
  background-color: rgba(0,0,0,0.8) ;
  height: 3rem;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: rgba(0,0,0,0.6) ;
  height: 3rem;
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
#logo-02{
  background-image: url("../assets/headphoto.svg");
  float: left;
  position: relative;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 1.7rem;
  border-color: white;
  border-style: solid;
  border-width: 3px;
  margin-left: 0.5rem;
  top:60%;
  margin-top: -1.5rem;
  line-height: 0.3rem;
  
  z-index: 20;

}
.newspaper{
  background-color: rgba(0,0,0,0.6) ;
  background-blend-mode: multiply;
  background-image: url("../assets/newspaper-2.svg");
  height:5rem;
  width: 90vw;
  margin-left: 3vw;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  overflow: hidden;
  
}
#wordblock1-02{
  
  font-weight: bold;
  line-height: 3vh;
  color: white;
  border-color: rgba(255,255,255,0.4);
  border-width: 1px;
  border-style: solid;
  border-radius: 0 0 0 0;
  align-content: center;
  background-color: rgba(0,0,0,0.7);
  background-image:
      linear-gradient(rgba(255,255,255,.2) 1px, transparent 0),
      linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 0),
      linear-gradient(rgba(255,255,255,0.4) 1px, transparent 0),
      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 0);
  background-size: 1.5vw 1.5vw, 1.5vw 1.5vw, 7.5vw 7.5vw, 7.5vw 7.5vw;

}
#wordblock1:hover{
  -webkit-animation: grid 2s ease-in-out 1;
  
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
  height: 2vh;
}
.headerco2{
  height: 5rem;
}
ul1{
  font-size: 0.15rem;
}
.switchblock{
   position: relative;
  margin: 1rem 1rem 1rem 1rem;
  height: 3rem;
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


.footerow{
  height: 2rem;
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