
let header = document.querySelector(".header");
let dropdown = document.querySelector(".header__dropdown");

function toggle(){
   header.classList.toggle("active");
}
function drop(){
    dropdown.classList.toggle("active");
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("header__shrink");
    } else {
      header.classList.remove("header__shrink");
    }
  });