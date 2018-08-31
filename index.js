window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myTopBar").style.fontSize = "20px";    
  } else {
    document.getElementById("myTopBar").style.fontSize = "17px";
  }
}
