
let wiiSound;
let wii = false;
function preload() {
  img = loadImage('img.jpg');
  wiiSound = loadSound('Music/Nintendo Wii - Mii Channel Theme.mp3');
}

function setup() {
  wii = true;
  
  wiiSound.play();
  
  createCanvas(windowWidth, windowHeight);
  background(225)
  fill(173, 216, 230)
  strokeWeight(5)
  textSize(18)
  
  //window
  rect(100, 100, 50, 50)
  rect(50, 50, 50, 50)
  rect(100, 50, 50, 50)
  rect(50, 100, 50, 50)
  
  
  

  //door
  fill(0)
  text('Door Game', 400, 80)
  fill(194, 164, 132)
  rect(400, 100, 100, 200)
  ellipse(475, 200, 25, 25)

  //table
  rect(0, 230, 600, 600)

  //orange 
  x = 200; y = 200; d = 100;
  fill(0)
  text('Orange Game', 140, 180)
  fill(255, 102, 0)
  circle(x, y + 50, d)

  //sentence game
  fill(0)
  text('Sentence Game', 340, 250)
  image(img, 350, 260, 110, 85);
  
}

function mousePressed() {
  if (dist(mouseX, mouseY, 200, 250) < 50) {
    print
    window.open("https://OrangeGame.hunterbeesley.repl.co");
    window.close();
  }
  else if (mouseX > 400 && mouseX < 500 && mouseY > 100 && mouseY < 230) {
    window.open("https://Door-Game.hunterbeesley.repl.co");
    window.close();
  }
  else if (mouseX > 350 && mouseX < 460 && mouseY > 260 && mouseY < 345) {
    window.open("https://Sentence-Game.hunterbeesley.repl.co");
    window.close();
  }
}