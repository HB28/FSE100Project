let level = 1;

function preload() {
  orang = loadImage('orang.jpg');
  orangBW = loadImage('orangBW.jpg');
  apple = loadImage('apple.png');
  appleBW = loadImage('appleBW.png');
  banana = loadImage('banana.jpg');
  bananaBW = loadImage('bananaBW.jpg');
  broccoli = loadImage('broccoli.jpg');
  broccoliBW = loadImage('broccoliBW.jpg');
  blueberry = loadImage('blueberry.jpg');
  blueberryBW = loadImage('blueberryBW.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  level = 1;
  background(255);
  fill(0);
  text('What color is this object?', 75, 50);
  image(orangBW, 205, 100, 100, 100)
  buttonRed = createButton('Red')
  buttonOrange = createButton('Orange')
  buttonYellow = createButton('Yellow')
  buttonGreen = createButton('Green')
  buttonBlue = createButton('Blue')
  buttonRed.position(80, 250)
  buttonRed.size(50, 50)
  buttonRed.style('background-color', 'red')
  buttonOrange.position(180, 250)
  buttonOrange.size(50, 50)
  buttonOrange.style('background-color', 'orange')
  buttonYellow.position(280, 250)
  buttonYellow.size(50, 50)
  buttonYellow.style('background-color', 'yellow')
  buttonGreen.position(380, 250)
  buttonGreen.size(50, 50)
  buttonGreen.style('background-color', 'green')
  buttonBlue.position(480, 250)
  buttonBlue.size(50, 50)
  buttonBlue.style('background-color', 'blue')

  if (level == 1) {
    buttonOrange.mousePressed(orangeGameCorrect)

  }

}

function orangeGameCorrect() {
  if (level == 1) {
    clear();
    background(255)
    fill(255)
    fill('green')
    text('Correct!', 75, 50);
    image(orang, 205, 100, 100, 100)
    buttonNextO = createButton('Next');
    buttonNextO.position(280, 300)
    buttonNextO.size(50, 50)
    level = 1.5;
    buttonNextO.mousePressed(orangeToApple)
  }
}
//the c function is so cracked how did u guys do it
//Which function?
//functino mousepressed where its like [255,0,0,255]
function appleGame() {
  level = 2;
  clear()
  background(255);
  fill(0);
  text('What color is this object?', 75, 50);
  image(appleBW, 205, 100, 100, 100)
  buttonRed.mousePressed(appleGameCorrect)
}
function appleGameCorrect() {
  if (level == 2) {
    clear();
    background(255)
    fill(255)
    fill('green')
    text('Correct!', 75, 50);
    image(apple, 205, 100, 100, 100)
    buttonNextA = createButton('Next');
    buttonNextA.position(280, 300)
    buttonNextA.size(50, 50)
    level = 2.5;
    buttonNextA.mousePressed(appleToBanana)
  }
}
function bananaGame() {

  level = 3;
  clear();
  background(255);
  fill(0);
  text('What color is this object?', 75, 50);
  image(bananaBW, 205, 100, 100, 100)
  buttonYellow.mousePressed(bananaGameCorrect)
}
function bananaGameCorrect() {
  if (level == 3) {
    clear();
    background(255)
    fill(255)
    fill('green')
    text('Correct!', 75, 50);
    image(banana, 205, 100, 100, 100)
    buttonNextBa = createButton('Next');
    buttonNextBa.position(280, 300)
    buttonNextBa.size(50, 50)
    level = 3.5;
    buttonNextBa.mousePressed(bananaToBroccoli)
  }
}
function broccoliGame() {
  level = 4;
  clear();
  background(255);
  fill(0);
  text('What color is this object?', 75, 50);
  image(broccoliBW, 205, 100, 100, 100)
  buttonGreen.mousePressed(broccoliGameCorrect)
}
function broccoliGameCorrect() {
  if (level == 4) {
    clear();
    background(255)
    fill(255)
    fill('green')
    text('Correct!', 75, 50);
    image(broccoli, 205, 100, 100, 100)
    buttonNextBr = createButton('Next');
    buttonNextBr.position(280, 300)
    buttonNextBr.size(50, 50)
    level = 4.5;
    buttonNextBr.mousePressed(broccoliToBlueberry)
  }
}
function blueberryGame() {
  level = 5;
  clear();
  background(255);
  fill(0);
  text('What color is this object?', 75, 50);
  image(blueberryBW, 205, 100, 100, 100)
  buttonBlue.mousePressed(blueberryGameCorrect)
}
function blueberryGameCorrect() {
  if (level == 5) {
    clear();
    background(255)
    fill(255)
    fill('green')
    text('Correct!', 75, 50);
    image(blueberry, 205, 100, 100, 100)
    buttonNextBl = createButton('Next');
    buttonNextBl.position(280, 300)
    buttonNextBl.size(50, 50)
    level = 5.5;
    buttonNextBl.mousePressed(blueberryToEnd)
  }
}
function orangeEnd() {
  level = 6;
  clear();
  background(255)
  fill(255)
  fill('green')
  text('Game over. Congratulations!', 75, 50);
  buttonReset = createButton('Reset');
  buttonReset.position(280, 200)
  buttonReset.size(50, 50)
  buttonReset.mousePressed(clearButt);
}

function clearButt() {
  buttonYellow.remove()
  buttonBlue.remove()
  buttonGreen.remove()
  buttonOrange.remove()
  buttonRed.remove()
  buttonReset.remove()
  window.open("https://GUI.hunterbeesley.repl.co");
  window.close();
}
function orangeToApple() {
  if (level == 1.5) {
    buttonNextO.remove()
    appleGame()
  }
}
function appleToBanana() {
  if (level == 2.5) {
    buttonNextA.remove()
    bananaGame()
  }
}
function bananaToBroccoli() {
  if (level == 3.5) {
    buttonNextBa.remove();
    broccoliGame();
  }
}
function broccoliToBlueberry() {
  if (level == 4.5) {
    buttonNextBr.remove();
    blueberryGame();
  }
}
function blueberryToEnd() {
  if (level == 5.5) {
    buttonNextBl.remove();
    orangeEnd();
  }
}