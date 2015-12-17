function info(i){
  var hiddenLi = document.getElementById("hiddenLi"+i);
  hiddenLi.style.display = "inline-block";
  event.target.addEventListener("mouseout", efface);
  function efface(){
    hiddenLi.style.display = "none";
  }
}

var header = document.getElementById("header");

var context;
var context2;
var context3;
var context4;

window.onload = function initCanvas() {
  console.log("initCanvas()...");
  var feuille = document.getElementById("canvas");
  var feuille2 = document.getElementById("canvas2");
  var feuille3 = document.getElementById("canvas3");
  var feuille4 = document.getElementById("canvas4");
  var feuille5 = document.getElementById("canvas5");
  var feuille6 = document.getElementById("canvas6");
  context = feuille.getContext("2d");context = feuille.getContext("2d");
  context2 = feuille2.getContext("2d");
  context3 = feuille3.getContext("2d");
  context4 = feuille4.getContext("2d");
  context5 = feuille5.getContext("2d");
  context6 = feuille6.getContext("2d");};

function rectVide(ax, ay, bx, by, color) {
  context2.strokeStyle = "black";
  context2.strokeStyle = color;
  context2.strokeRect(ax,ay,bx,by);
}

function rectPlein(ax, ay, bx, by, color) {
  context2.fillStyle = "black";
  context2.fillStyle = color;
  context2.fillRect(ax,ay,bx,by);
}

function trait(ax, ay, bx, by, color) {
  context.strokeStyle = "black";
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(ax, ay);
  context.lineTo(bx, by);
  context.closePath();
  context.stroke();
}

function efface(ax, ay, bx, by) {
  console.log('efface() ', ax, ay, bx, by);
  context.clearRect(ax, ay, bx, by);
  context2.clearRect(ax, ay, bx, by);
  context3.clearRect(ax, ay, bx, by);
  context4.clearRect(ax, ay, bx, by);
  context5.clearRect(ax, ay, bx, by);
  context6.clearRect(ax, ay, bx, by);
}

function cerclePlein(ax, ay, rayon, color){
  context3.beginPath();
  context3.arc(ax, ay, rayon, 0, Math.PI*2, true);
  context3.fillStyle = color;
  context3.fill();
}

function cercleVide(ax, ay, rayon, color){
  context3.beginPath();
  context3.arc(ax, ay, rayon, 0, Math.PI*2, true);
  context3.strokeStyle = color;
  context3.stroke();
}

function dessineImage(ax, ay, lien) {
  var image = new Image();
  image.src = lien;
  image.onload = function() {
    context4.drawImage(this, ax, ay);
    };
}

function texte( ax, ay, content, font) {
  context5.font = "20px Arial";
  context5.font = font;
  context5.textAlign = "center";
  context5.fillStyle = "black";
  context5.fillText(content, ax, ay);
}

function degrade(color1, color2, color3){
  var linear = context6.createLinearGradient(0,0,400,0);
  linear.addColorStop(0, color1);
  linear.addColorStop(0.5, color2);
  linear.addColorStop(1, color3);
  context6.fillStyle = linear;
  context6.fillRect(0,0,400,200);
}

function recupTrait() {
  var codeTrait = document.getElementById("tryTrait").value;
  execute(codeTrait);
}

function recupRect() {
  var codeRect = document.getElementById("tryRect").value;
  execute(codeRect);
}

function recupCercle() {
  var codeCercle = document.getElementById("tryCercle").value;
  execute(codeCercle);
}

function recupImage() {
  var codeImage = document.getElementById("tryImage").value;
  execute(codeImage);
}

function recupTexte() {
  var codeTexte = document.getElementById("tryTexte").value;
  execute(codeTexte);
}

function recupDegrade() {
  var codeDegrade = document.getElementById("tryDegrade").value;
  execute(codeDegrade);
}

function execute(command) {
  try {
    efface(0,0,400,200);
    eval(command);
  }
  catch (e) {
    console.log("Erreur ", e);
    return;
  }
}
