window.onscroll = function() {myFunction()};
      
      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}