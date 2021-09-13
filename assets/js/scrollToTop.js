var scrollToTopBtn = document.querySelector(".widget--btn-up");
var rootElement = document.documentElement;

    function scrollToTop() {
      // Scroll to top logic
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    
scrollToTopBtn.addEventListener("click", scrollToTop);