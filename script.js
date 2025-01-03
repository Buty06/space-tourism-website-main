const clouse_aside = document.querySelector(".clouse_aside");
const menu_activator = document.querySelector(".menu_activator");
const aside = document.querySelector(".aside");

menu_activator.addEventListener("click", () => {
  aside.classList.remove("transition2");
  aside.classList.remove("display");
  aside.classList.add("transition");
});

clouse_aside.addEventListener("click", () => {
  aside.classList.add("transition2");

  setTimeout(() => {
    aside.classList.add("display");
  }, 1000);
});

const links = [
  {
    text: "00 Home",
    href: "/",
    className: "aside_link",
  },
  {
    text: "01 Destination",
    href: "/destination-moon.html",
    className: "aside_link",
  },
  {
    text: "02 Crew",
    href: "/crew-commander.html",
    className: "aside_link",
  },
  {
    text: "03 Technology",
    href: "/technology-capsule.html",
    className: "aside_link",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();

  const currentPathname = window.location.pathname;

  for (const { text, href, className } of links) {
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = href;
    anchor.className = className;

    const petunia = new URL(href, window.location.origin).pathname

    if (currentPathname === petunia) {
      anchor.classList.add('active')
    }

    fragment.appendChild(anchor);
  }

  const linksSection = document.createElement("section");
  linksSection.className = "aside_links";
  linksSection.appendChild(fragment);

  aside.appendChild(linksSection);
});
