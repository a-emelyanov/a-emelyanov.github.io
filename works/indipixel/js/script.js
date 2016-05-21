var link = document.querySelector(".menu");
var popup = document.querySelector(".popup-menu");
var close = document.querySelector("*");

  link.addEventListener("click", function(event) {
        event.preventDefault();
        link.classList.add("menu-show");
        popup.classList.add("popup-menu-show");
        });


 popup.addEventListener("mouseleave", function(event) {
        popup.classList.remove("popup-menu-show");
        link.classList.remove("menu-show");
      });

 link.addEventListener("mouseleave", function(event) {
        popup.classList.remove("popup-menu-show");
        link.classList.remove("menu-show");
      });

 

  window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("popup-menu-show")) {
            popup.classList.remove("popup-menu-show");
          }
          if (link.classList.contains("menu-show")) {
            link.classList.remove("menu-show");
          }
        }
      });