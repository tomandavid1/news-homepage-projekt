function disableScrolling() {
  // Focus before scroll
  window.focus();
  // setTimeout and auto scroll to top (0,1) for mobile fix
  setTimeout(function() {
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPos > 1) {
        window.scrollTo(0,1);
    }
  }, 0);
  // get check elements
  var navCheckBox = document.getElementById("mobile-nav");
  var bodyElement = document.getElementsByTagName("BODY")[0];
  var checkBtnImg = document.getElementById("img-nav-button");
  // change overflow
  if (navCheckBox.checked == true){
    checkBtnImg.src="images/icon-menu-close.svg";
    bodyElement.style.overflow = "hidden"; 
  } else {
    checkBtnImg.src="images/icon-menu.svg";
    bodyElement.style.overflow = "visible";
  }
}