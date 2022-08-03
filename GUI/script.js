let isRedObj, isBlueObj;
let isRedObjDrag = 0;
let isBlueObjDrag = 0;
let circleX = 300;
let ySpeed = -1;
let x = 100;
let shape1;
let shape2;
let wiiSound;
let sonicSound;
let wii = true;
let sonic = true;
let unlocked = false;
let levelW;
let levelH;
let level = 1;
let finalTime = 0;
let timed = false;
function preload(){
  wiiSound = loadSound('Music/Nintendo Wii - Mii Channel Theme.mp3');
  sonicSound = loadSound('Music/Stage Clear - Sonic Mania [OST].mp3');
}
function setup() {
  
  if(sonic == true && level ==2){
    sonicSound.play();
  }
  if(sonic == true && level ==3){
    sonicSound.play();
  }
  if(sonic == true && level ==4){
    sonicSound.play();
  }
  if(sonic == true && level ==5){
    sonicSound.play();
  }

  if(level == 1)
  {
    levelW = 30;
    levelH = 30;
  }
  else if(level == 2)
  {
    levelW = 25;
    levelH = 25;
  }
  else if(level == 3)
  {
    levelW = 20;
    levelH = 20;
  }
  else if(level == 4)
  {
    levelW = 15;
    levelH = 15;
  }
  else if(level == 5)
  {
    levelW = 10;
    levelH = 10;
  }
  text("Drag the gray circle to the orange circle to unlock the door", 100, 100);
  createCanvas(windowWidth, windowHeight);
  fill(194, 164, 132);
  strokeWeight(5);
  rect(200, 100, 200, 600);
  fill('orange');
  ellipse(360, 275, levelW, levelH);
  fill('red')
  strokeWeight(2)
  
  rec1 = rect(100, 100, 50, 50)
  shape1 = new Draggable(100, 100, levelW, levelH);
  fill('blue')
  rec2 = rect(150, 100, 50, 50)

  shape1.over();
  shape1.update();
  shape1.show();

}

function mousePressed() {
  shape1.pressed();
  c = get(mouseX, mouseY)
  print(c)

  if (c[0] == 255 && c[1] == 0 && c[2] == 0) {
    isRedObj = 1;
  }

  if (c[0] == 0 && c[1] == 0 && c[2] == 255) {
    isBlueObj = 1;
  }




}

function mouseReleased() {
  
  shape1.released();
  if(shape1.posX() > 345 && shape1.posX() < 385 && shape1.posY() > 250 && shape1.posY() < 300)
  {
    unlocked = true;
  }
  else
  {
    unlocked = false;
    print("out")
  }
  if (isRedObj == 1 && c[0] == 255 && c[1] == 165 && c[2] == 0) {
    print('onlock')
    fill('red');
    ellipse(360, 275, levelW, levelH);
    isRedObj = 0
  }
  if (isBlueObj == 1 && c[0] == 255 && c[1] == 0 && c[2] == 0) {
    print('onlock')
    fill('orange');
    ellipse(360, 275, levelW, levelH);
    isBlueObj = 0
    doorAnim = 1
    print(doorAnim);
  }


}


function draw()
{
  background(255);
  textSize(15);
  fill(0);
  noStroke();
  var timeDecimal = millis()/1000;
  var time = (Math.round(timeDecimal * 100) / 100).toFixed(2);;
  text("Drag the gray circle to the orange circle to unlock the door", 75, 50);
  if(level <= 5 && unlocked == false)
  {
    text("Time: " + time + " seconds", 75, 70);
  }
  stroke(0);
  fill(194, 164, 132);
  rect(200, 100, 200, 600);
  fill('orange');
  ellipse(360, 275, levelW, levelH);
  fill('red')
  strokeWeight(2)

  shape1.over();
  shape1.update();
  shape1.show();
  shape1.over();
  shape1.update();
  shape1.show();

  if(unlocked)
  {
    stroke(0);
    strokeWeight(5);
    fill(255);
    rect(200,100,200,600);
    strokeWeight(5);
    stroke(0);
    fill(194, 164, 132);
    rect(200, 100, x, 600);
    if(timed == false)
    {
      var timeDecimalFinal = millis()/1000;
      finalTime = (Math.round(timeDecimalFinal * 100) / 100).toFixed(2);
      timed = true;
    }
    noStroke()
    fill(0)
    text("Time: " + finalTime + " seconds", 75, 70);
    // modify state
    circleX = circleX + ySpeed;
    x = x + ySpeed;

    // bounce off bottom
    if(circleX < 25) {
      ySpeed = 0;
    }
    buttonHome = createButton('Home')
    buttonHome.position(80, 80)
    buttonHome.size(55,25)
    buttonHome.mousePressed(toGUI)
  }
  /*
   // clear out old frames
   clear();
  

  background(255);

  // draw current frame based on state
  strokeWeight(5);
  fill(194, 164, 132);
  rect(300, 50, x, 300);

  // modify state
  circleX = circleX + ySpeed;
  x = x + ySpeed;

  // bounce off bottom
  if(circleX < 100) {
    ySpeed = 0;
  }
  */

}

function mouseClicked()
{
  clear();
  if(unlocked == true && level < 5)
  {
    unlocked = false;
    level ++;
    setup();
  }
}
function doorGame90() 
{
    //sliding lock
    fill(20, 20, 20)
    rect(200, 200, 200, 50)

}
function toGUI()
{
  window.open("https://GUI.hunterbeesley.repl.co");
  window.close();
}