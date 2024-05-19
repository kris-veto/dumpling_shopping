// Use JavaScript to toggle the display/hide of the hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.getElementById("nav_menu");
const menu = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", function () {
  navMenu.classList.toggle("nav-active");
  menu.classList.toggle("nav-active");
});


let total = 0;
function openSidebar(itemName, itemPrice) {
    
    document.getElementById("sidebar").style.width = "16%";
    document.getElementById("selectedItem").innerText = `Selected Item: ${itemName}`;
    document.getElementById("totalItem").innerText = `This item price: $${itemPrice}`;
    // Update total
    total += itemPrice;
    document.getElementById("total").innerText = `Total Display: $${total}`;
}

function resetTotaL() {
    total = 0;
    document.getElementById("total").innerText = `Total Display: $${total}`;
  }
  
  function closeSidebar() {
    document.getElementById("sidebar").style.width = "0"; // Set width to 0 to close
    document.getElementById("selectedItem").innerText = "";  // Clear selected item text
    document.getElementById("totalItem").innerText = "";    // Clear item price text
  }







