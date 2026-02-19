// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Experience accordion
const items = document.querySelectorAll(".exp-item");

items.forEach(item => {
  const header = item.querySelector(".exp-header");
  const content = item.querySelector(".exp-content");
  const btn = item.querySelector(".toggle-btn");

  header.addEventListener("click", () => {
    // Close other items
    items.forEach(other => {
      if (other !== item) {
        other.querySelector(".exp-content").style.maxHeight = null;
        other.querySelector(".toggle-btn").textContent = "+";
      }
    });

    // Toggle current
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      btn.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      btn.textContent = "−";
    }
  });
});
