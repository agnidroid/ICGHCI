(function () {
  let toTopBtn = document.getElementById("backtotop");
  console.log(toTopBtn);
  window.onscroll = () => {
    scrollFunction();
  };
  function scrollFunction() {
    //   Show Button
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      toTopBtn.classList.remove("d-none");
    } else {
      toTopBtn.classList.add("d-none");
    }
  }
  scrollFunction();

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  toTopBtn.addEventListener("click", topFunction);
})();

(function () {
  const navbar = document.getElementById("navbar");
  const menu = navbar.querySelector("div.menu");
  const close_btn = document.getElementById("close-btn");
  const open_btn = document.querySelector("#open-btn");
  const links = navbar.querySelectorAll('li.link');

  open_btn.addEventListener("click", (e) => {
    menu.classList.replace("hide","show")
    console.log(e.target)
  })
  function closeMenu() {
    menu.classList.replace("show","hide")
  }

  links.forEach(element => {
    element.addEventListener("click", closeMenu)
  });
  close_btn.addEventListener("click", closeMenu)


  console.log(navbar);
  console.log(links);
})();