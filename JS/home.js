//For homepage
function updateTextOnResize() {
    var textDiv = document.getElementById("firstText");
    
    if (window.innerWidth <= 430) {
      textDiv.innerHTML = "Congratulations <br> On Your<br> New Pet!";
    } 
  }
window.addEventListener("resize", updateTextOnResize());
