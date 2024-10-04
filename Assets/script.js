window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const largeLogoContainer = document.getElementById("large-logo-container");
    const smallLogo = document.getElementById("small-logo");

    if (window.scrollY > 20) {
        navbar.classList.add("navbar-scrolled");
        largeLogoContainer.classList.add("hide-large-logo"); 
    } else {
        navbar.classList.remove("navbar-scrolled"); 
        largeLogoContainer.classList.remove("hide-large-logo"); 
    }
});
let a = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  if(window.pageYOffset > 520){
    a.style.position = "fixed"
    a.style.top = "0"

  }else{
    a.style.position = "fixed"
    a.style.top = "20px"
  }
    
});