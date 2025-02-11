//For homepage
function updateTextOnResize() {
    var textDiv = document.getElementById("firstText");
    
    if (window.innerWidth <= 487) {
      textDiv.innerHTML = "Congratulations<br>On Your<br>New Pet!";
    } else if(window.innerWidth >=523 && window.innerWidth<=1026) {
      textDiv.innerHTML = "Congratulations<br>On Your New Pet!";
    } else {
    textDiv.innerHTML = "Congratulations On Your New Pet!";  
    }
  }
  

updateTextOnResize();

window.addEventListener("resize", updateTextOnResize)
