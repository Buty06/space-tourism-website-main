const clouse_aside = document.querySelector(".clouse_aside");
const menu_activator = document.querySelector(".menu_activator");
const aside = document.querySelector(".aside");

menu_activator.addEventListener("click", () => {
  aside.setAttribute("style", "display: flex");
});

clouse_aside.addEventListener("click", () => {
  aside.setAttribute("style", "display: none;");
});
