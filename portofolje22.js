
  /* Hamburger meny */
  const menu = document.querySelector(".menu");
  const items = document.querySelectorAll(".item");
  const toggle = document.querySelector(".toggle");
  

  /* Toggle mobile menu */
  function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-bars'></i>";
    } else {
      menu.classList.add("active");
      toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-xmark'></i>";
    }
  }


  /* Event Listeners - funksjonskall*/
toggle.addEventListener("click", toggleMenu);



