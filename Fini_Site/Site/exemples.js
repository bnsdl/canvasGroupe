
function info(i){
  var hiddenLi = document.getElementById("hiddenLi"+i);
  hiddenLi.style.display = "inline-block";
  event.target.addEventListener("mouseout", efface);
  function efface(){
    hiddenLi.style.display = "none";
  }
}


  var tableauDeSites = ["http://127.0.0.1:8080/pendu.html","#","http://andrew-hoyer.com/experiments/cloth/","http://www.professorcloud.com/mainsite/canvas-nebula.htm","http://hakim.se/experiments/html5/blob/03/","http://9elements.com/io/projects/html5/canvas/"];

  function affiche(i){
    var iframe = document.getElementById("iframe");
    iframe.setAttribute('src', tableauDeSites[i]);
  }
