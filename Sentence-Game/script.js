function preload()
{
  man = loadImage('man.jpg');
}
let input1;
let input2;
let tried1 = false;
let tried2 = false;
let tried3 = false;
let tried4 = false;
let tried5 = false;
function setup()
{
      createCanvas(windowWidth, windowHeight);
      background(255);
      fill(0);
      textSize(20);
      text('The color of the apple is ___.', 75, 50);
      if(tried1 == true)
      {
        fill(255,0,0)
        text('Wrong. Hint: word rhymes with bread.', 75, 70);
        var x =  20;
      }
      else
      {
        input1 = createInput();
        var x = 55;
      }
      image(man, x, 100, 100, 100)
      fill(0);
      text('Start',55,250)
      text('Finish',460,250)
      stroke(255,0,0)
      strokeWeight(5)
      line(440,0,440,windowHeight)
      noStroke()
      input1.position(300, 35);
      input1.size(35,20);
      checkButton = createButton('Submit')
      checkButton.position(350,35);
      checkButton.mousePressed(check1)
}
function check1()
{
  if(input1.value()==="red")
  {
    input1.remove();
    sentenceGame2()
  }
  else
  {
    tried1 = true;
    setup()
  }
}
function sentenceGame2() 
{
      clear();
      background(255);
      fill(0);
      textSize(20);
      text('The speed of the car is ___.', 75, 50);
      if(tried2 == true)
      {
        fill(255,0,0)
        var x = 125;
        text('Wrong. Hint: word rhymes with last.', 75, 70);
      }
      else
      {
        fill(0,255,0)
        var x = 155;
        text('Right!', 75, 70);
        input2 = createInput();
      }
      image(man, x, 100, 100, 100)
      fill(0);
      text('Start',55,250)
      text('Finish',460,250)
      stroke(255,0,0)
      strokeWeight(5)
      line(440,0,440,windowHeight)
      noStroke()
      input2.position(290, 35);
      input2.size(35,20);
      checkButton.position(350,35);
      checkButton.mousePressed(check2)  
      
}
function check2()
{
  if(input2.value()==="fast")
  {
    input2.remove();
    sentenceGame3()
  }
  else
  {
    tried2 = true;
    sentenceGame2()
  }
}
function sentenceGame3() {
      clear();
      background(255);
      fill(0);
      textSize(20);
      text('The taste of the lemon is ___.', 75, 50);
      if(tried3 == true)
      {
        fill(255,0,0)
        var x = 225;
        text('Wrong. Hint: word rhymes with hour.', 75, 70);
      }
      else
      {
        fill(0,255,0)
        var x = 255;
        text('Right!', 75, 70);
        input3 = createInput();
      }
      image(man, x, 100, 100, 100)
      fill(0);
      text('Start',55,250)
      text('Finish',460,250)
      stroke(255,0,0)
      strokeWeight(5)
      line(440,0,440,windowHeight)
      noStroke()
      input3.position(308, 35);
      input3.size(35,20);
      checkButton.position(350,35);
      checkButton.mousePressed(check3)
}
function check3()
{
  if(input3.value()==="sour")
  {
    input3.remove();
    sentenceGame4()
  }
  else
  {
    tried3 = true;
    sentenceGame3()
  }
}
function sentenceGame4()
{
      clear();
      background(255);
      fill(0);
      textSize(20);
      text('The height of the tower is ___.', 75, 50);
      if(tried4 == true)
      {
        fill(255,0,0)
        var x = 275;
        text('Wrong. Hint: word rhymes with ball.', 75, 70);
      }
      else
      {
        fill(0,255,0)
        var x = 305;
        text('Right!', 75, 70);
        input4 = createInput();
      }
      image(man, x, 100, 100, 100)
      fill(0);
      text('Start',55,250)
      text('Finish',460,250)
      stroke(255,0,0)
      strokeWeight(5)
      line(440,0,440,windowHeight)
      noStroke()
      input4.position(310, 35);
      input4.size(35,20);
      checkButton.position(350,35);
      checkButton.mousePressed(check4)
}
function check4()
{
  if(input4.value()==="tall")
  {
    input4.remove();
    sentenceGame5()
  }
  else
  {
    tried4 = true;
    sentenceGame4()
  }
}
function sentenceGame5()
{    
      clear();
      background(255);
      fill(0);
      textSize(20);
      text('The shape of the wheel is ___.', 75, 50);
      if(tried5 == true)
      {
        fill(255,0,0)
        var x = 325;
        text('Wrong. Hint: word rhymes with found.', 75, 70);
      }
      else
      {
        fill(0,255,0)
        var x = 340;
        text('Right!', 75, 70);
        input5 = createInput();
      }
      image(man, x, 100, 100, 100)
      fill(0);
      text('Start',55,250)
      text('Finish',460,250)
      stroke(255,0,0)
      strokeWeight(5)
      line(440,0,440,windowHeight)
      noStroke()
      input5.position(315, 35);
      input5.size(35,20);
      checkButton.position(350,35);
      checkButton.mousePressed(check5)
}
function check5()
{
  if(input5.value()==="round")
  {
    input5.remove();
    sentenceEnd()
  }
  else
  {
    tried5 = true;
    sentenceGame5()
  }
}
function sentenceEnd()
{
      var timeDecimal = millis()/1000;
      var time = (Math.round(timeDecimal * 100) / 100).toFixed(2);;
      background(255);
      fill(0);
      textSize(20);
      checkButton.remove();
      text('You win the race!', 75, 50);
      fill(0,255,0)
      text(numRight() + "/5 correct", 75, 70);
      image(man, 438, 100, 100, 100)
      fill(0);
      text('Start',55,250)
      text('Finish',460,250)
      stroke(0,255,0)
      strokeWeight(5)
      line(440,0,440,windowHeight)
      noStroke()
      text('Time to finish: ' + time + " seconds.", 75, 100)
      buttonHome = createButton('Home')
      buttonHome.position(250, 300)
      buttonHome.size(50,30)
      buttonHome.mousePressed(toGUI)
}  

function numRight()
{
  var count = 0;
  if(tried1 == false)
  {
    count += 1;
  }if(tried2 == false)
  {
    count += 1;
  }
  if(tried3 == false)
  {
    count += 1;
  }
  if(tried4 == false)
  {
    count += 1;
  }
  if(tried5 == false)
  {
    count += 1;
  }
  return count;
}

function toGUI()
{
  window.open("https://GUI.hunterbeesley.repl.co");
  window.close();
}