const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebar_open"),
      sidebarClose = document.querySelector(".sidebar_close");

sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

sidebarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});

body.addEventListener("click", (e) => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebar_open") && !nav.contains(clickedElm)) {
        nav.classList.remove("active");
    }
});
