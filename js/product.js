document.addEventListener("DOMContentLoaded", (event) => {
  var openbtns = document.querySelectorAll(".main>.cards>li>img");
  var modals = document.querySelectorAll(".modal");
  var closebtns = document.querySelectorAll(".close");
  openbtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      modals[index].style.display = "block";
    });
  });
  closebtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      modals[index].style.display = "none";
    });
  });
  window.addEventListener("click", (event) => {
    for (i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.display = "none";
      }
    }
  });
});
