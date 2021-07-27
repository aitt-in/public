
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 120 ) {
    document.getElementById("header").style.boxShadow= "0px 8px 16px 0px rgba(0,0,0,0.2)"
    document.getElementById("header").style.position= "fixed"
    document.getElementById("header").style.top= "0"
    document.getElementById("header").style.backgroundColor= "white"
    document.getElementById("header").style.width= "100%"
    document.getElementById("header").style.transitionTimingFunction= "easeIn"
    document.getElementById("header").style.transition= "0.2s";

    
      

  } 

else {
    document.getElementById("header").style.boxShadow= "0 0 0 0 rgba(0,0,0,0.2)"
    document.getElementById("header").style.removeProperty("position")
    document.getElementById("header").style.removeProperty("top")
    document.getElementById("header").style.backgroundColor= "white"
    document.getElementById("header").style.removeProperty("width")
  }
}
