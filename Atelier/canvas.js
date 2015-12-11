var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
  bgReady = true;
};
bgImage.src = "background.png";

var heroReady = false;
var heroImg = new Image();
heroImg.onload = function() {
  heroReady = true;
};
heroImg.src = "hero.png";

var monsterReady = false;
var monsterImg = new Image();
monsterImg.onload = function() {
  monsterReady = true
};
monsterImg.src = "monster.png";

var render = function() {
    if (bgReady) {
      ctx.drawImage(bgImage, 0, 0);
    }
    if (heroReady) {
      ctx.drawImage(heroImg, hero.x, hero.y);
    }
    if (monsterReady) {
      ctx.drawImage(monsterImg, monster.x, monster.y);
    }
  };

  var hero = {
    x: 0,
    y: 0,
    speed: 256
  };

  var monster = {
    x: 0,
    y: 0
  };

  var monstersCaught = 0;

  var keysDown = {};

  addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
  });

  addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
  });

  var reset = function() {
    hero.x = canvas.width /2;
    hero.y = canvas.height /2;
    monster.x = 32 + (Math.random()*(canvas.width - 64));
    monster.y = 32 + (Math.random()*(canvas.height - 64));
  };

  var update = function(modifier) {
    if ( (38 in keysDown) && (hero.y > 0) ) {
      hero.y -= hero.speed * modifier;
    }
    if ( (40 in keysDown) && (hero.y < 448) ) {
      hero.y += hero.speed * modifier;
    }
    if ( (39 in keysDown) && (hero.x < 480) ) {
      hero.x += hero.speed * modifier;
    }
    if ( (37 in keysDown) && (hero.x > 0) ) {
      hero.x -= hero.speed * modifier;
    }
    if (
      hero.x <= monster.x + 32
      && monster.x <= hero.x + 32
      && hero.y <= monster.y + 32
      && monster.y <= hero.y + 32
    ) {
      monstersCaught ++;
      reset();
    }
  };

  var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;
    requestAnimationFrame(main);
  };

  var then = Date.now();

  reset();
  main();
