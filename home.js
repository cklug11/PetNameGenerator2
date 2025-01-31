//For homepage
function updateTextOnResize() {
    var textDiv = document.getElementById("firstText");
    
    if (window.innerWidth <= 430) {
      textDiv.innerHTML = "Congratulations<br>On Your<br> New Pet!";
    }  else {
    textDiv.innerHTML = "Congratulations On Your New Pet!";  
    }
  }
updateTextOnResize();

window.addEventListener("resize", updateTextOnResize)
