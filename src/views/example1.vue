<template>
  
  <div class="container">
    <div class="Title">
      <div id="logo"></div>
      <div class = "Titlebar">
        
        <h1>工程 X 藝術 X 文學</h1>
        <h6>Engineering X Art X Literature</h6>
        <h5>陳柏諭(培洛洛)個人網頁</h5>
      </div>
    </div>
    <div class ="wordblocck1">
      
      
      <br/>
      <br/>
      <h2>  「簡單」的呼喚</h2 >
      <HR size=1 align="ceter" width="60%"></HR>
      <h6> 
        曾幾何時 我們頭也不回的奔向複雜的世界<br>
        來不及理解的色彩 輪廓 符號從身邊擦身而過時<br>
        那些撩亂的綻放 能否觸碰 我們心裡那  最簡單的呼喚<br>
      </h6>
      <HR size=1 align="ceter" width="80%"></HR>
      <h6>
        Once  upon  a  time  we ran into a complex world without looking back<br>
        When  the  colors, outlines and symbols passing through <br>
        Don't you wonder if those choatic blooms is beautiful enough <br>
        to touch the simple and primative nature of our innermost being<br> 
      </h6>
      <HR size=1 align="ceter" width="60%"></HR>
      <h2>call of "simple"</h2 >
      
      
    </div>
    <div id="p5Canvas">
      
    </div>
  </div>
  
</template>

<script>
import P5 from 'p5';

export default {
  data() {
    return {
      p5Canvas: null,
    }
  },
  created() {
    const sketch = p5 => {
      
      // start of p5
      let phase = 0;
      let zoff = 0;
      let xp = 30,yp = 80;
      let ct =0,ct2 = 0;
      let r2 =0;
      
      

      p5.setup = () => {
        p5.createCanvas(0.9*p5.windowWidth, 0.9*p5.windowHeight);
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
        phase += 0.01;
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
.container{
  height: 90vh;
  width: 90vw;
  border-color: white;
  border-width: 2px;
  overflow: hidden;
  border-style: solid;
  padding:2px;
  position: absolute;
  margin-left: 5vw;
}
#p5Canvas {
  width: 90vw;
  height: 90vh;
  margin-left: 0;
  position: absolute;
  left:0%;
  top: 0%;
}

main {
  background-color: black;
  margin: 0 auto;
  width: 100vw;
}
body{
  background-color: black;
}
.wordblocck1{
  overflow: hidden;
  position: absolute;
  
  z-index: 50;
  margin-left: 50vw;
  margin-top: 16vh;
  font-weight: bolder;
  line-height: 3vh;
  color: white;
  background-color: rgba(0,0,0,0.7);
  border-radius: 30vw;
  border-color: white;
  border-style: double;
  border-width: 1px;
  width: 30vw;
  height: 30vw;
  align-content: center;
  
}
.Title{
  
  position: absolute;
  z-index: 51;
  font-weight: bolder;
  color:white;
  font-size: 20px;
  letter-spacing: 10px;
  line-height: 8px;
  margin-left: 5vw;
  width: 40vw;
  height: 100vh;
  
  
}

#logo{
  background-image: url("../assets/logo.svg");
  opacity: 0.8;
  mix-blend-mode: lighten;
  position: absolute;
  width: 15vw;
  height: 15vw;
  border-radius: 15vw;
  border-color: white;
  border-style: solid;
  border-width: 1px;
  left:12.5vw;
  top:25%;
}

.Titlebar{
  position: absolute;
  top:60%;
  width: 40vw;
  padding: 10px;
}
</style>