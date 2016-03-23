
function info(e, i){
  var hiddenLi = document.getElementById("hiddenLi"+i);
  hiddenLi.style.display = "inline-block";
  e.target.addEventListener("mouseout", efface);
  function efface(){
    hiddenLi.style.display = "none";
  }
}


  var tableauDeSites = ["jeuPendu/pendu.html","sw/canvasJB.html","http://andrew-hoyer.com/experiments/cloth/","http://www.professorcloud.com/mainsite/canvas-nebula.htm","http://lab.hakim.se/blob/03/","http://9elements.com/io/projects/html5/canvas/"];

  function affiche(i){
    var iframe = document.getElementById("iframe");
    iframe.setAttribute('src', tableauDeSites[i]);
  }

  var header = document.getElementById("header");
