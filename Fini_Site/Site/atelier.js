function info(i){
  var hiddenLi = document.getElementById("hiddenLi"+i);
  hiddenLi.style.display = "inline-block";
  event.target.addEventListener("mouseout", efface);
  function efface(){
    hiddenLi.style.display = "none";
  }
}
