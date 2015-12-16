var context;
var intervalCercle;
var intervalRect;

window.onload = function initCanvas() {
var feuille = document.getElementById("canvas");
context = feuille.getContext("2d");
cercle(60,"#ED1450");
}

var angle = 0;
var angle2 = 0.1;
var x = 260;

function trait(ax, ay, bx, by){
  context.strokeStyle = "#ED1450";
  context.beginPath();
  context.moveTo(ax, ay);
  context.lineTo(bx, by);
  context.closePath();
  context.stroke();
}

function rectangle(y){
  intervalRect = window.setInterval(function(){
    context.setLineDash[0];
    context.lineWidth = 80;
    trait(x,y,x+1,y);
    x++;
    if (x > 340){
      window.clearInterval(intervalRect);
      x = 260;
      if (y == 220){
        rectangle(380);
      }
      else if (y == 380){
        window.setTimeout(function() {
          cercle(500,"white");
        }, 2000);
      }
    }
  },20);
}

function cercle(taille, color){
  intervalCercle = window.setInterval(function(){
    context.beginPath();
    context.setLineDash([4, 20]);
    context.arc(300,300,260,angle,Math.PI*angle2, false);
    angle = angle + 0.1;
    angle2 = angle2 + 0.1;
    context.strokeStyle = color;
    context.lineWidth = taille;
    context.stroke();
    context.closePath();
    if (angle >= 4){
      window.clearInterval(intervalCercle);
      angle = 0;
      angle2 = 0.1;
      if (taille == 60) {
        rectangle(220);
      }
      else if (taille == 500){
        cercle(60,"#ED1450");
      }
    }
  },100)
}

function toggleListeTuto(){
var e = document.getElementById('listeTuto');
var titre2 = document.getElementById('titre2');
var titre3 = document.getElementById('titre3');
var titre4 = document.getElementById('titre4');


if (e.style.display == "block"){
  e.style.display = "none";
  titre2.style.display = "block";
  titre3.style.display = "block";
  titre4.style.display = "block";
}
else{
  e.style.display = "block";
  titre2.style.display = "none";
  titre3.style.display = "none";
  titre4.style.display = "none";
}
}
