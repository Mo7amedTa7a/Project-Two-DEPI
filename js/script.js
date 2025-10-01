const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY) { 
    header.style.display = "none"; 
  } else {
    header.style.display = "block";
  }
});
