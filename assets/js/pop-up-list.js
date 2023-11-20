document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".custom-list-item");
    const popups = document.querySelectorAll(".custom-popup");
  
    listItems.forEach(function(item) {
      item.addEventListener("click", function() {
        const target = item.getAttribute("data-target");
  
        popups.forEach(function(popup) {
          popup.style.display = "none";
        });
  
        document.getElementById(target).style.display = "block";
      });
    });
  
    const closeButtons = document.querySelectorAll(".custom-close-popup");
  
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        button.parentNode.style.display = "none";
      });
    });
  });
  